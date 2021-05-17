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
      <div className='upper-nav d-flex pb-1 pt-1'>
        <div className={ pathName.slice(0,12) === '/admin-panel' ? 'container-fluid' : 'container'}>
          <div className='row justify-content-between'>
            <div className='col-12 col-sm-6 d-flex align-items-center'>
              <div className="logo-holder text-center text-sm-left w-100">
                <Link to='/' className="logo">
                  <Typorgaphy className='pl-0' variant='h4' component='h1'>
                    BlogPost
                  </Typorgaphy>  
                </Link>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-4 d-flex justify-content-center justify-content-sm-end align-items-center'>
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
            'container-fluid' :
            'container' }>
              <div className='row'>
                <div className='col-12 col-md-6 d-flex align-items-center'>
                  { <VisitorNavLinks />}
                </div>
                {
                // pathName.slice(0,12) === '/admin-panel' ? ''
                //   :
                // <div className='col-12 col-md-4'>
                //   <div className='navbar-social
                //                   d-flex align-items-center 
                //                   justify-content-center
                //                   h-100'>
                //     <a href='#'><Facebook fontSize='large' /></a>
                //     <a href='#'><Twitter fontSize='large' /></a>
                //     <a href='#'><Instagram fontSize='large' /></a>
                //     <a href='#'><YouTube fontSize='large' /></a>
                //   </div>
                // </div>
                }
                <div className='col-12 col-md-6'>
                  <SearchBox
                    handleSearchTerm={handleSearchTerm}
                    handleSearchSubmit={handleSearchSubmit} 
                  />
                </div>
              </div>
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