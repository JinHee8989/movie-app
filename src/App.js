import React from "react";

function Food({name,picture}){  // =function Food(props.fav){}
  return <div>
    <h1>I Like {name}</h1> 
    <img src = {picture}/>
  
  </div>
}

const foodILike = [{
  name : "Gimbab",
  image : "https://pixabay.com/ko/photos/%ec%9d%8c%ec%8b%9d%ec%82%ac%ec%a7%84-%ed%95%9c%ec%8b%9d-%ea%b9%80%eb%b0%a5-2610864/"
},
{
  name : "Ramen",
  image : "https://pixabay.com/ko/photos/%eb%9d%bc%eb%a9%b4-%ec%9d%bc%eb%b3%b8-%ec%9d%8c%ec%8b%9d-%ec%9a%94%eb%a6%ac-2199962/"
}]

function App() {
  return (
    <div>
      <h1>hello!!!</h1>

      {foodILike.map(dish => <Food name ={dish.name} picture = {dish.image}/>)}
      
    </div>
  );
}

export default App;
