import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import CauroselBox from '../Pages/CauroselBox';
import { BrowserRouter  as Router,Route,Switch} from "react-router-dom";
import Home from '../Pages/Home/Home';
import { Navbar, Nav, Container, FormControl,Button,Form } from 'react-bootstrap';
import logo from './../../logo.svg';
import Todo from '../Pages/Todo/Todo';
import ApiPage from '../Pages/ApiPage/ApiPage';


const Header = () => {
    return (
        <div>
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" margin="100px">
        <Container>
        <Navbar.Brand href='/'>
                    <img  
                     src={logo}
                     alt="logo"
                    height="30"
                     width='30'
                     className='d-inline-block align-top'
                
                     />React site
                 </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/carus">Caurusel</Nav.Link>
                        <Nav.Link href="/todo">Todo</Nav.Link>
                         <Nav.Link href="/apiPage">API</Nav.Link>
          </Nav>
          <Nav>
          <Form className="d-flex">  
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
       />
      <Button variant="outline-success">Search</Button>
           </Form>
            <Nav.Link eventKey={2} href="#memes">
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>



      <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
               
                <Route exact path="/carus" component={CauroselBox}/>
              
                <Route exact path="/todo" component={Todo}/>
                <Route exact path="/apiPage" component={ApiPage}/>
            </Switch>

        </Router>
      </div>
    );
};

export default Header;

