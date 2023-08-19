import React, { Component } from "react";
import '../src/App.css';
import axios from 'axios';

class Google extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    // const { bookID, bookTitle, bookAuthor } = this.state;

    // const book = {
    //   bookID,
    //   bookTitle,
    //   bookAuthor,
    // };

    // axios
    //   .get('http://localhost:3000/search')
    //   .then(() => console.log('Done'))
    //   .catch(err => {
    //     console.error(err);
    //   });
  };


  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h3 align="center">Google Scholar</h3>
        <form class="form" action="/submit" method="post">
          <label forname="name">Name of faculty</label>
          <input type="text" id="name" name="name"></input>
          <button class="btn" onSubmit='handleSubmit'>Submit</button>
        </form>
      </div>

    );

  }


};




export default Google;