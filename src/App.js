import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navigationbar from './components/Navbar/Navigationbar';
import Instructors from './components/Instructors/Instructors';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header></Header>
         <Navigationbar></Navigationbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path = '/home'>
              <Home></Home>
            </Route>
            <Route path = '/about'>
              <About></About>
            </Route>
            <Route path = '/services'>
              <Services></Services>
            </Route>
            <Route path = '/instructors'>
              <Instructors></Instructors>
            </Route>
            <Route path="*">
            <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
