import React from 'react';
import Counter from './Counter';
class WelcomeC extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
    <h1>Hello, Class Component</h1>
    <p>Welcome {this.props.name}</p>
    <p>Your age is {this.props.age}</p>
    <p>Your address is {this.props.address}</p>
    <Counter />
    </>
    );
  }
}
export default WelcomeC;