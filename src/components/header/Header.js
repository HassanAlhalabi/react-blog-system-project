import React , { useState } from 'react';
import Typorgaphy from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import VisitorNavLinks from './VisitorNavLinks';
import RegisterdLinks from './RegisteredLinks';
import UnRegisteredLinks from './UnRegisterdLinks';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import YouTube from '@material-ui/icons/YouTube';
import SearchBox from '../../components/layout/SearchBox';
import { useLocation } from 'react-router-dom';

const Header = ({user}) => {

  const pathName = useLocation().pathname;
  const [searchTerm,setSearchTerm] = useState('')
  const handleSearchTerm = e => console.log(setSearchTerm(e.target.value));
  const handleSearchSubmit = () => console.log('Searcb submit');

  return(
    <nav className='navbar d-block'>
      <div className='upper-nav d-flex pb-2 pt-2'>
        <div className={ pathName.slice(0,12) === '/admin-panel' ? 'container-fluid' : 'container'}>
          <div className='row justify-content-center justify-content-lg-between'>
            <div className='col col-sm-6 col-md-4 d-flex align-items-center'>
              <div className="logo-holder text-center text-sm-left">
                <Link to='/' className="logo">
                  <Typorgaphy className='pl-0' variant='h4' component='h1'>
                    BlogPost
                  </Typorgaphy>  
                </Link>
              </div>
            </div>
            {
              pathName.slice(0,12) === '/admin-panel' ? ''
                :
              <div className='col col-md-4'>
                <div className='navbar-social
                                d-flex align-items-center 
                                justify-content-center
                                h-100 mb-3 pt-1'>
                  <a href='#'><Facebook fontSize='large' /></a>
                  <a href='#'><Twitter fontSize='large' /></a>
                  <a href='#'><Instagram fontSize='large' /></a>
                  <a href='#'><YouTube fontSize='large' /></a>
                </div>
              </div>
            }
            <div className='col-12 mb-3 mt-3 col-sm-6 col-lg-4 d-flex justify-content-center justify-content-lg-end align-items-center'>
              {user === 'admin' || user === 'editor' || user === 'registerdClient' ? <RegisterdLinks user={user}/> :
              <UnRegisteredLinks /> }
            </div>
          </div>  
        </div>
      </div> 
      {pathName.slice(0,12) === '/admin-panel' ? 
        null
      :
        <div className='lower-nav'>
          <div className={pathName.slice(0,12) === '/admin-panel' ? 
            'container-fluid justify-content-center justify-content-sm-between' :
            'container justify-content-center justify-content-sm-between' }>
            { <VisitorNavLinks />}
            <SearchBox
              handleSearchTerm={handleSearchTerm}
              handleSearchSubmit={handleSearchSubmit} 
            />
            {/* <div className='search-box d-flex h-100 align-items-center'>
                <div className='d-flex w-100'>
                  <div className='d-flex search-box-icon text-center'>
                    <Button
                      color='primary'
                      variant='contained'
                      startIcon={<Search />}
                    />
                  </div>
                  <TextField 
                        variant='filled'
                        type='search' 
                        className=' h-auto pt-2'
                        placeholder='Search Articles...' 
                  />
                </div>  
              </div> */}
          </div>  
        </div>
      }     
        <div className='nav-bottom-border'></div>
    </nav>        
  )    
}

export default Header ;   