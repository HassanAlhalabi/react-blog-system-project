import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import VisitorNavLinks from './VisitorNavLinks';
import RegisterdLinks from './RegisteredLinks';
import UnRegisteredLinks from './UnRegisterdLinks';
import SearchBox from '../../components/layout/SearchBox';
import { useLocation, useHistory } from 'react-router-dom';

const Header = ({user}) => {

  const history = useHistory();
  const pathName = useLocation().pathname;
  const [searchTerm,setSearchTerm] = useState('')
  const handleSearchTerm = e => setSearchTerm(e.target.value);
  const handleSearchSubmit = (e,searchTerm) => {
    e.preventDefault();
    if(searchTerm === undefined || searchTerm === '') {
      alert('empty inputs')
    } else {
      history.push(`/search-results/${searchTerm}`);
    }
  };

  const header = pathName !== '/' ?
      <nav className='navbar d-block'>
        <div className='upper-nav d-flex pb-1 pt-1'>
          <div className={ pathName.slice(0,12) === '/admin-panel' ? 'container-fluid' : 'container'}>
            <div className='row justify-content-between'>
              <div className='col-12 col-sm-6 d-flex align-items-center'>
                <div className="logo-holder text-center text-sm-left w-100">
                    <h1 className='m-0'>
                      <Link to='/' className="logo">Travelers</Link>
                    </h1> 
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
                  <div className='col-12 col-md-6'>
                    <SearchBox
                      searchTerm={searchTerm}
                      handleSearchTerm={handleSearchTerm}
                      handleSearchSubmit={handleSearchSubmit} 
                    />
                  </div>
                </div>
            </div>  
          </div>
        }     
          <div className='nav-bottom-border'></div>
      </nav>        
    : null ;
  return header
}

export default Header ;   