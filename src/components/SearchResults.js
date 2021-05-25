import React from 'react';
import { useParams } from 'react-router-dom';

const SearchResults = () => {

    const searchTerm = useParams('search-term');

    return ( 
        <div className='search-results'>
            sdfsdf
            {searchTerm}
        </div>
    );
}
 
export default SearchResults;