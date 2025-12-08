import './App.css';
import React from 'react';
import ProductList from './components/ProductList';
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // let element;
  // let Buttonname = isLoggedIn ? 'Logout' : 'Login'; // ternary operator
  // // conditional rendering using if-else
  // if (isLoggedIn) {
  //   element = <h1>Welcome back!</h1>;
  // } else {
  //   element = <h1>Please sign up.</h1>;
  // }
  return (
  //  <div className="App">
  //   <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{Buttonname}</button>
  //     {element}
  //   </div> 
    <div className="App">
      <ProductList/>
        </div>
  );
}
export default App;
