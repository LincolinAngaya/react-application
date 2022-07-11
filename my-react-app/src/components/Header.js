import React from 'react'

const Header = ({name}) => {
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}


export default Header;









//inline styling
//<h1 style={{color:'red', backgroundColor:'whiteSmoke'}}>{name}</h1>

//css in js
//const heading={
//     color:'red',
//      backgroundColor:'whiteSmoke'
// }


//you can also destructure the object instead of using prop
// const Header = ({name}) => {
//     return (
//       <div>
//           <h1>{name}</h1>
//       </div>
//     )
//   }

//YOU CAN ALSO SET DEFAULT PROPS
// Header.defaultProps={
//     name:'task tracker',
// }