import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { 

  Title,
  Main,

  Subtitle,
  Spacing,
  
} from './styles';


import ListV from '../../structure/cards/list_v';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { ButtonBR,   ButtonPR } from '../../theme/global'

import phone from '../../assets/imgs/phone.png'

const BannerPhone = () => {

  const { color } = useContext(ThemeContext)
    
  const openLink = () => {
    // open playstore && app store
  }

return (
  <Main>

    <div style={{flexDirection: 'row', display: 'flex', background: color.primary, 
padding: 20, borderRadius: 16,}}>
        <div style={{ width: "60%", padding: 60, display: 'flex', flexDirection: 'column'}}>
            <Title style={{fontSize: 52, color: "#fff", margin: 0, }}>App novo imóvel!</Title>
            <Subtitle style={{fontSize: 28, marginTop: 10, color: "#f1f1f1dd", }}>Baixe o app em seu celular e encontre o seu novo imóvel com mais facilidade.</Subtitle>    
            <ButtonPR style={{background: color.light, color: color.primary, width: 200, marginTop: 40,}} onClick={openLink}>
                BAIXAR APP
            </ButtonPR>
        </div>
        <div style={{width: "40%",}}>
            <img src={phone} style={{width: 200, height: 300, position: 'absolute', marginTop: 65,}}/>
        </div>


    
    </div>
</Main>
  );
};

export default BannerPhone;