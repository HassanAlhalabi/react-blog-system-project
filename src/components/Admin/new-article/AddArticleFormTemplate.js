import React from 'react';
import ImageUploading from 'react-images-uploading';
import DeleteRounded from '@material-ui/icons/DeleteRounded';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddAPhoto from '@material-ui/icons/AddAPhoto';

const AddArticleFormTemplate = ({formTemplateProps}) => {
    return(
    <form className='mt-3'>
        <TextField
            type='text' 
            name='title'
            variant='filled' 
            label='Title' 
            className='w-100 mb-4'
            value={formTemplateProps.inputs.title}
            onChange={formTemplateProps.handleChange}
            autoComplete='off'
            required
            error={formTemplateProps.titleError} />
        <TextField
            type='text' 
            name='author'
            variant='filled' 
            label='Author' 
            className='w-100 mb-4'
            value={formTemplateProps.inputs.author}
            onChange={formTemplateProps.handleChange}
            required
            error={formTemplateProps.authorError}
            />
        <TextField    
            type='text' 
            name='content'
            variant='filled' 
            label='Content' 
            className='w-100 mb-4'
            value={formTemplateProps.inputs.content}
            onChange={formTemplateProps.handleChange}
            autoComplete='off'
            multiline
            rows='20'
            required
            error={formTemplateProps.contentError}
            />    
        <div className='form-group'>
            <label htmlFor='article-category'>Categories:</label><br />  
            <div className='categories-input'> 
                {
                   formTemplateProps.inputs.categories.map(
                       category => 
                        <div className='category mr-1 pl-2 pr-2 mb-2' key={category.id}>
                            <Checkbox 
                                value={category.value} 
                                color='primary' 
                                name='category'
                                onChange={formTemplateProps.handleChange}
                                checked={category.isChecked}/>      
                            <span>{category.value}</span>
                        </div>
                   ) 
                }  
            </div>
            <div className='mt-2 mb-2'>
                <TextField
                    type='text' 
                    name='newCategory'
                    variant='filled' 
                    label='Add New Category' 
                    className='w-100 mb-2'
                    value={formTemplateProps.inputs.newCategory}
                    onChange={formTemplateProps.handleChange}/>
                <Button 
                    variant='contained'
                    color='primary'
                    size='small'
                    onClick={formTemplateProps.handleAddCategory}
                    disabled={
                        formTemplateProps.inputs.newCategory === undefined ||
                        formTemplateProps.inputs.newCategory === '' ? true : false } 
                    >
                    Add Category
                </Button>  
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
                                    <div className='remove-tag text-center ml-2 d-inline-block' >
                                        <DeleteRounded variant='filled' color='secondary' onClick={() => formTemplateProps.handleRemoveTag(tag)}/>
                                    </div>
                                </div>
                        )
                    }
                </div>
                <div className='mt-2 mb-2'>
                    <TextField
                        type='text' 
                        name='newTag'
                        variant='filled' 
                        label='Add Article Tags' 
                        className='w-100 mb-2'
                        value={formTemplateProps.inputs.newTag}
                        onChange={formTemplateProps.handleChange}/>
                    <Button 
                        id='add-tag-btn'
                        variant='contained'
                        size='small'
                        color='primary'
                        onClick={formTemplateProps.handleAddTag}
                        disabled={
                            formTemplateProps.inputs.newTag === undefined ||
                            formTemplateProps.inputs.newTag === '' ? true : false }
                        >
                        Add Tag
                    </Button>
                </div>
            </div>
            <div className='mt-2 mb-2'>
                <label htmlFor='article-image'>Article Image:</label><br />
                <ImageUploading
                    value={formTemplateProps.articleImage}
                    onChange={formTemplateProps.handleImageUpload}
                    dataURLKey="data_url">
                    {({
                        onImageUpload,
                        isDragging,
                        dragProps
                    }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                            <button
                                className='add-image-button pt-4 pb-4'
                                style={isDragging ? { color: 'red !important' } : null}
                                onClick={onImageUpload}
                                {...dragProps}>
                                    Click or Drop image here
                                    <div className='pt-3'>
                                        <AddAPhoto fontSize='large'/>
                                    </div>
                            </button>
                        </div>
                    )}
                </ImageUploading>
            </div>            
        </div>
        <div className='mb-3'>
            {formTemplateProps.successMessage && 
                <Alert 
                    severity='success' 
                    variant='filled'
                    className='shaking-message'>
                        {formTemplateProps.successMessage}
                </Alert>}
            {formTemplateProps.errorMessage && 
                <Alert 
                    variant='filled' 
                    severity='error' 
                    className='shaking-message'>
                        {formTemplateProps.errorMessage}
                </Alert>}
        </div>
        <div className='text-center mb-5'>
            <ButtonGroup>
                <Button 
                    type='submit' 
                    variant='contained' 
                    color='primary' 
                    size='large'
                    onClick={ event => formTemplateProps.handleFormSubmit(event , 'publish') }
                    disabled={
                        (formTemplateProps.inputs.title === '' || formTemplateProps.inputs.title === undefined) 
                        ||
                        (formTemplateProps.inputs.author === '' || formTemplateProps.inputs.author === undefined) 
                        ||
                        (formTemplateProps.inputs.content === '' || formTemplateProps.inputs.content === undefined) }>
                        Publish
                </Button>
                <Button 
                    type='submit' 
                    variant='contained' 
                    color='primary' 
                    size='large'
                    onClick={ event => formTemplateProps.handleFormSubmit(event , 'save') }
                    disabled={
                        (formTemplateProps.inputs.title === '' || formTemplateProps.inputs.title === undefined) 
                        ||
                        (formTemplateProps.inputs.author === '' || formTemplateProps.inputs.author === undefined) 
                        ||
                        (formTemplateProps.inputs.content === '' || formTemplateProps.inputs.content === undefined) }>
                        Save
                </Button>
            </ButtonGroup>   
        </div>
    </form>
    )}
export default AddArticleFormTemplate