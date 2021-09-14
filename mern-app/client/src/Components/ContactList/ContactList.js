
import './ContactList.css'
import ContactCard from '../ContactCard/ContactCard'
import { useSelector } from 'react-redux'




const ContactList = () => {

const contacts=useSelector(state=>state.contactReducer.contacts)
    return (

      
            <div className="contacts-content">
                <div className="contacts-list">
         {
             contacts.map(contact=><ContactCard contact={contact} key={contact._id} />)
         }
                </div>
            </div>
    )
}

export default ContactList
