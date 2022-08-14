import logo from './logo.svg';
import Test from './components/test';
import './App.css';
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import MainPage from './components/MainPage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import History from './components/History';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {Helmet} from "react-helmet";


class App extends React.Component {

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div className="App">
         <Helmet>
                <meta charSet="utf-8" />
                <title>RAIVENY</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Raiveny application" />

            </Helmet>
        <Router>
          <Header isAuthenticated={isAuthenticated} className="App-header" />
         
          <Routes>
            <Route
              exact path="/"
              element={<MainPage />}            >
            </Route>
            <Route
              exact path="/AboutUs"
              element={<AboutUs />}           >
            </Route>
            <Route
              exact path="/ContactUs"
              element={<ContactUs />}           >
            </Route>
            <Route
              exact path="/History"
              element={<History />}           >
            </Route>
          </Routes>
        </Router>
        <Footer/>
      </div >
    );
  }
};

export default withAuth0(App);