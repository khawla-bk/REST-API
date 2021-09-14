import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./AddEditContact.css";
import { useDispatch, useSelector } from "react-redux";
import addBtn from "../../Assets/add.png";
import editBtn from "../../Assets/edit.png";
import { addContact, editContact } from "../../redux/actions/contactActions";

const AddEditContact = ({ history }) => {
  // states
  const [contact, setContact] = useState({ name: "", email: "", age: 0 });

  // store
  const edit = useSelector((state) => state.contactReducer.edit);
  const editcontact = useSelector((state) => state.contactReducer.contact);

  // dispatch
  const dispatch = useDispatch();
  // handleChange
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    edit
      ? setContact(editcontact)
      : setContact({ name: "", email: "", age: 0 });
  }, [edit, editcontact]);

  return (
    <Form className="my-form">
      {/* input name */}
      <Form.Group className="my-little-form">
        <Form.Control
          type="text"
          placeholder="Enter contact name ..."
          name="name"
          defaultValue={contact.name}
          onChange={handleChange}
        />
        <Form.Text className="text-muted">Name is required !!</Form.Text>
      </Form.Group>

      {/* input email */}
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter contact email ..."
          name="email"
          defaultValue={contact.email}
          onChange={handleChange}
        />
        <Form.Text className="text-muted">Email is required !!</Form.Text>
      </Form.Group>

      {/* input phone */}
      <Form.Group>
        <Form.Control
          type="number"
          placeholder="Enter contact age ..."
          name="age"
          defaultValue={contact.age}
          onChange={handleChange}
        />
      </Form.Group>

      {/* add or edit button*/}

      {edit ? (
        <img
          src={editBtn}
          alt="edit"
          className="edit-btn"
          onClick={() => {
            dispatch(editContact(editcontact._id, contact));
            history.push("/");
          }}
        />
      ) : (
        <img
          src={addBtn}
          alt="add"
          className="add-btn"
          onClick={() => {
            dispatch(addContact(contact));
            history.push("/");
          }}
        />
      )}
    </Form>
  );
};

export default AddEditContact;
