import React from 'react';
import ReactDOM from 'react-dom';
import Student from './Component/Student'
function Main(){
  return(
    <div>
      <Student/>
    </div>
  )
}
ReactDOM.render(<Main/>,document.getElementById('root'));