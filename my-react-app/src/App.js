import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

//import React from "react";---used when using class;
function App() {
  const  [tasks, setTasks] = useState(
    [
      {
      id:1,
      text:'Doctor Appoitnment',
      day:'Feb 5th at 2:30pm',
      reminder:true,
      },
      {
        id:2,
        text:'Meeting At School',
        day:'Feb 6th at 1:30pm',
        reminder:true,
        },
        {
          id:3,
          text:'Food Shopping',
          day:'Feb 5th at 2:30pm',
          reminder:false,
          }
    ]
  )

  return (
    <div className="container">
        <Header title='Task Tracker'/>
        < Tasks tasks={tasks} />
    
      
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
