import React , { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AddArticleFormTemplate from '../new-article/AddArticleFormTemplate';
import AddArticleFormPreview from '../new-article/AddArticleFormPreview';
import { CategoriesContext } from '../../../contexts/categoriesContext';
import { connect } from 'react-redux';
import { updateArticle } from '../../../store/actions/actions';
import { showFlashMessage } from '../../../components/layout/FlashMessage';


const EditArticle = ({ updateArticle , articles }) => {

    const articleId = useParams('id').id;
    const article = articles.filter(article => `${article.id}` === articleId)[0];
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
        content:     article.content,
        date:        article.date,
        categories:  initialCategories,
        newCategory: '',
        tags:        article.tags,
        newTag:      '',
        urlToImage: article.urlToImage,
        isPublished: article.isPublished,
    })
    const [date,setDate]                     = useState(null)
    const [titleError,setTitleError]         = useState(false)
    const [authorError,setAuthorError]       = useState(false) 
    const [contentError,setContentError]     = useState(false)  
    const [errorMessage,setErrorMessage]     = useState(null) 

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

    console.log('inputs:',inputs)
    console.log('categories in context:',categories)

    const handleFormSubmit = (event , action) => {
        event.preventDefault();
        if(inputs.title === '') {
            setTitleError(true);
            setErrorMessage('Required Fields are Missing');
            return null;
        } else {
            setTitleError(false);
        }
        if(inputs.author === '') {
            setAuthorError(true);
            setErrorMessage('Required Fields are Missing');
            return null;
        } else {
            setAuthorError(false);
        }
        if(inputs.content === '') {
            setContentError(true);
            setErrorMessage('Required Fields are Missing');
            return null;
        } else {
            setContentError(false);
        }
        setErrorMessage(false)
        const updatedArticle = {
            id: articleId,
            title: inputs.title,
            author: inputs.author,
            content: inputs.content,
            urlToImage: '',
            date: inputs.date,
            categories: inputs.categories.filter(
                category => category.isChecked === true).map(
                    category => category.value),
            tags: inputs.tags,
            isPublished: action === 'publish' ? true : inputs.isPublished
        }
        updateArticle(updatedArticle);
        showFlashMessage('Article Has Been Updated Succesfully');
    }  

    return(
        <div className='add-article-form pt-4 pb-4'>
            <div className='container-fluid'>
                <Typography variant='h4'>Edit article</Typography>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <AddArticleFormTemplate formTemplateProps={
                            {
                                handleChange,
                                inputs,
                                handleAddCategory,
                                handleAddTag,
                                handleRemoveTag,
                                titleError,
                                authorError,
                                contentError,
                                errorMessage,
                                handleFormSubmit,   
                            }
                        }/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <AddArticleFormPreview previewProps={inputs} />
                    </div>
                </div>
            </div>    
        </div>
                
    );
}

const mapStateToProps = state => {
    return ({
        articles: state.articles
    })
}

const mapDispatchToProps = dispatch => {
    return {
        updateArticle: article => dispatch(updateArticle(article))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditArticle);