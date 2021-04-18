import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import AdminNavLinks from './AdminNavLinks';
import VisitorNavLinks from './VisitorNavLinks';

const Header = () => {

  const [user,setUser] = useState('admin');

  return(
    <nav className='navbar d-block'>
      <div className='upper-nav d-flex pb-2 pt-2'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col col-md-4'>
              <div className="logo-holder pb-2 pt-2 text-center text-sm-left">
                <Link to='/' className="logo">Blogger</Link>
              </div>
            </div>
            <div className='col col-md-4'>
              <div className='navbar-social
                              d-flex align-items-center 
                              justify-content-center 
                              justify-content-sm-end
                              justify-content-md-start
                              h-100 mb-3 pt-1'>
                <a href='https://twitter.com'><i className='fab fa-twitter fa-fw fa-2x'></i></a>
                <a href='https://facebook.com'><i className='fab fa-facebook fa-fw fa-2x'></i></a>
                <a href='https://instagram.com'><i className='fab fa-instagram fa-fw fa-2x'></i></a>
                <a href='https://youtube.com'><i className='fab fa-youtube fa-fw fa-2x'></i></a>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='search-box d-flex h-100 align-items-center'>
                <div className='d-flex w-100'>
                  <div className='d-flex search-box-icon text-center'>
                    <button><i className='fa fa-search m-auto'></i></button>
                  </div>
                  <input 
                        type='search' 
                        className='form-control h-auto pt-2'
                        placeholder='Search Articles...' />
                </div>  
              </div>
            </div>
          </div>  
        </div>
      </div>      
      <div className='lower-nav'>
        <div className='container-fluid'>
          { user === 'admin' && <AdminNavLinks />}
          { user === 'visitor' && <VisitorNavLinks />}
        </div>  
      </div>   
    </nav>        
  )    
}

export default Header ;   