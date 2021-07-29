import { useState, useEffect } from 'react';
import firebase from './firebase';


function App() {
  const [toDo, setToDo]=useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => { 
    // A variable that holds a reference to our database
    const dbRef = firebase.database().ref();
    // In order to get a listener, that listens for the value changes and updates our component we do the following
    //creating a new array that takes the response value from the user, and creating a key for each item
    //we push the data to the new array and then 
    dbRef.on('value', (response) => {
      const newArray = [];
      const data = response.val();
     
      for (let key in data) {
        newArray.push(data[key]);
      } 

      if (data !== ''){
      setToDo(newArray);
      setUserInput('');
      }
     

    });

  }, [])
 
  const handleEvent = function(event){
    setUserInput(event.target.value);
  }

  const handleClick = function(event){
    //event.preventDefault prevents the default action: form submission
    event.preventDefault();

    const dbRef = firebase.database().ref();
    dbRef.push(userInput);
  
    
    // resetting the state to an empty string
    setUserInput('');



  }
  

  return (
    <div>
      <div class="wrapper">
      <h1 className="title-todo">JUNO TODO</h1>
      <ul>
      {toDo.map((task) => {
        return (
          <li>
            <p>{task}</p>
            
           </li>
         
         )
        })}
      </ul>
      <form action="submit">

        
        <input type="text" id="newtask" onChange={handleEvent} value={userInput}/>
        <button onClick={handleClick}>Add To-do</button>
      </form>
      </div>
    </div>
  )
}


export default App;
