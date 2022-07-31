import React from "react";


import Skeleton  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Sk = () => {
    return(
        <div style={{width: 360, margin: 10,}}>
            <Skeleton height={260}   style={{borderRadius: 12, marginBottom: 20,}}/>
            <Skeleton height={30} style={{marginBottom: 10}}/>
            <Skeleton height={30} style={{marginBottom: 10}}/>
            <Skeleton height={30} width="70%" style={{marginBottom: 10}}/>
        </div>
    )
}

export default Sk;