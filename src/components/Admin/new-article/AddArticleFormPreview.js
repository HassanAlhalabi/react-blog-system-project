import React from 'react';
import ArticleImage from '../../imgs/article-image-placeholder.png';

const AddArticleFormPreview = ({previewProps}) => {
    console.log('img article: ', previewProps.urlToImage)
    return ( 
        <div>
            <h3 className=''>Article Preview</h3>
            <div className='post-preview-panel'>
                <div className='post-image-holder-preview text-center'>
                    { previewProps.urlToImage === '' ?
                        <img src={ArticleImage} className='img-fluid' alt='post-img'/> :
                        <img src={previewProps.urlToImage} className='img-fluid' alt='post-img'/>
                    }
                </div>
                { previewProps.title && 
                    <h1 className='mt-3 mb-0'>{previewProps.title}</h1>
                }
                <div className='article-meta d-flex justify-content-between align-items-center'>
                    <div className='article-author'>
                        <span className='d-block'>{`By: ${previewProps.author}`}</span>
                    </div>
                    <div className='article-date'>
                        <span className='d-block'>{previewProps.date}</span>
                    </div>
                </div>
                {
                    previewProps.content && 
                    <pre><p className='mt-3 mb-3'>{previewProps.content}</p></pre>}
                <div className='article-tags'>
                    <div className='pt-2 pb-4'>
                    {
                        previewProps.tags.map(tag =>
                            <span className='article-tag-preview mr-2 font-weight-bold'>{tag}</span>
                        )
                    }
                    </div>
                </div>
            </div>
        </div>    
     );
}
 
export default AddArticleFormPreview;