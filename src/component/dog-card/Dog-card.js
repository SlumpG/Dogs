import React from 'react';


export default function DogCard(props) {
    
    const styleObj1 ={boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    border:'solid green 2px',width:'250px'}
    const styleObj2 ={boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    border:'solid yellow 2px',width:'250px'}
    const {name,breed,age} = props;
    let styleObj;
    if(age <4){
        styleObj =styleObj1
    }else{
        styleObj = styleObj2
    }
    return (
        <div style={styleObj}>
            <h1>Dog name :{name}</h1>
            <h2>Dog breed: {breed}</h2>
            <h2>Dog age: {age}</h2>
        </div>
    )
}


