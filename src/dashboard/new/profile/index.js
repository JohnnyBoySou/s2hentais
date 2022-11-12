import React, { useContext , useState, } from 'react';
import { ThemeContext } from 'styled-components';
import {
  View, 
  Container, 
  Card,
  CardTitle,
  CardLabel,
  CardValue,
  List,
  Item,
  Icon,
  ItemLabel,

  UserImg,
  CardIcon,
  CardInput,
  CardInputText,
  Line,

} from './styles';

import { ButtonOffColor, Back, ButtonBR } from '../../../theme/global'
import { BiCheck, BiWorld } from 'react-icons/bi'
import { HiOutlineMail} from 'react-icons/hi'
import { BsCalendarDate } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom';
import avatar from '../../../assets/imgs/suff.png'

const Profile = ( props ) => {

  const { color, font } = useContext(ThemeContext)
  
  const navigate = useNavigate()

  const user = props.user
  console.log(user)

  const data = {
    name: "",
    desc: "", 
    value: "",
    list: "",

  }


  const a = false;

    const items = [
        {name: "Unlimited views"},
        {name: "Show destaques"},
        {name: "Special stats"},
        {name: "Contact profile"},
        {name: "Unlimited likes"},
    ]

  return (
  
        <Card>
           <UserImg src={avatar} />
            <CardTitle>
              {user.name} #{user.id}
            </CardTitle>
            <CardLabel>
               +55 (49) 9 9193-5657 </CardLabel>
 
            <CardInput>
              <CardIcon>
                <HiOutlineMail/>
              </CardIcon>
              <CardInputText>{user.email}</CardInputText>
            </CardInput>


          <View style={{flexDirection: 'row', display: 'flex', marginBottom: 10, justifyContent: 'space-between'}}>
            <CardInput>
              <CardIcon>
                <BsCalendarDate/>
              </CardIcon>
              <CardInputText>09/09/2003</CardInputText>
            </CardInput>
            <CardInput>
              <CardIcon>    
                <BiWorld/>
              </CardIcon>
              <CardInputText>SC</CardInputText>
            </CardInput>
         
          </View>
            
            <Line/>

            <ButtonOffColor style={{marginBottom: 20, marginTop: 20,}}>Editar perfil</ButtonOffColor>

           
        </Card>

  );
};

export default Profile;