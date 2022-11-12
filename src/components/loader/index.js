import React from 'react';
import LoadingSpin from "react-loading-spin";
 
const Loader = ({ type, color, size }) => (

    <div style={{alignSelf: 'center',marginTop: -6, marginBottom: -8, textAlign: 'center',}}>
        <LoadingSpin 
        numberOfRotationsInAnimation={3}
        size={size} width={4} 
        primaryColor={color} 
        secondaryColor="#ffffff40" />    
    </div>
);
 
export default Loader;