// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import PizzaForm from "./PizzaForm";
import { useParams, useNavigate } from "react-router-dom"



const EditPizza = (props) => {
    const [formValues, setFormValues] = useState({
        name: "",
        description: "",
    });
    const {id} = useParams();
    const navigate = useNavigate();
    console.log("pizza obj", props);
	
    //onSubmit handler
    const onSubmit = (pizzaObject) => {
        axios
        .put(
            `https://localhost:7044/pizza/${id}`,
            pizzaObject
        )
        .then(res => {
            alert("Pizza successfully updated");
            console.log("Posted Success: ", res.data);
            navigate("/pizzas");
        })
        .catch(err => {
            console.log("Error: ", err);
        });
    };

    // Load data from server and reinitialize student form
    useEffect(() => {
        axios
        .get(
            `https://localhost:7044/pizza/${id}`
        )
        .then((res) => {
            const { name, description} = res.data;
            setFormValues({ name, description});
        })
        .catch((err) => console.log(err));
    }, []);


    return (
        <PizzaForm
          initialValues={formValues}
          onSubmit={onSubmit}
          enableReinitialize
          placeholder="Update Pizzas..."
        >
         Update Pizzas
        </PizzaForm>
    );
};

export default EditPizza;
