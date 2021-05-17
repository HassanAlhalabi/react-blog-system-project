import React , {useContext, useState } from 'react';
import {useHistory} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AddArticleFormTemplate from './AddArticleFormTemplate';
import AddArticleFormPreview from './AddArticleFormPreview';
import { CategoriesContext } from '../../../contexts/categoriesContext';
import { connect } from 'react-redux';
import { addArticle as addNewArticle } from '../../../store/actions/actions';
import { showFlashMessage } from '../../../components/layout/FlashMessage';
import { process } from 'uniqid';

const  AddArticleForm = (props) => {

    console.log(props)
    
    const [categories , setCategories] = useContext(CategoriesContext);
    const [inputs,setInputs] = useState({
        title: '',
        author: '',
        content: '',
        categories: categories,
        newCategory: '',
        tags: [],
        newTag: '',
        urlToImage: '',
    });
    const [articleImage , setArticleImage]    = useState('');
    const [titleError,setTitleError]          = useState(false);
    const [authorError,setAuthorError]        = useState(false); 
    const [contentError,setContentError]      = useState(false);
    const [errorMessage,setErrorMessage]      = useState(null); 
    const history                             = useHistory();  
    const date                                = new Date();

    const handleAddCategory = e => {
        e.preventDefault();
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
                    ...categories,
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

    const handleImageUpload = (imageList) => setArticleImage(imageList[0].data_url);

    const handleChange = e =>  { 
        let newCats = [];
        newCats = categories.map(n => {
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

    // console.log('inputs:',inputs)
    // console.log('categories in context:',categories)

    const handleFormSubmit = (event , action) => {
        event.preventDefault();
        let noErrors = true;
        console.log(inputs.title)
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
            setErrorMessage(false)
            const newArticle = {
                id: process(),
                title: inputs.title,
                author: inputs.author,
                content: inputs.content,
                urlToImage: '',
                date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
                categories: inputs.categories.filter(
                    category => category.isChecked === true).map(
                        category => category.value),
                tags: inputs.tags,
                isPublished: action === 'publish' ? true : false
            }
            props.addNewArticle(newArticle);
            action === 'publish' ?
                showFlashMessage('Article Has Been Published Successfuly') :
                showFlashMessage('Article Has Been Saved Successfuly');
            history.push('/admin-panel/all-articles'); 
        }
    }

    return(
        <div className='add-article-form pt-4 pb-4'>
            <div className='container-fluid'>
                <Typography variant='h4'>Add a new article</Typography>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <AddArticleFormTemplate formTemplateProps={
                            {
                                handleChange,
                                inputs,
                                handleAddCategory,
                                handleAddTag,
                                handleRemoveTag,
                                handleImageUpload,
                                titleError,
                                authorError,
                                contentError,
                                errorMessage,
                                handleFormSubmit,   
                            }
                        }/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <AddArticleFormPreview previewProps={inputs} articleImage={articleImage} />
                    </div>
                </div>
            </div>    
        </div>
                
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addNewArticle: article => dispatch(addNewArticle(article))
    }
}

export default connect(null,mapDispatchToProps)(AddArticleForm);