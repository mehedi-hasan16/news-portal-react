import { Col, Row, Card } from "react-bootstrap";
import img1 from '../../../assets/editorsInsight1.png'
import img2 from '../../../assets/editorsInsight2.png'
import img3 from '../../../assets/editorsInsight3.png'


const EditorInsights = () => {
    return (
        <div>
            <h4 className="my-3">Editor Insights</h4>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        </Card.Body>
                        <Card.Footer>Date</Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        </Card.Body>
                        <Card.Footer>Date</Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        </Card.Body>
                        <Card.Footer>Date</Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default EditorInsights;