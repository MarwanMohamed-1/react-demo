function welcome(props){
    console.log(props);
    return (
        <div className="App">
          <h1>Welcome {props.name} </h1>
            <h2>Your age is {props.age} </h2>
            <h3>Your address is {props.address} </h3>
        </div>
      );
}
export default welcome;