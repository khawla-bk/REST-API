import React from 'react'
import {useDispatch} from 'react-redux'
import './Home.css'
import {Link} from 'react-router-dom'
import { getContacts, toggleFalse } from '../../redux/actions/contactActions'




const Home = () => {

const dispatch=useDispatch()
    return (
        <div>
            <h1> CONTACTS </h1>
           
                <Link to='/'>
                <button className="app-btn"
                onClick={()=>dispatch(getContacts())}
                >Contact List</button>
                </Link>
        
           
               <Link to='/addContact'>
                <button className="app-btn" onClick={()=>dispatch(toggleFalse())} >Add Contact</button>
                </Link>
               
           
        </div >
    )
}

export default Home
