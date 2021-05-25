import React from 'react';
import DogCard from '../dog-card';

const dogArray = [
    {name:'niko', breed:'big dogo',age:13},
    {name:'silva', breed:'small dogo',age:3},
    {name:'zoro', breed:'cute dogo',age:2},
    {name:'chopa', breed:'angry dogo',age:7},
]

export default function HomeView(){
    return( dogArray.map((dog,index)=>{
    const {name,breed,age} = dog;
    return(
        <div key={index}><DogCard name={name} breed ={breed} age={age}/></div>
        )
}))
}
