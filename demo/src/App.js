// import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
  import { useHistory } from 'react-router-dom';
// import Home component
import Home from "./home";
// import About component
import Google from "./google";
// import ContactUs component
// import ContactUs from "./components/ContactUs";


// import logo from "./logo.svg";
import "./App.css";
  
function App() {
  return (
    <div className="App">
    
         {/* <Home/> */}
         <Router>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="google" element={<Google />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </Router>
      {/* </header> */}
    </div>
  );
}
  
export default App;
  
// function App() {
//   return (
//     <>
//       {/* This is the alias of BrowserRouter i.e. Router */}
//       <Router>
//         <Switch>
//           {/* This route is for home component 
//           with exact path "/", in component props 
//           we passes the imported component*/}
//           <Route exact path="/" component={Home} />
            
//           {/* This route is for about component 
//           with exact path "/about", in component 
//           props we passes the imported component*/}
//           <Route path="/google" component={Google} />
            
//           {/* This route is for contactus component
//           with exact path "/contactus", in 
//           component props we passes the imported component*/}
//           {/* <Route path="/contactus" component={ContactUs} /> */}
            
//           {/* If any route mismatches the upper 
//           route endpoints then, redirect triggers 
//           and redirects app to home component with to="/" */}
//           <Redirect to="/" />
//         </Switch>
//       </Router>
//     </>
//   );
// }
  
// export default App;
// 
// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //     <code>Helllooo</code>
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  //  <div>
  //    <br></br>
  //    <br></br>
  //    <br></br>
  //    <br></br>
  //  <h3 align="center">Google Scholar</h3>
  //   <form class="form" action="/submit" method="post">
  //           <label forname="name">Name of faculty</label>
  //           <input type="text" id="name" name="name"></input>
  //       <button class="btn">Submit</button>
  //   </form>
  //  </div>
   

  // );
// }

// export default App;
