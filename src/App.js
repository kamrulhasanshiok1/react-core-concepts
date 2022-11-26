import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  return (
    <div className='App'>
      {/* <Counter></Counter> */}
      <ExternalUser></ExternalUser>
    </div>
  );
};

function ExternalUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email} city={user.address.city}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className='friend'>
      <h3>Name: {props.name} </h3>
      <p>email: {props.email}</p>
      <p>city: {props.city}</p>
    </div>
  )
}


// useState() এমন একটা state যা change হতে পারে 
function Counter() {
  const [count, setCount] = useState(0)

  const inCreaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);




  // const inCreaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={inCreaseCount}>Increase</button>
      <br />
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}


// function Product(props) {

//   return (
//     <div className='person'>
//       <h3>Name: {props.name}</h3>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }


/*
 const products = [
    { name: 'laptop', price: 50000 },
    { name: 'phone', price: 75000 },
    { name: 'watch', price: 15000 },
    { name: 'tab', price: 150000 },
  ]
*/

{/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

      <Product name="laptop" price="47000"></Product>
      <Product name="phone" price="70000"></Product>
      <Product name="watch" price="17000"></Product>
    */}





export default App;
