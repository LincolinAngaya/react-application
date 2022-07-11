import Header from "./components/Header";
import Tasks from "./components/Tasks";

//import React from "react";---used when using class;
function App() {
 
  return (
    <div className="container">
        <Header title='Task Tracker'/>
        < Tasks />
    
      
    </div>

  );

}
//class
// class App extends React.Component{
//   render(){
//    return <h1>hello kenya</h1>
//   }
// }

export default App;
