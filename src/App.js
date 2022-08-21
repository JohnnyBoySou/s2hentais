import React from 'react';
import { ThemeProvider, } from 'styled-components';
import usePeristedState from './utils/usePersistedState'

import light from './theme/light';
import dark from './theme/dark';   
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Header from './components/header';
import Home from './screens/home'

import Preferences from './screens/preferences'
import Map from './screens/map/index'
import Details from './screens/details';
import CollectionsDetails from './screens/collections';
import Async from './screens/async'

import Search from './screens/search'
import Gallery from './screens/gallery'

//Dashboard 
import DashboardHome from './dashboard/home';
import AddImobiil from './dashboard/add_imobil';

import ImobilProfile from './screens/imobil_profile'

import './App.css';
import './fonts/Circular_Book.ttf'
import './fonts/Circular_Bold.ttf'
import './fonts/Circular_Medium.ttf'
import './fonts/Circular_Black.ttf'

const App = () => {
  const [theme, setTheme] = usePeristedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const a = false
  
  return (
    <Router>
      <ThemeProvider theme={theme}><div className="App">
      
      {a && <Header toggleTheme={toggleTheme}/>}
      <Routes>
        <Route path="/" exact element={<Async/>}/>
        
        <Route path="/app/:option" exact element={<Home/>}/>
        <Route path="/home/:option" exact element={<Home/>}/>

        <Route path="/app" exact element={<Home/>}/>
        <Route path="/home" exact element={<Home/>}/>


        <Route path="/search/:qr" exact element={<Search/>}/>
        <Route path="/pesquisar/:qr" exact element={<Search/>}/>

        <Route path="/preferences" exact element={<Preferences/>}/>
        <Route path="/preferencias" exact element={<Preferences/>}/>

        <Route path="/collections" exact element={<CollectionsDetails/>}/>
        <Route path="/colecoes" exact element={<CollectionsDetails/>}/>

        <Route path="/map" exact  element={<Map/>}/>
        <Route path="/mapa" exact  element={<Map/>}/>

        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/detalhes/:id" element={<Details/>}/>
        
        <Route path="/gallery/:id" element={<Gallery/>}/>
        <Route path="/galeria/:id" element={<Gallery/>}/>

        
        <Route path="/dashboard/add-imovel" exact element={<AddImobiil/>}/>
        <Route path="/dashboard/add/imovel" exact element={<AddImobiil/>}/>

        <Route path="/dashboard/home" exact element={<DashboardHome/>}/>
        <Route path="/dashboard" exact element={<DashboardHome/>}/>
        


      </Routes>
      </div></ThemeProvider>
    </Router>
  );
}

export default App;