import React from "react";


import Skeleton  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export function Sk() {
    return(
        <div style={{width: 360, margin: 10,}}>
            <Skeleton height={260}   style={{borderRadius: 12, marginBottom: 20,}}/>
            <Skeleton height={30} style={{marginBottom: 10}}/>
            <Skeleton height={30} style={{marginBottom: 10}}/>
            <Skeleton height={30} width="70%" style={{marginBottom: 10}}/>
        </div>
    )
}


export function Sk2() {
    return(
        <div style={{ margin: 10, flexDirection: 'row', display: 'flex'}}>
            <Skeleton height={220} width={180}  style={{borderRadius: 12, marginRight: 15, marginBottom: 20,}}/>
            <div style={{flexDirection: 'column', justifyContent: 'center', paddingTop: 4}}>
            <Skeleton height={26} width={80} style={{marginBottom: 10, borderRadius: 100,}}/>
            <Skeleton height={30} width={280} style={{marginBottom: 10,}}/>
            <Skeleton height={30} width={240} style={{marginBottom: 10,}}/>
            <Skeleton height={24} width={150} style={{marginBottom: 10, }}/>
            
            <Skeleton height={60} style={{marginBottom: 10, borderRadius: 8,}}/>
          
            </div>
           </div>
    )
}