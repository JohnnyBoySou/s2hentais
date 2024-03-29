import React, {useState} from 'react'
import Axios from 'axios';
import { API_URL } from '../index';



const headers = {'Accept': 'application/json'}



export async function requestLogin( email, password ){



  const options = {
    method: 'POST',
    url: `${API_URL}/jwt-auth/v1/token`,
    headers: {"Content-Type": "application/json",},
    data: {email: email, password: password}
  };
  
  return Axios.post(`${API_URL}/jwt-auth/v1/token`,  
    {email: email, password: password}
  ).then(response => {
    return response.data
  }).catch(error => {
    console.log(error.code)
    const response = "" 
    return response
  });


  


    }
















  export async function requestRegister( params ){
    
    const {email , password, name, username} = params


  return Axios.post(`${API_URL}/jwt-auth/v1/register/person`,  
    {
      email: email, 
      password: password,
      name: name,
      login: username,
    }
  ).then(response => {
    return response.data
  }).catch(error => {
    console.log('erro')
    console.log(error)
    return error
  });

  }



  export async function requestNewImovel( data, token ){
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + token,
    }

  return Axios.post(`${API_URL}/wp/v2/posts`,  data, {headers: headers}
  ).then(response => {
    console.log(response.data)
    const finish = {"status": 200, "ID": response?.data.id}
    return finish
  }).catch(error => {
   
    if (error.response){
      console.log(error.response)
    }else if(error.request){
      console.log(error.request)
    }else if(error.message){
      console.log(error.message)
    }


    const response = "" 
    return response
  });

  }

  export async function requestEditImovel( data, token ){
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + token,
    }

  return Axios.put(`${API_URL}/wp/v2/posts/${data.acf.codigo}`,  data, {headers: headers}
  ).then(response => {
    console.log(response.data)
    const finish = {"status": 200, "ID": response?.data.id}
    return finish
  }).catch(error => {
   
    if (error.response){
      console.log(error.response)
    }else if(error.request){
      console.log(error.request)
    }else if(error.message){
      console.log(error.message)
    }


    const response = "" 
    return response
  });

  }


  
  export async function requestNewMedia( params ){
    

  }





/*




      try {
        const response = await Axios.post(`${URL_REQUUEST}/authenticate`, JSON.stringify({ email, password }), {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
  } 
  
    try {
    const response = await Axios.post(`${API_URL}/jwt-auth/v1/token`, ({ email, password }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
    });
    console.log(response.data);
    console.log('try')
    return response.data;
} catch (error) {
    console.log(error);
}
    


  */

const MEDIA_API_URL = `${API_URL}/wp/v2/media`;


export async function uploadMedia(formData, token) {
  
const mediaHeaders = {
  'Content-Type': 'form/multipart',
  'Authorization': 'Bearer' + token,
}
  try {
    const response = await Axios.post(MEDIA_API_URL, formData, { headers: mediaHeaders });
    console.log(response);
    return response.data.source_url;
  } catch (error) {
    console.log(error);
    return null;
  }
}
