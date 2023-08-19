import React, { Component } from "react";
import '../src/App.css';
import axios from 'axios';

class Home extends Component {
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

        axios
            .get('http://localhost:3000/google')
            .then(() => console.log('Done'))
            .catch(err => {
                console.error(err);
            });
    };

    render() {
        return (
            <div className="container">
                <div className="box">
                    <h3 align="center">Google Scholar</h3>
                    <form action="/google">
                        <button className="btn">Go</button>
                    </form>
                </div>
                <div className="box">
                    <h3 align="center">Scopus</h3>
                    <form action="/scopus">
                        <button class="btn">Go</button>
                    </form>
                </div>
            </div>
        );
    };


};

export default Home;
