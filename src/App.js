import React from "react";

function Food({fav}){  // =function Food(props.fav){}
  return <h1>I Like {fav}</h1>
}

function App() {
  return (
    <div>
      <h1>hello!!!</h1>

      <Food fav="kimchi" 
      />
      <Food fav="ramen" 
      />
      <Food fav="dalgona" 
      />
      <Food fav="milk" 
      />
      
    </div>
  );
}

export default App;
