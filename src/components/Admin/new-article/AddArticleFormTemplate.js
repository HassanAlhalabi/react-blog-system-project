import React from 'react'

const AddArticleFormTemplate = ({formTemplateProps}) => {
    return(
    <form className='mt-3' onSubmit={formTemplateProps.addArticle}>
        <div className='form-group'>
            <label htmlFor='article-title'>Title:</label>
            <input 
                id='article-title'
                type='text' 
                className='form-control w-100 mb-3'
                onChange={formTemplateProps.handleChange}
                value={formTemplateProps.inputs.title}
                name="title"
                autoComplete='off'
                />
            <label htmlFor='article-author'>Author:</label>
            <input 
                id='article-author'
                type='text' 
                className='form-control w-100 mb-3'
                onChange={formTemplateProps.handleChange}
                value={formTemplateProps.inputs.autohor}
                name="author"
                autoComplete='off'
                />
            <label htmlFor='article-content'>Content:</label>
            <textarea
                id='article-content'
                className='form-control w-100'
                onChange={formTemplateProps.handleChange}
                value={formTemplateProps.inputs.content}
                name='content'
                />
            <label htmlFor='article-category'>Categories:</label><br />    
            <div className='categories-input'> 
                {
                   formTemplateProps.inputs.categories.map(
                       category => 
                        <div className='category mr-1 d-flex justify-content-between align-items-center pl-2 pr-2 mb-2' key={category.id}>
                            <input
                                type='checkbox'
                                name='category'
                                value={category.value}
                                onChange={formTemplateProps.handleChange}
                                checked={category.isChecked}/>
                            <span>{category.value}</span>
                            <div 
                                className='remove-category text-center d-inline-block'
                                id='remove-category'
                                onClick={() => formTemplateProps.handleRemoveCategory(category.id)}
                            >
                                <span className='p-0'>x</span>
                            </div>
                        </div>
                   ) 
                }  
            </div>
            <div className=
                'd-flex mt-2 align-items-center flex-wrap flex-sm-nowrap justify-content-center'>
                <input 
                    type='text' 
                    name='newCategory' 
                    className='form-control mb-2 mt-2'
                    placeholder='Add New Category'
                    value={formTemplateProps.inputs.newCategory}
                    onChange={formTemplateProps.handleChange}/>
                <button 
                    id='add-category-btn'
                    className='btn btn-primary ml-2 p-2'
                    onClick={formTemplateProps.handleAddCategory}
                    disabled={
                        formTemplateProps.inputs.newCategory === undefined ||
                        formTemplateProps.inputs.newCategory === '' ? true : false } 
                    >
                    Add Category
                </button>    
            </div> 
            <label htmlFor='article-category'>Tags:</label><br />
            <div className='tags-input'>
                <div className='tags-holder d-flex flex-wrap'>
                    {
                        formTemplateProps.inputs.tags.map(
                            tag => 
                                <div 
                                    key={formTemplateProps.inputs.tags.indexOf(tag)} 
                                    className='tag p-2 mr-2 mb-2 d-flex align-items-center'>
                                    {tag}
                                    <div 
                                        className='remove-tag text-center ml-2 d-inline-block'
                                        id='remove-tag'
                                        onClick={() => formTemplateProps.handleRemoveTag(tag)}
                                    >
                                        <span>x</span>
                                    </div>
                                </div>
                        )
                    }
                </div>
                <div className=
                'd-flex mt-2 align-items-center flex-wrap flex-sm-nowrap justify-content-center'>
                    <input 
                        type='text'
                        name='newTag'
                        className='form-control mb-2'
                        placeholder='Add Article Tags' 
                        value={formTemplateProps.inputs.newTag}
                        onChange={formTemplateProps.handleChange}/>
                    <button 
                        id='add-tag-btn'
                        className='btn btn-primary ml-2 p-2'
                        onClick={formTemplateProps.handleAddTag}
                        disabled={
                            formTemplateProps.inputs.newTag === undefined ||
                            formTemplateProps.inputs.newTag === '' ? true : false }
                        >
                        Add Tag
                    </button>
                </div>
            </div>            
        </div>
        <div>
            {formTemplateProps.errorMessage}
        </div>
        <div>
            <button className='publish-btn'>
                <span className='w-100'>Publish <i className='fa fa-plus'></i></span>
            </button>
        </div>
    </form>
    )}
export default AddArticleFormTemplate