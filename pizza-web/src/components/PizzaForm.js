import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, FormGroup, FormLabel } from "react-bootstrap";

const PizzaForm = (props) => {
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	description: Yup.string().required("Required"),
});
console.log("Props Stuffs: ",props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup className="mb-3">
			<FormLabel>Name</FormLabel>
			<Field name="name" type="text"
				className="form-control" />
			<ErrorMessage
				name="name"
				className="d-block invalid-feedback"
				component="span"
			/>
		</FormGroup>
		<FormGroup>
		<FormLabel>Description</FormLabel>
			<Field name="description" type="text"
				className="form-control" />
			<ErrorMessage
				name="description"
				className="d-block invalid-feedback"
				component="span"
			/>
		</FormGroup><br/>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default PizzaForm;
