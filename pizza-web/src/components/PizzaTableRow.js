import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const PizzaTableRow = (props) => {
const { id, name, description } = props.obj;

const deletePizza = () => {
	axios
	.delete(
        "https://localhost:7044/pizza/" + id)
	.then((res) => {
		if (res.status === 200) {
		alert("Pizza successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{name}</td>
	<td>{description}</td>
	<td>
		<Link className="edit-link"
		to={"/pizza/" + id}>
		Edit
		</Link>
		<Button 
          onClick={deletePizza}
		  size="sm" 
          variant="danger"
        >
		 Delete
		</Button>
	</td>
	</tr>
);
};

export default PizzaTableRow;
