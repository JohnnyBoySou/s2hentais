import React, { useContext , useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from 'styled-components';
import { 
  Container, 
  
  
  Nav,
  NavBt
} from './styles';
import './styles.css'

import LogoH from '../../assets/imgs/logo_s.png'
import { BsArrowRight } from 'react-icons/bs'

import { Row } from '../../theme/global';


import { useNavigate } from 'react-router-dom';
const Header = ({ toggleTheme }) => {

  const { color, } = useContext(ThemeContext)

  const navigate = useNavigate()
  const a = false;
    
  const [isSticky, setIsSticky] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
      setHasScrolled(true);
    } else if (window.pageYOffset <= 0 && hasScrolled) {
      setHasScrolled(false);
    } else {
      setIsSticky(false);
    }
  };


  

  return (
    
    <Container>
      
    <Nav sticky={isSticky} hasScrolled={hasScrolled}>
      <Link to={'../'}>
        <img alt="logo imovel" src={LogoH} style={{width: 64,}} />
      </Link>
       
       <Row style={{justifyContent: 'center', background: 'none', }}>
          <a href="#planos" ><NavBt>Feed</NavBt></a>
          <a href="#planos"><NavBt>Destaques</NavBt></a>
          <a href="#planos" > <NavBt>Pesquisar</NavBt></a>
        </Row>
        
        <Row style={{background: 'none',marginRight: 80, }}>
          <NavBt onClick={() => navigate('/dashboard')} style={{border: '1.4px solid #00000020', background: color.light, paddingTop: 6, paddingBottom: 6, paddingLeft: 25, paddingRight: 25, borderRadius: 5,}}>Dashboard</NavBt>
         <NavBt onClick={() => navigate('/auth/register')} style={{color: color.primary, }}>Blog</NavBt>
          <BsArrowRight style={{marginTop: 20, marginLeft: -20, fontSize: 22, color: color.primary,}}/>
        </Row>
      
      </Nav>

    </Container>
  );
};

export default Header;