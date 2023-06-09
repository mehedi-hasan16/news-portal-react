import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";

const NewsLayout = () => {
    return (
        <div className="my-4">
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}><Outlet></Outlet></Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLayout;