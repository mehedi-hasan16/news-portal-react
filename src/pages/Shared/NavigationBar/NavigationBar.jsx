import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";


const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handelLogOUt= () =>{
        logOut()
        .then()
        .catch((error)=>{
            console.log(error);
        })

    }
   
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-3'>
                <Container>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to={'/category/0'} className="me-3 text-decoration-none">Home</Link>
                            <Link className="me-3 text-decoration-none">About</Link>
                            <Link className="me-3 text-decoration-none">Career</Link>
                            
                        </Nav>
                        <Nav>
                            <div>{user?.email}</div>
                            {
                                user 
                                ? <Button onClick={handelLogOUt}>Logout</Button> 
                                : <Link to={'/login'} className="ms-3 text-decoration-none">Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;