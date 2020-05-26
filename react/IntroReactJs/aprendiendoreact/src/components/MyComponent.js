import React, {Component} from 'react';

class MyComponent extends Component{

    render(){

        let recipe = {
          name: 'Pizza',
          ingredients: ['Tomato','Cheese','Ham Cooked'],
          calories: 400
        };


        return(
          <div className="Component">
          <h1>{recipe.name} </h1>
          <h2>{'Calories: '+recipe.calories}</h2>
          <ol>
            {
              recipe.ingredients.map((ingredient,i)=>{
                return(
                  <li key={i}>
                    {ingredient}
                  </li>
                );
              })

            }
          </ol>
          <hr/>
          </div>
        );
    }

}

export default MyComponent;
