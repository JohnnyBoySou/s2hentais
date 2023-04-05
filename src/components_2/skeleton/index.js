
import React from 'react';

export default function Skeleton({route, ...props }){
  const color = props?.color
  const width =  props?.witdh
  const height = props?.height
  
  return(
    <div style={{width: width, height: height, backgroundColor: "#00000020", borderRadius: 6,}}/>

    
  )
}



  