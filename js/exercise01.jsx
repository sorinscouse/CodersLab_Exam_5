import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
       return (
           <div>
               <h1>Helloo world</h1>
               <span>Exam</span>
           </div>
       )
    }
}

//Nie zmieniaj tego kodu poniżej!
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );  
});

