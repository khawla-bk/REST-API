import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home'
import ContactList from './Components/ContactList/ContactList'
import AddEditContact from './Components/AddEditContact/AddEditContact'


function App() {
 
  return (
   <Router>
    <div className="App">
   <Home />
   <Route exact path='/' component={ContactList} />
   <Route path='(/addContact|/editContact)' component={AddEditContact} />
    </div>
    </Router>
  );
}

export default App;
