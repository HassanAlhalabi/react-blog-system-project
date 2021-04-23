import React , {useContext, useState } from 'react';
import {useHistory} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AddArticleFormTemplate from './AddArticleFormTemplate';
import AddArticleFormPreview from './AddArticleFormPreview';
import { CategoriesContext } from '../../../contexts/categoriesContext';
import { connect } from 'react-redux';
import { addArticle as addNewArticle } from '../../../store/actions/actions';
// import Button from '@material-ui/core/Button';
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
        newTag: ''
    })
    // const [date,setDate] = useState('')
    const [error,setError] = useState('')
    const history = useHistory()    

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

    const addArticle = e => {
        e.preventDefault();
        if( inputs.title === '' || inputs.title === undefined ) {
            setError('Title is Missing!!')
        } else if( inputs.author === '' || inputs.author === undefined ) {
            setError('Author name is required!!') 
        } else if( inputs.content === '' || inputs.content === undefined ) {
            setError('There is No Content!!')
        } else {
            const newArticle = {
                id: process(),
                title: inputs.title,
                author: inputs.author,
                content: inputs.content,
                urlToImage: '',
                date: '',
                categories: inputs.categories.filter(category => category.isChecked === true),
                tags: inputs.tags
            }
            props.addNewArticle(newArticle);
            history.push('/admin-panel/my-articles');
        }
    }

    // Error Message
    let errorMessage = error === '' ? '' :
    <span className='shaking-message alert alert-danger d-block text-center'>{error}</span>

    return(
        <div className='add-article-form'>
            {/* <div className='add-article-options d-flex justify-content-end pt-1 pb-1'>
                <Button variant='contained' color='primary' size='large'>Preview</Button>
                <Button variant='contained' color='primary' size='large'>Publish</Button>
            </div> */}
            <div className='container-fluid'>
                <Typography variant='h4'>Add a new article</Typography>
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
                                addArticle,   
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

const mapDispatchToProps = dispatch => {
    return {
        addNewArticle: article => dispatch(addNewArticle(article))
    }
}

export default connect(null,mapDispatchToProps)(AddArticleForm);