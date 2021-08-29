import React from 'react';
import ArticleImage from '../../imgs/article-image-placeholder.png';
import {convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const AddArticleFormPreview = ({previewProps,articleImage}) => {
    return ( 
        <div>
            <h3 className=''>Article Preview</h3>
            <div className='post-preview-panel'>
                <div className='position-relative post-image-holder-preview text-center'>
                    { articleImage === '' ?
                        <img src={ArticleImage} className='img-fluid' alt='post-img'/> :
                        <img src={articleImage} className='img-fluid' alt='post-img'/>                    
                    }
                    <div className='article-categories position-absolute'>
                    {
                        previewProps.categories.filter(category => {
                            return category.isChecked === true && category.value.toLowerCase() !== 'uncategorized';
                        }).map(category => <span>{category.value}</span>)
                    }
                    </div>
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
                <div className='mt-3 mb-3 article-content'>
                     <div dangerouslySetInnerHTML={{__html: draftToHtml(previewProps.content)}}></div>
                </div>
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