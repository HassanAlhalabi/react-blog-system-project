import React from 'react';
import Typorgaphy from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import VisitorNavLinks from './VisitorNavLinks';
import Search from '@material-ui/icons/Search';
import RegisterdLinks from './RegisteredLinks';
import UnRegisteredLinks from './UnRegisterdLinks';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import YouTube from '@material-ui/icons/YouTube';
import { useLocation } from 'react-router-dom';

const Header = ({user}) => {

  const pathName = useLocation().pathname;

  return(
    <nav className='navbar d-block'>
      <div className='upper-nav d-flex pb-2 pt-2'>
        <div className={ pathName.slice(0,12) === '/admin-panel' ? 'container-fluid' : 'container'}>
          <div className='row justify-content-between'>
            <div className='col col-sm-6 col-md-4'>
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
              <div className='col col-md-4 order-3 order-md-2'>
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
            <div className='col-12 col-sm-6 col-md-4 d-flex order-2 order-md-3 justify-content-center justify-content-sm-end align-items-center'>
              {user === 'admin' || user === 'registerdClient' ? <RegisterdLinks user={user}/> :
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
            <div className='search-box d-flex h-100 align-items-center'>
                <div className='d-flex w-100'>
                  <div className='d-flex search-box-icon text-center'>
                    <button><Search /></button>
                  </div>
                  <input 
                        type='search' 
                        className='form-control h-auto pt-2'
                        placeholder='Search Articles...' />
                </div>  
              </div>
          </div>  
        </div>
      }     
        <div className='nav-bottom-border'></div>
    </nav>        
  )    
}

export default Header ;   