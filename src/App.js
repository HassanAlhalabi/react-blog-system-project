// Required Packages and Libraries
import React ,{useEffect, useState} from 'react';
import { BrowserRouter , Route , Switch , useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import SignInForm from './components/auth/SignInForm';
import SignUpForm from './components/auth/SignUpForm';
import AdminPanel from './components/Admin/AdminPanel';
import Articles from './components/articles/Articles';
import ArticleView from './components/articles/ArticleView';
import FavoriteArticles from './components/FavoriteArticles';
import LatestNews from './components/LatestNews';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import NotFound404 from './components/404/404';

const App = () => {

  const [user,setUser] = useState('admin');
  const pathName = window.location.pathname;
  console.log(pathName)

  useEffect(() => {
    setUser('admin');
  },[]);

    return(
      <BrowserRouter>
          <main>
            {
              user === 'admin' || user === 'editor' ?
              <div>  
                {/* {pathName !== '/' && <Header user={user}/> } */}
                <Header user={user}/>
                <Switch>
                  <Route exact path='/' component={Landing} />
                  <Route path='/home' component={Landing} />
                  <Route path='/admin-panel' component={AdminPanel} />
                  <Route exact path='/articles' component={Articles} />
                  <Route exact path='/articles/page/:page?' component={Articles} />
                  <Route exact path='/articles/:id' component={ArticleView} />
                  <Route exact path='/news' component={LatestNews} />
                  <Route exact path='/favorite-articles' component={FavoriteArticles} />
                  <Route path='/contact-us' component={ContactUs} />
                  <Route path='/about-us' component={AboutUs} />
                  <Route path='/search-results/:search_term' component={SearchResults} />
                  <Route path='*' component={NotFound404} />
                </Switch>
              </div>  
              :
              <div>  
                <Header user={user}/>
                <Switch>
                  <Route exact path='/' component={Landing} />
                  <Route path='/home' component={Landing} />
                  <Route path='/signin' component={SignInForm} />
                  <Route path='/signup' component={SignUpForm} />
                  <Route path='/admin-panel' component={SignInForm} />
                  <Route exact path='/articles' component={Articles} />
                  <Route exact path='/articles/page/:page?' component={Articles} />
                  <Route exact path='/articles/:id' component={ArticleView} />
                  <Route exact path='/news' component={LatestNews} />
                  <Route exact path='/favorite-articles' component={FavoriteArticles} />
                  <Route path='/about-us' component={AboutUs} />
                  <Route path='/contact-us' component={ContactUs} />
                  <Route exact path='/search-results/:search_term' component={SearchResults} />
                  <Route path='*' component={NotFound404} />
                </Switch>
              </div>   
            }
          </main>
          <Footer />
      </BrowserRouter> 
    )
  }

export default App;
