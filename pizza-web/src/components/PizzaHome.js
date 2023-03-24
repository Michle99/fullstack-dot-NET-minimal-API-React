// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./PizzaHome.css";

// Import from react-router-dom
import { BrowserRouter as Router,
	Route, Link, Routes } from "react-router-dom";

import CreatePizza from "./CreatePizza";
import EditPizza from "./EditPizza";
import PizzaList from "./PizzaList";

const PizzaHome = () => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>
                    <Link to={"/pizzas"}
                    className="nav-link">
                     React Pizza Home
                    </Link>
                </Navbar.Brand>

                <Nav className="justify-content-end">
                    <Nav>
                    <Link to={"/pizza"}
                        className="nav-link">
                        Create Pizza
                    </Link>
                    </Nav>

                    <Nav>
                    <Link to={"/pizzas"}
                        className="nav-link">
                        Pizza List
                    </Link>
                    </Nav>
                </Nav>
                </Container>
            </Navbar>

            <Container>
            <Row>
                <Col md={12}>
                <div className="wrapper">
                    <Routes>
                        <Route exact path="/" element={<CreatePizza/>} />
                        <Route path="/pizza" element={<CreatePizza/>} />
                        <Route path="/pizza/:id" element={<EditPizza/>} />
                        <Route path="/pizzas" element={<PizzaList/>} />
                    </Routes>
                </div>
                </Col>
            </Row>
            </Container>
        </Router>
    );
};

export default PizzaHome;
