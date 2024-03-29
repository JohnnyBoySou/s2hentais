import React from 'react';
import { ThemeProvider, } from 'styled-components';
import usePeristedState from './utils/usePersistedState'

import lightTheme from './theme/light';
import darkTheme from './theme/dark';   
import { 
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Header from './components/header';
import Home from './screens/home'
import Feed from './screens/feed'

import Preferences from './screens/preferences'
import Details from './screens/details';
import CollectionsDetails from './screens/collections';
import Async from './screens/async'

import Search from './screens/search'
import Gallery from './screens/gallery'

//Starter
import Starter from './screens/starter'


//Dashboard 
import DashboardHome from './dashboard/home';
import AddImobiil from './dashboard/add_imobil';
import DashMain from './dashboard/new/index'

//import { MuiThemeProvider } from '@material-ui/core/styles';
//import { theme } from './theme/theme';
//Components
import Components from './screens/components';

import ImobilProfile from './screens/imobil_profile'

import './App.css';
import './fonts/Circular_Book.ttf'
import './fonts/Circular_Bold.ttf'
import './fonts/Circular_Medium.ttf'
import './fonts/Circular_Black.ttf'

import Auth from './screens/auth';
import Profile from './screens/auth/profile';
import { useTheme } from './utils/useTheme';

const App = () => {
 // const [theme, setTheme] = usePeristedState('theme', light);

//  const toggleTheme = () => {
//  setTheme(theme.title === 'light' ? dark : light);
//  };
  const { theme, toggleTheme } = useTheme();
  React.useEffect(() => {
    const body = document.querySelector('body');
    body.className = theme;
  }, [theme]);
  return (
    <Router>
     
      <ThemeProvider  theme={theme === 'light' ? lightTheme : darkTheme}>
        <div className="App">
      
      <Routes>
        <Route path="/" exact element={<Starter/>}/>
        
        <Route path="/app/:option" exact element={<Home/>}/>
        <Route path="/home/:option" exact element={<Home/>}/>

        <Route path="/app" exact element={<Home/>}/>
        <Route path="/home" exact element={<Home/>}/>
        <Route path="/feed" exact element={<Feed/>}/>
        <Route path="/components" exact element={<Components/>}/>


        <Route path="/search/:qr" exact element={<Search/>}/>
        <Route path="/pesquisar/:qr" exact element={<Search/>}/>

        <Route path="/preferences" exact element={<Preferences/>}/>
        <Route path="/preferencias" exact element={<Preferences/>}/>

        <Route path="/collections" exact element={<CollectionsDetails/>}/>
        <Route path="/colecoes" exact element={<CollectionsDetails/>}/>

        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/detalhes/:id" element={<Details/>}/>
        
        <Route path="/gallery/:id" element={<Gallery/>}/>
        <Route path="/galeria/:id" element={<Gallery/>}/>

        <Route path="/dashboard/details/:id" element={<DashboardHome/>}/>
      
        <Route path="/dashboard/add-imovel" exact element={<AddImobiil/>}/>
        <Route path="/dashboard/add/imovel" exact element={<AddImobiil/>}/>
        
        <Route path="/dashboard" exact element={<DashMain/>}/>

        <Route path="/dashboard/home" exact element={<DashboardHome/>}/>
        <Route path="/dashboard/:path" exact element={<DashboardHome/>}/>
       

        <Route path="/profile" exact element={<Profile/>}/>
        
        <Route path="/starter" exact element={<Starter/>}/>
  
        <Route path="/auth/:param" exact element={<Auth/>}/>
      </Routes>
      </div></ThemeProvider>
    </Router>
  );
}

export default App;