import React , { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AddArticleFormTemplate from '../new-article/AddArticleFormTemplate';
import AddArticleFormPreview from '../new-article/AddArticleFormPreview';
import { EditorState,convertToRaw,convertFromRaw } from 'draft-js';
import { CategoriesContext } from '../../../contexts/categoriesContext';
import { connect } from 'react-redux';
import { updateArticle } from '../../../store/actions/actions';
import { showFlashMessage } from '../../../components/layout/FlashMessage';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { firebaseStorage}  from '../../../config/fbConfig';
import Uploading from '../../layout/Uploading';

const EditArticleLogic = ({ updateArticle , article, articleUploading }) => {

    const [categories , setCategories] = useContext(CategoriesContext);
    const initialCategories = categories.map(category => {
        if(article.categories.includes(category.value.toLowerCase())){
            return({
                ...category,
                isChecked: true
            })
        }
        return category
    })
    const [inputs,setInputs] = useState({
        title:       article.title,
        author:      article.author,
        content:     convertFromRaw(JSON.parse(article.content)),
        date:        article.date,
        categories:  initialCategories,
        newCategory: '',
        tags:        article.tags,
        newTag:      '',
        urlToImage:  article.urlToImage,
        isPublished: article.isPublished,
        inTrash:     article.inTrash
    });

    const [articleImage , setArticleImage]    = useState([]);
    const [articleImagePreview , setArticleImagePreview]    = useState(inputs.urlToImage);
    const [editorState,setEditorState]       = useState(EditorState.createWithContent(inputs.content));
    const [titleError,setTitleError]         = useState(false);
    const [authorError,setAuthorError]       = useState(false); 
    const [contentError,setContentError]     = useState(false);  
    const [errorMessage,setErrorMessage]     = useState(null);
    const history                            = useHistory();

    const handleAddCategory = e => {
        e.preventDefault()
        if(inputs.newCategory !== '' && inputs.newCategory !== undefined) {
            let categoryIsExisted = false;
            categories.map(category => {
                if(category.value.toLowerCase() === inputs.newCategory.toLowerCase()) {
                    categoryIsExisted = true
                }
                return null
            })
            if(!categoryIsExisted) {
                const newCategories = [
                    ...inputs.categories,
                    {
                        id: categories.length + 1,
                        value: inputs.newCategory,
                        isChecked: true
                    }
                ]
                setCategories(newCategories)
                setInputs({
                    ...inputs,
                    newCategory: '',
                    categories: newCategories
                })
            } else {
                alert(`${inputs.newCategory} category is already existed!!!`)
            }    
        }
    }

    const handleAddTag = e => {
        e.preventDefault()
        if(inputs.newTag !== '' && inputs.newTag !== undefined) {
            let tagIsExisted = false;
            inputs.tags.map(tag => {
                if(tag.toLowerCase() === inputs.newTag.toLowerCase()) {
                    tagIsExisted = true
                }
                return null
            })
            if(!tagIsExisted) {
                setInputs({
                    ...inputs,
                    newTag: '',
                    tags: [...inputs.tags,inputs.newTag]
                })
            } else {
                alert(`${inputs.newTag} tag is already existed!!!`)
            }    
        }
    } 

    const handleRemoveTag = removedTag => {
        let newTagsList = inputs.tags.filter(tag => tag !== removedTag)
        setInputs({
            ...inputs,
            tags: newTagsList
        })
    }

    const handleChange = e =>  { 
        let newCats = [];
        newCats = inputs.categories.map(n => {
            if(e.target.value === n.value) {
                n.isChecked = e.target.checked
            }
            return n
        })
        e.target.type === 'checkbox' ?
            setInputs({
                ...inputs,
                categories: newCats
            })
        :
            setInputs({
                ...inputs,
                [e.target.name] : e.target.value})
    }

    const handleEditorState = editorState => {
        setEditorState(editorState);
        setInputs({
            ...inputs,
            content: editorState.getCurrentContent()
        });
    };

    const handleImageUpload = (imageList) => {
        setArticleImage(imageList[0].file);
        setArticleImagePreview(imageList[0].data_url)
    };

    const handleFormSubmit = async (event , action) => {
        event.preventDefault();
        let noErrors = true;
        if(inputs.title === '' || inputs.title === undefined ) {
            setTitleError(true);
            setErrorMessage('Required Fields are Missing');
            noErrors = false;
        } else {
            setTitleError(false);
        }
        if(inputs.author === '') {
            setAuthorError(true);
            setErrorMessage('Required Fields are Missing');
            noErrors = false;
        } else {
            setAuthorError(false);
        }
        if(inputs.content === '') {
            setContentError(true);
            setErrorMessage('Required Fields are Missing');
            noErrors = false;
        } else {
            setContentError(false);
        }
        if(noErrors) {
            setErrorMessage(false);

            if(articleImage.length !== 0) {
                const storageRef = ref(firebaseStorage,articleImage.name);
                const uploadTask = uploadBytesResumable(storageRef, articleImage);

                uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            console.log(snapshot.state);
                    }
                }, 
                (error) => {
                    console.log(error)
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        const updatedArticle = {
                            id: article.id,
                            title: inputs.title,
                            author: inputs.author,
                            content: JSON.stringify(convertToRaw(inputs.content)),
                            urlToImage: downloadURL,
                            date: inputs.date,
                            categories: inputs.categories.filter(
                                category => category.isChecked === true).map(
                                    category => category.value),
                            tags: inputs.tags,
                            isPublished: action === 'publish' ? true : inputs.isPublished,
                            inTrash: inputs.inTrash
                        }
                        updateArticle(updatedArticle);
                        action === 'publish' ?
                        showFlashMessage('Article Has Been Updated Successfuly') :
                        showFlashMessage('Article Has Been Saved Successfuly');
                        history.push('/admin-panel/all-articles'); 
                    });
                });

            } 

            if( articleImage.length === 0 ) {
                const updatedArticle = {
                    id: article.id,
                    title: inputs.title,
                    author: inputs.author,
                    content: JSON.stringify(convertToRaw(inputs.content)),
                    urlToImage: '',
                    date: inputs.date,
                    categories: inputs.categories.filter(
                        category => category.isChecked === true).map(
                            category => category.value),
                    tags: inputs.tags,
                    isPublished: action === 'publish' ? true : inputs.isPublished,
                    inTrash: inputs.inTrash
                }
                await updateArticle(updatedArticle);
                action === 'publish' ?
                showFlashMessage('Article Has Been Updated Successfuly') :
                showFlashMessage('Article Has Been Saved Successfuly');
                history.push('/admin-panel/all-articles'); 
            }
        }
    }

    return(
        <div className='row'>
            {articleUploading === true ? <Uploading /> : null }
            <div className='col-12 col-md-6'>
                <AddArticleFormTemplate formTemplateProps={
                    {
                        handleChange,
                        handleEditorState,
                        editorState,
                        inputs,
                        handleAddCategory,
                        handleAddTag,
                        handleRemoveTag,
                        handleImageUpload,
                        titleError,
                        authorError,
                        contentError,
                        errorMessage,
                        handleFormSubmit   
                    }
                }/>
            </div>
            <div className='col-12 col-md-6'>
                <AddArticleFormPreview previewProps={inputs} articleImage={articleImagePreview}/>
            </div>
        </div>
                
    );
}

const mapStateToProps = state => {
    return({
        articleUploading: state.articles.articleUploading
    })
}

const mapDispatchToProps = dispatch => {
    return {
        updateArticle: article => dispatch(updateArticle(article))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditArticleLogic);