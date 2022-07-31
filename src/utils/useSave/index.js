import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


async function usePersistedState(key, initialState){
    const [state, setState] =  useState (() => {
      const fetchData = async () => {
        const storageValue = await AsyncStorage.getItem(key) 
     
      }
        if(storageValue){
            return JSON.parse(storageValue)
        } else{
            return initialState;
        }
    })

     useEffect(() => {
       const fetchData = async () => {
          await AsyncStorage.setItem(key, JSON.stringify(state))}
    }, [key, state]);

    return [state, setState]

}

export default usePersistedState;




async function useSave(key, initialState){

   try {
      const jsonValue = JSON.stringify(initialState)
      await AsyncStorage.setItem(key, jsonValue)
    }   catch (e) {
    console.log(e)
    }

}