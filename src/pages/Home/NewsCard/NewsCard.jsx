import moment from "moment";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author: { name, published_date, img }, total_view, rating: { number } } = news;
    return (

        <div>
            <Card className="mb-4">
                <Card.Header className="d-flex align-items-center">
                    <Image style={{ height: '40px' }} src={img} roundedCircle />
                    <div className="px-2 flex-grow-1">
                        <div>{name}</div>
                        <div>{moment(published_date).format('yyyy-MM-D')}</div>
                    </div>
                    <div>
                        <FaRegBookmark />  <FaShareAlt />
                    </div>

                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className="flex-grow-1">
                        <Rating
                            placeholderRating={number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        <span>{number}</span>
                    </div>
                    <div>
                        <FaEye></FaEye> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;