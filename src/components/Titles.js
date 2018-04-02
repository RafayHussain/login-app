import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Titles extends Component {
  render(){
    return(
      <div className="">
        <h1 className="title-container__title">{this.props.innerText}</h1>
        <p className="title-container__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <span className="title-container__bottom">Don't have an account? <Link to={this.props.path}>{this.props.signText}</Link></span>
      </div>
    );
  }
}
export default Titles;