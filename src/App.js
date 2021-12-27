import React,{Component} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import ScottDatabase from"./ScottDatabase"

class Header extends React.Component{
  render(){
    return (
      <header className="App-header">
        <nav>
          <ul>
            <Link to={"/ScottDatabase"}  >
              <li>
                scott 데이터베이스
              </li>
            </Link>
          
          </ul>  
        </nav>
      </header>
    );
  }

}
class Home extends React.Component{
  componentDidMount(){
    fetch("http://localhost:3001/empList.do")
    .then((res)=>(res.json()))
    .then((empList)=>{
      console.log(empList);
    });
  }
  render(){
    return (
      <div className="component">
          <h2>홈</h2>
      </div>
    );
  }
}

class App extends React.Component{
  
  render(){
    return (
      <div className="App">
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home/>}></Route>

           <Route path="ScottDatabase" element={<ScottDatabase/>}></Route>
        </Routes> 
      </div>
    );
  }
}

export default App;
