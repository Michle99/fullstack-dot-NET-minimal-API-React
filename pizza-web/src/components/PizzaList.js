import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import PizzaTableRow from "./PizzaTableRow";
import "./PizzaHome.css"

const PizzaList = () => {
const [pizzas, setPizzas] = useState([]);

useEffect(() => {
	axios
	.get("https://localhost:7044/pizzas/")
	.then(({ data }) => {
		setPizzas(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return pizzas.map((res, i) => {
	return <PizzaTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default PizzaList;
