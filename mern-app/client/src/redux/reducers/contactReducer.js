import { GET_CONTACT, GET_CONTACTS, TOGGLE_FALSE, TOGGLE_TRUE } from "../constants/contactTypes"

const initState={
    contacts:[],
    edit:false,
    contact:{}
}

const contactReducer=(state=initState,action)=>{
    switch (action.type) {
        case GET_CONTACTS:
        return {...state,contacts:action.payload}
        case TOGGLE_TRUE:
            return {...state,edit:true}
        case TOGGLE_FALSE:
            return {...state,edit:false}
        case GET_CONTACT:
            return {...state,contact:action.payload}
        default:
            return state
    }
}
export default contactReducer