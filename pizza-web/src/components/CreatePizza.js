// CreateStudent Component for add new student

// Import Modules
import React, { useState } from "react";
import axios from 'axios';
import PizzaForm from "./PizzaForm";
import {useNavigate} from "react-router-dom"

// CreatePizza Component
const CreatePizza = () => {
    const [formValues, setFormValues] = useState({ name: '', description: ''});
    const navigate = useNavigate();
    
    // onSubmit handler
    const onSubmit = pizzaObject => {
	    axios.post('https://localhost:7044/pizza', pizzaObject)
	        .then(res => {
                alert("Pizza successfully updated");
                console.log("Posted Success: ", res.data);
                navigate("/pizzas");
            })
	        .catch(err => {
                console.log("Error: ", err);
        });
    }
	
    // Return Pizza form
    return(
        <PizzaForm 
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
        >
        Create Pizza
        </PizzaForm>
    )
}

export default CreatePizza
