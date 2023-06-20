import { useState } from 'react'

import './App.css'
import Tasty from './components/Tasty'
import Pizza1 from './images/piz1.jpg'
import Pizza2 from './images/piz2.jpg'
// const App = () => {
 
//   const pizzas = [
//     {
//       name: 'Margherita',
//       info: 'good',
//       price: 9.99,
//       sign:'+',
//       images:{Pizza1}
//     },
//     {
//       name: 'Pepperoni',
//       price: 11.99,
//       
//     },
//     {
//       name: 'Vegetarian',
//       price: 10.99,
//       
//     },
//     {
//       name: 'Hawaiian',
//       price: 12.99,
//      
//     },
//   ];

//   return (
//     <div>
//       {pizzas.map((pizza, index) => (
//         <Tasty
//           key={index}
//           name={pizza.name}
//           price={pizza.price}
//           info={pizza.info}
//           image={pizza.images}
//         />
//       ))}
//     </div>
//   );
// };


function App(){
  return(
    <div className='menu'>
          <Tasty name="Italian pizza with tomatoes topping and leaves" price="$25.14" info="BEST FOR ALL" sign='+'>
       <img src={Pizza1} height={200} width={200}/>
    </Tasty><hr/><br/>
    <Tasty name="Napiletana spicy pizza with mashroom and leaves" price="$55.00" info="TOP CHOICES" sign='+'>
       <img src={Pizza2} height={200} width={200}/>
       </Tasty><hr/><br/>
       <Tasty name="Calofonia pizza with leaves and olives" price="$40.00" info="FOR KIDS" sign='+'>
       <img src={Pizza1} height={200} width={200}/>
       </Tasty><hr/><br/>
       <Tasty name="Italian pizza with tomatoes topping and leaves" price="$25.14" info="BEST IN VEGAN" sign='+'>
       <img src={Pizza1} height={200} width={200}/>
       </Tasty>
       </div>
  )
}
export default App
