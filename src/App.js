// Required Packages and Libraries
import React, { useEffect } from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from 'react-redux';
import { articlesInit } from './store/actions/actions';

// Components
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import SignInForm from './components/auth/SignInForm';
import SignUpForm from './components/auth/SignUpForm';
import AdminPanel from './components/Admin/AdminPanel';
import Articles from './components/articles/Articles';
import ArticleView from './components/articles/ArticleView';
import FavoriteArticles from './components/FavoriteArticles';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import NotFound404 from './components/404/404';
import PrivateRoute from './components/utils/PrivateRoute';

const App = ({articlesInit}) => {

  useEffect(() => {
    articlesInit()
  })
 
  // const [user,setUser] = useState('');
  const user = 'admin';

    return(
      <BrowserRouter>
          <Header user={user}/>
          <main>
              <div>  
                <Switch>
                  <Route exact path='/' component={Landing} />
                  <Route path='/home' component={Landing} />
                  <Route path='/login' component={SignInForm} />
                  <Route path='/sign-up' component={SignUpForm} />
                  <PrivateRoute path='/admin-panel'>
                    <AdminPanel />
                  </PrivateRoute>
                  <Route exact path='/articles' component={Articles} />
                  <Route exact path='/articles/page/:page?' component={Articles} />
                  <Route exact path='/articles/:id' component={ArticleView} />
                  <Route exact path='/favorite-articles' component={FavoriteArticles} />
                  <Route path='/gallery' component={Gallery} />
                  <Route path='/contact-us' component={ContactUs} />
                  <Route path='/about-us' component={AboutUs} />
                  <Route path='/search-results/:search_term' component={SearchResults} />
                  <Route path='*' component={NotFound404} />
                </Switch>
              </div>  
          </main>
          <Footer />
      </BrowserRouter> 
    )
  }

  const mapDispatchToProps = dispatch => {
    return({
      articlesInit: () => dispatch(articlesInit()),
    })
  }


export default connect(null,mapDispatchToProps)(App);
