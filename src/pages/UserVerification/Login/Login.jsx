/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
    const {userLogin}= useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const mainLocation = location.state?.from?.pathname ||'category/0';

    const handleSubmit= event =>{
        event.preventDefault();
        const form= event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        userLogin(email, password)
        .then((result)=>{
            const loggedUser= result.user;
            console.log(loggedUser);
            form.reset();
            navigate(mainLocation , {replace:true})
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <h1 className="text-center my-4">Login your account</h1>
            <Form onSubmit={handleSubmit} className="w-25 mx-auto border rounded p-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button><br />
                <Form.Text>
                    Don't have an account? <Link to={'/signup'}>Register</Link>
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;