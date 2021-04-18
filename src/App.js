
// Required Packages and Libraries
import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from './components/header/Header';
import Home from './components/Home';
import Dashboard from './components/Admin/Dashboard';
import MyArticels from './components/Admin/MyArticles';
import Footer from './components/Footer';
import NewArticle from './components/Admin/new-article/NewArticle';
import Articles from './components/Articles';
import ContactUs from './components/ContactUs';
import NotFound404 from './components/404/404';



const App = () => {
    return(
      <BrowserRouter>
        <Header/>
        <main className='mt-5 mb-5'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/new-article' component={NewArticle} />
            <Route path='/my-articles/:id?' component={MyArticels} />
            <Route path='/articles' component={Articles} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='*' component={NotFound404} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter> 
    )
  }

export default App;
