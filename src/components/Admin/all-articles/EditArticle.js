import React , { useContext, useState } from 'react';
import { useHistory , useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AddArticleFormTemplate from '../new-article/AddArticleFormTemplate';
import AddArticleFormPreview from '../new-article/AddArticleFormPreview';
import { CategoriesContext } from '../../../contexts/categoriesContext';
import { connect } from 'react-redux';
import { addArticle as addNewArticle } from '../../../store/actions/actions';

const EditArticle = ({ updateArticle , articles }) => {

    const articleId = useParams('id').id * 1;
    const article = articles.filter(article => article.id === articleId)[0];
    const [categories , setCategories] = useContext(CategoriesContext);
    const [inputs,setInputs] = useState({
        title:       article.title,
        author:      article.author,
        content:     article.content,
        categories:  categories.map(category => {
                        if(article.categories.includes(category.value.toLowerCase())){
                            category.isChecked = true
                        } else {
                            category.isChecked = false
                        }
                        return category
        }),
        newCategory: '',
        tags:        article.tags,
        newTag:      ''
    })
    const [date,setDate] = useState('')
    const [error,setError] = useState('')
    // const history = useHistory()    

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

    const handleRemoveCategory = (id) => {
        let newCategoryList = categories.filter(
            category => category.id !== id
        )
        setCategories(newCategoryList)
        setInputs({
            ...inputs,
            categories: newCategoryList
        })
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

    console.log('inputs:',inputs)
    console.log('categories in context:',categories)

    const handleFormSubmit = e => {
        e.preventDefault();
        if( inputs.title === '' || inputs.title === undefined ) {
            setError('Title is Missing!!')
        } else if( inputs.author === '' || inputs.author === undefined ) {
            setError('Author name is required!!') 
        } else if( inputs.content === '' || inputs.content === undefined ) {
            setError('There is No Content!!')
        } else {
            const updatedArticle = {
                id: articleId,
                title: inputs.title,
                author: inputs.author,
                content: inputs.content,
                urlToImage: '',
                date: '',
                categories: categories,
                tags: inputs.tags
            }
            updateArticle(updatedArticle);
            // history.push('/admin-panel/my-articles');
        }
    }

    // Error Message
    let errorMessage = error === '' ? '' :
    <span className='shaking-message alert alert-danger d-block text-center'>{error}</span>

    return(
        <div className='add-article-form'>
            <div className='container-fluid'>
                <Typography variant='h4'>Edit article</Typography>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <AddArticleFormTemplate formTemplateProps={
                            {
                                handleChange,
                                inputs,
                                handleAddCategory,
                                handleRemoveCategory,
                                handleAddTag,
                                handleRemoveTag,
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
        updateArticle: article => dispatch(addNewArticle(article))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditArticle);