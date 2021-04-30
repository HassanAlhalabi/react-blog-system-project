import React from 'react'

const AddArticleFormPreview = ({previewProps}) => {
    return ( 
        <div>
            <h3 className=''>Article Preview</h3>
            <div className='post-preview-panel'>
                <div className='post-image-holder-preview text-center'>
                    <img src='https://placeimg.com/640/480/any' className='img-fluid' alt='post-img'/>
                </div>
                {previewProps.title && 
                    <h1 className='mt-3 mb-0'>{previewProps.title}</h1>
                }
                <div className='article-meta d-flex justify-content-between'>
                    <div className='article-author'>
                        <span className='d-block'>{previewProps.author && <i>By: {previewProps.author}</i>}</span>
                    </div>
                    {/* <div className='article-date'>
                        <time className='d-block'>{dateForm}</time>
                    </div> */}
                    <div></div>
                </div>
                {
                    previewProps.content && 
                    <pre><p className='mt-3 mb-3'>{previewProps.content}</p></pre>}
            </div>
        </div>    
     );
}
 
export default AddArticleFormPreview;