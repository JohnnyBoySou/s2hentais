import React, {useState} from 'react'

import { API_URL } from "../index"
import Axios from 'axios';
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
        console.log('function server')
        console.log(response.data)
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



  
export function requestPreferences(  ){

  const JSONA = localStorage.getItem('@preferences')
  const JsonString = JSON.parse(JSONA)
    
  const valor = JsonString  
  const max = 'valor_max=' + valor.valor_max
  const item =  valor.item1 

  if(valor.alugar){
    return Axios.get(`${API_URL}/feed/alugar?${item}${max}`, {
      headers: headers
  }).then(response =>  {
      return response.data
      
      
  }).catch(error => {
      console.log(error)
  })}
   if(valor.comprar){
   return Axios.get(`${API_URL}/feed/comprar?${item}${max}`, {
      headers: headers
  }).then(response => {
      return response.data;

  }).catch(error => { 
      console.log(error)
  })
  }
}





export function requestSearch( identification ){

  const id = Number(identification)
  const item = 'id=' + id

  return Axios.get(`${API_URL}/search/all?${item}`, {
      headers: headers
  }).then(response =>  {
      return response.data
  }).catch(error => {console.log(error)})
}






export function requestImobil( identification ){

    const id = Number(identification)
    const item = 'id=' + id
  
    return Axios.get(`${API_URL}/autor/all?${item}`, {
        headers: headers
    }).then(response =>  {
        return response.data[0]
    }).catch(error => {console.log(error)})
  }
  

  
  
export function getPreferences(){
    const JSONstring =  JSON.parse(localStorage.getItem('@preferences'))
    return JSONstring;  
}
 




export async function requestUserImoveis( user ){
  console.log(user)
    return Axios.get(`${API_URL}/my/imoveis?user=${user}`,  
    ).then(response => {
      return response.data
    }).catch(error => {
      console.log(error.code)
      const response = "" 
      return response
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



//s2hentais.com/novoimovel/wp-json/my/imoveis?user=1 