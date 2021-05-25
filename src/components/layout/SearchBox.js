import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';

const SearchBox = ({searchTerm,handleSearchTerm,handleSearchSubmit}) => {
    return ( 
        <form onSubmit={e => handleSearchSubmit(e,searchTerm)}>
            <div className='search-box d-flex h-100 align-items-center'>
                <div className='d-flex w-100'>
                    <div className='d-flex search-box-icon text-center'>
                    <Button
                        className='d-flex justify-content-center'
                        color='primary'
                        variant='contained'
                        size='large'
                        startIcon={<Search />}
                        onClick={e => handleSearchSubmit(e,searchTerm)}
                    />
                    </div>
                    <TextField 
                        value={searchTerm}
                        variant='filled'
                        type='search' 
                        size='small'
                        className='h-auto'
                        label='Search Articles...'
                        onChange={e => handleSearchTerm(e)} 
                    />
                </div>  
            </div>
        </form>
    );
}
 
export default SearchBox;