import React from 'react';
import AddArticleForm from './AddArticleForm';
import { CategoriesProvider } from '../../../contexts/categoriesContext';

const NewArticle = () => {
    return (
        <CategoriesProvider> 
            <div className='new-article'>        
                <AddArticleForm />     
            </div>
        </CategoriesProvider>    
     );
}
 
export default NewArticle;