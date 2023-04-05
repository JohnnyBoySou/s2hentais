import { requestNotifications } from '../../../api/request/index'
import { useState, useEffect } from 'react';

import {
    
  SideBar, 
  ActionButtons,
  BtAction,
  MarkerRead,
  SubTitle,

  
  Notification,
  NotificationLabel,
  NotificationTitle,
  View,
  TabContainer,
  Tab
} from './styles'

import noti from '../../../assets/imgs/notify.png'

const Notify = () => {
    const [notifications, setNotifications] = useState([])
    function getNotifications (){
        requestNotifications().then(
        function(response, error) {
            if(response){
            setNotifications(response)  
            return
            }else if(
    console.log(error))return})
    }

    useEffect(() => {
        getNotifications()
    }, [])


    const [imoveis, setImoveis] = useState(false);
    const [todos, setTodos] = useState(true);
    
  const handeClick = (params) => { 
    if(!todos){
      setTodos(true)
      setImoveis(false)
    }else{
      setTodos(false)
      setImoveis(true)
    }
   }
   
   const a = false
return (
    <SideBar>
      <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between', paddingBottom: 15,}}>
        <SubTitle style={{marginLeft: 24, }}>Notificações</SubTitle>
      {a &&  <MarkerRead>Marcar como lida</MarkerRead>}
      </View>


      <TabContainer>
          <Tab className={todos ? "active" : ""} disabled={todos}
          onClick={handeClick}>Todos</Tab>

          <Tab className={imoveis ? "active" : ""} disabled={imoveis}
          onClick={handeClick}>Imovéis</Tab>
        </TabContainer>

  {todos && <View>
     {notifications.map((notification) => 
      <Notification>
      <NotificationTitle>{notification.titulo}</NotificationTitle>
      <NotificationLabel>{notification.descricao}</NotificationLabel>
      </Notification>

    )}
</View>}

    <img src={noti} alt="notify ilustration" 
    style={{width: 200, height: 100, position: 'absolute', bottom: 35, left: 120,}} />
    
    </SideBar>
  )}

  export default Notify;