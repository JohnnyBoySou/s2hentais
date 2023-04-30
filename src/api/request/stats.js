import React, {useState} from 'react'
import Axios from 'axios';
import { API_URL } from '../index';

const headers = {'Accept': 'application/json'}


export async function requestLikesForUser( identification ){
    const id = Number(identification)
    try {
        const response = await Axios.get(`${API_URL}/likes/total/${id}`, {
        headers: headers
    });
        return response.data
    } catch (error) {
        console.log(error);
    }
  }
  
  
export async function requestViewsForUser( identification ){
    const id = Number(identification)
    try {
        const response = await Axios.get(`${API_URL}/views/total/${id}`, {
        headers: headers
    });
        return response.data
    } catch (error) {
        console.log(error);
    }
  }
  
export async function requestMostPopular( identification ){
    const id = Number(identification)
    try {
        const response = await Axios.get(`${API_URL}/user/most_popular/${id}`, {
        headers: headers
    });
        return response.data
    } catch (error) {
        console.log(error);
    }
  }
  

