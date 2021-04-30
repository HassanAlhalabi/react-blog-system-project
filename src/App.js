
// Required Packages and Libraries
import React ,{useState} from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from './components/header/Header';
import Home from './components/Home';
import SignInForm from './components/auth/SignInForm';
import SignUpForm from './components/auth/SignUpForm';
import AdminPanel from './components/Admin/AdminPanel';
import Articles from './components/Articles';
import ArticleView from './components/ArticleView';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import NotFound404 from './components/404/404';



const App = () => {

  const [user,setUser] = useState('admin');

    return(
      <BrowserRouter>
        <Header user={user}/>
        <main>
          {
            user === 'admin' ?
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/admin-panel' component={AdminPanel} />
              <Route exact path='/articles' component={Articles} />
              <Route exact path='/articles/:id' component={ArticleView} />
              <Route path='/contact-us' component={ContactUs} />
              <Route path='*' component={NotFound404} />
            </Switch>
            :
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/signin' component={SignInForm} />
              <Route path='/signup' component={SignUpForm} />
              {/* <Route path='/admin-panel' component={SignInForm} /> */}
              <Route exact path='/articles' component={Articles} />
              <Route exact path='/articles/:id' component={ArticleView} />
              <Route path='/contact-us' component={ContactUs} />
              <Route path='*' component={NotFound404} />
            </Switch>
          }
        </main>
        <Footer />
      </BrowserRouter> 
    )
  }

export default App;
