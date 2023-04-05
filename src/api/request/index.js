import React, {useState} from 'react'

import { API_URL } from "../index"
import Axios from 'axios';
import { Navigate } from 'react-router-dom';
const headers = {'Accept': "application/json"}
//'Cache-Control': 's-maxage=60, stale-while-revalidate',
// 'Cache-Control': 'max-age=0'
export function requestServerData( params ){
    const valor = params
    const max = 'valor_max=' + valor.valor_max
    const item =  valor.item1 

    if(valor.alugar){
      return Axios.get(`${API_URL}/feed/alugar?${item}${max}`, {
        headers: headers
    }).then(function (response) {
        return response.data
        
        
    }).catch(error => {
        console.log(error)
    })}
    if(valor.comprar){
     return Axios.get(`${API_URL}/feed/comprar?${item}${max}`, {
        headers: headers
    }).then(function (response) {
        return response.data;

    }).catch(error => { 
        console.log(error)
    })
    }
  }



  

export function requestPreferences(){
  try {
    const jsonValue = localStorage.getItem('@preferences')
    if(jsonValue != null) {
      const valor = JSON.parse(jsonValue)
      return valor
    }
  } catch(e) {
    console.log(e)
  }
}



export function requestSavePreferences( params){
  try {
    const data = JSON.stringify(params)
    localStorage.setItem('@preferences', data)
    return true;
  } catch(e) {
    console.log(e)
  }
}


export function requestFeed( ){
  //&bedroom=${value.bedroom}&bathroom=${value.bathroom}
  try {
    const jsonValue = localStorage.getItem('@preferences')
    if(jsonValue != null) {
      const value = JSON.parse(jsonValue)
      console.log(value)
      if(value.alugar){
        return Axios.get(`${API_URL}/feed/alugar?${value.item1}valor_max=${value.valor_max}`, {
           headers: headers
       }).then(function (response) {
           return response.data
       }).catch(error => {
           console.log(error)
       })}
       if(value.comprar){
         return Axios.get(`${API_URL}/feed/comprar?${value.item1}valor_max=${value.valor_max}&bedroom=${value.bedroom}&bathroom=${value.bathroom}`, {
           headers: headers
       }).then(function (response) {
          return response.data
       }).catch(error => { 
           console.log(error)
       })
       }
    }
  } catch(e) {
    console.log(e)
  } 
}


  




export async function requestSearch( identification ){

  const id = Number(identification)
  const item = 'id=' + id

  try {
    const response = await Axios.get(`${API_URL}/search/all?${item}`, {
      headers: headers
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}





export function requestCEP( value ){
  if(value){
  const val = String(value)
  const cep = val.replace('-', "")

  return Axios.get(`https://viacep.com.br/ws/${cep}/json/`, {
      headers: headers
  }).then(response =>  {
      return response.data
  }).catch(error => {console.log(error)})
  }
  else{
    return
  }
}




export async function requestImobil( identification ){

    const id = Number(identification)
    const item = 'id=' + id
  
    try {
    const response = await Axios.get(`${API_URL}/autor/all?${item}`, {
      headers: headers
    });
    return response.data[0];
  } catch (error) {
    console.log(error);
  }
  }
  

  
  
export function getPreferences(){
    const JSONstring =  JSON.parse(localStorage.getItem('@preferences'))
    return JSONstring;  
}
 




export async function requestUserImoveis( user ){
  console.log(user)
    return Axios.get(`${API_URL}/user/imoveis?id=${user}`,  
    ).then(response => {
      return response.data
    }).catch(error => {
      console.log(error)
      const response = "" 
      return response
    });
}



export async function requestAuthorImoveisByCategories(id, category ){
    return Axios.get(`${API_URL}/user/categories?author=${id}&category=${category.value}`,  
    ).then(response => {
      console.log(response)
      return response.data
    }).catch(error => {
      console.log(error)
      return error
    });
}




export async function requestNotifications( ){
    return Axios.get(`${API_URL}/notifications/all`,  
    ).then(response => {
      return response.data
    }).catch(error => {
      console.log(error.code)
      const response = "" 
      return response
    });
}


export async function requestEditUser( userID){

  const userData = {
    name: '', 
    password: '',
    
  }

  return Axios.get(`${API_URL}/user/${userID}`, userData 
  ).then(response => {
    return response.data
  }).catch(error => {
    console.log(error.code)
    const response = "" 
    return response
  });
}


export async function requestLogout(){
  try {
    const user = localStorage.getItem('@user')
    if(user){
      localStorage.removeItem('@user')
      Navigate('/auth')   
    }
   } catch (error) {
    console.log(error)
  }

}



export async function requestUser(){
  try {
    const jsonValue = localStorage.getItem('@user')
    if(jsonValue != null) {
      const valor = JSON.parse(jsonValue)
      return valor
    }
  } catch(e) {
    console.log(e)
  }
}

export async function requestSaveUser(user){
  const jsonValue = JSON.stringify(user)
  localStorage.setItem('@user', jsonValue)  
  return true
}

export async function removeUser(){
  try {
    localStorage.removeItem('@user')
    const response = true
    return response;
   
  } catch(e) {
    console.log(e)
  }
}



export async function requestPrice(valor){
  const max = 'valor_max=' + valor.valor_max
  
  if(valor.alugar){
    return await Axios.get(`${API_URL}/price/alugar?${valor.item1}${max}`, {
      headers: headers
  }).then(function (response) {
    return response.data    
  }).catch(error => {
      console.log(error)
  })}
  if(valor.comprar){
    return await Axios.get(`${API_URL}/price/comprar?${valor.item1}${max}`, {
      headers: headers
  }).then(function (response) {
      return response.data
  }).catch(error => { 
      console.log(error)
  })
  }
}

export async function requestAuthor(value){
const autor_id = Number(value)
return await Axios.get(`${API_URL}/autor/all?id=${autor_id}`, {
    headers: headers
}).then(function (response) {
  return response.data    
}).catch(error => {
    console.log(error)
})
}

export async function requestAuthorData(value){
const autor_id = Number(value)
return await Axios.get(`${API_URL}/author/posts?id=${autor_id}`, {
    headers: headers
}).then(function (response) {
  return response.data    
}).catch(error => {
    console.log(error)
})
}


export async function requestItemID(value){
const id = Number(value)
return await Axios.get(`${API_URL}/search/item?id=${id}`, {
    headers: headers
}).then(function (response) {
  return response.data[0]   
}).catch(error => {
    console.log(error)
})
}



export async function requestLogin( email, password ){
return Axios.post(`https://s2hentais.com/novoimovel/wp-json/jwt-auth/v1/token`,  
  {
    email: email, 
    password: password
  }
).then(response => {
  return response.data
}).catch(error => {
  console.log(error.response.data)
  const response = "" 
  return response
});

  }



  export async function requestRegister( params ){

    
    const {email , password, first_name, last_name, username,} = params

    const urlQuery = `${API_URL}/user/register?
    username=${username}
    &email=${email}
    &password=${password}
    &first_name=${first_name}
    &last_name=${last_name}`

  return Axios.post(urlQuery,  
  ).then(response => {
    return response.data
  }).catch(error => {
    console.log(error)
    return error
  });

  }


  





  export async function revalidateToken(){
    try {
      const jsonValue = localStorage.getItem('@user')
      if(jsonValue != null) {
        const valor = JSON.parse(jsonValue)
        return Axios.post(`https://s2hentais.com/novoimovel/wp-json/jwt-auth/v1/token`,  
          {
            email: valor.email, 
            password: valor.password
          }
        ).then(async response => {
          const user = response.data
          const userValue = {email: user.email, password: valor.password, token: user.token, id: user.id, name: user.name}
          const jsonValue = JSON.stringify(userValue)
          localStorage.setItem('@user', jsonValue)  
          return response.data.token;

        }).catch(error => {
          console.log(error.response.data)
          const response = "" 
          return response
        });

      }
    } catch(e) {
      console.log(e)
    }
  }


  


export async function requestUserEdit( params ){

  const {id, first_name, last_name, avatar, cep, token, telefone, whatsapp, email_comercial, facebook, instagram} = params
  const headers = {
    'Content-Type': 'form/multipart',
    'Authorization': 'Bearer' + token,
  }
  return Axios.put(`${API_URL}/user/edit?id=${id}&first_name=${first_name}&last_name=${last_name}&cep=${cep}&avatar=${avatar}&telefone=${telefone}&whatsapp=${whatsapp}&email_comercial=${email_comercial}&instagram=${instagram}&facebook=${facebook}`,  
{headers: headers}
  ).then(response => {
    return response.data
  }).catch(error => {
    console.log('erro')
    console.log(error)
    return error
  });

  }


  export async function requestUserEditPreferences( params ){

    const {ID, tipo, categoria, value_max, bedroom, bathroom, token} = params
  
    const headers = {
      'Content-Type': 'form/multipart',
      'Authorization': 'Bearer' + token,
    }
    return Axios.post(`${API_URL}/wp/v2/users/${ID}`,  
      {
        acf: {           
          Tipo: tipo,
          categoria: categoria, 
          value_max: value_max,
          ativo: "true",
        }
      }, {headers: headers}
    ).then(response => {
      return response.data
    }).catch(error => {
      console.log('erro')
      console.log(error)
      return error
    });
  
    }


    

  export async function requestUserEndpoint( params ){

    const ID = params
  
    return Axios.get(`${API_URL}/user/data?ID=${ID}`).then(response => {
      return response.data[0]
    }).catch(error => {
      console.log('erro')
      console.log(error)
      return error
    });
  
    }




  
  export async function requestSaveIDs(){
    try {
      const value = localStorage.getItem('@SAVE__IDS')
      if(value !== null) {
        const result = JSON.parse(value)
        
        return result
      }
    } catch(e) {
      console.log(e)
    }
  }
//s2hentais.com/novoimovel/wp-json/my/imoveis?user=1 