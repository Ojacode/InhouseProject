import React, { Component } from "react";
import '../src/App.css';
import axios from 'axios';

class Search extends Component {

    constructor() {
        super();
        this.state = {
            checkbox: "React",
            name: "this"

        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    formSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectedOption)

        const { checkbox, input } = this.state;

        // const book = {
        //     checkbox,
        //     input
        // };

        axios
            .post('http://localhost:3001/search', { checkbox, input })
            .then(() => console.log('Book Created'))
            .catch(err => {
                console.error(err);
            });

    };



    render() {
        return (
            <div>
                <br /><br /><br /><br />
                <h3 align="center">Search</h3>
                <form className="form" action="/search" method="post">
                    <h4>Choose input</h4>
                    <input type="radio" id="html" name="checkbox" value="AuthorAll" onChange={this.onValueChange} />
                    <label for="html">AuthorAll</label><br />
                    <input type="radio" id="html" name="checkbox" value="Author" onChange={this.onValueChange} />
                    <label for="html">Author</label><br />
                    <input type="radio" id="css" name="checkbox" value="Hindex" onChange={this.onValueChange} />
                    <label for="css">Hindex</label><br />
                    <input type="radio" id="javascript" name="checkbox" value="I10index" onChange={this.onValueChange} />
                    <label for="javascript">I-10 Index</label>
                    <br /><br />
                    <label for="Input">Input</label>
                    <input type="text" id="input" name="input" /><br />
                    <button className="btn" onSubmit={this.formSubmit}>Search</button></form>
            </div>
        )
    }
}

// export default Search

// import React, { Component } from "react";

// class Demo2 extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "React"
//         };
//         this.onValueChange = this.onValueChange.bind(this);
//         this.formSubmit = this.formSubmit.bind(this);
//     }

//     onValueChange(event) {
//         this.setState({
//             selectedOption: event.target.value
//         });
//     }

//     formSubmit(event) {
//         event.preventDefault();
//         console.log(this.state.selectedOption)
//     }

//     render() {
//         return (
//             <form onSubmit={this.formSubmit}>
//                 <div className="radio">
//                     <label>
//                         <input
//                             type="radio"
//                             value="Male"
//                             checked={this.state.selectedOption === "Male"}
//                             onChange={this.onValueChange}
//                         />
//                         Male
//                     </label>
//                 </div>
//                 <div className="radio">
//                     <label>
//                         <input
//                             type="radio"
//                             value="Female"
//                             checked={this.state.selectedOption === "Female"}
//                             onChange={this.onValueChange}
//                         />
//                         Female
//                     </label>
//                 </div>
//                 <div className="radio">
//                     <label>
//                         <input
//                             type="radio"
//                             value="Other"
//                             checked={this.state.selectedOption === "Other"}
//                             onChange={this.onValueChange}
//                         />
//                         Other
//                     </label>
//                 </div>
//                 <div>
//                     Selected option is : {this.state.selectedOption}
//                 </div>
//                 <button className="btn btn-default" type="submit">
//                     Submit
//                 </button>
//             </form>
//         );
//     }
// }

// export default Demo2;