import React from "react";

import { Row, Column } from "../../theme/global";
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
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
            <Skeleton height={30} width={280} style={{marginBottom: 10, }}/>
            <Skeleton height={30} width={240} style={{marginBottom: 10,}}/>
            <Skeleton height={24} width={150} style={{marginBottom: 10, }}/>
            
            <Skeleton height={60} style={{marginBottom: 10, borderRadius: 8,}}/>
          
            </div>
           </div>
    )
}



export function Sk3() {
    
    const savedTheme = localStorage.getItem('theme');
    return(
        <SkeletonTheme baseColor={savedTheme === 'dark' ? "#292929" : "#CCC"} highlightColor={savedTheme === 'dark' ? "#3D3D3D" : "#f1f1f1"}>
        <Column>
            <Row>
                <Skeleton height={180} width={260} style={{borderRadius: 12, marginRight: 15, marginBottom: 20,}}/>
                <Skeleton height={180} width={260} style={{borderRadius: 12, marginRight: 15, marginBottom: 20,}}/>
                <Skeleton height={180} width={260} style={{borderRadius: 12, marginRight: 15, marginBottom: 20,}}/>
                <Skeleton height={180} width={220} style={{borderRadius: 12, marginRight: 15, marginBottom: 20,}}/>
            </Row>
          <Row>
            <Skeleton height={340} width={722} style={{marginBottom: 10, borderRadius: 16,}}/>
            <Skeleton height={340} width={300} style={{marginBottom: 10, borderRadius: 16, marginLeft: 20,}}/>
          </Row>  
        </Column>
        </SkeletonTheme>
    )
}