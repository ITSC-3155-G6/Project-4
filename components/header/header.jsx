import React from 'react';
import './header.css';
import '../example/Example.jsx'

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: window.models.exampleModel().name,
      motto: window.models.exampleModel().motto,
    };
  }
  
  render() {
    return (
    <header>
      <h1 className="titl">
        <code>{this.state.name}</code>
      </h1>
      <p className="des">
        <code>{this.state.motto}</code>
      </p>
    </header>
    );
  }
}
export default Header;