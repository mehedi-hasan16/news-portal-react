import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaFacebookF,FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from "./Qzone";
import addBg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className="my-2" variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-success"><FaGithub/> Login with GitHub</Button>
            <div>
                <h4 className="my-3">Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className="position-relative text-center">
                <img src={addBg} alt="" />
                <div className="position-absolute top-0 text-white p-4">
                    <h1>Create an Amazing Newspaper</h1>
                    <p className="my-4 fs-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn more</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;