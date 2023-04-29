import { Button, Container} from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import moment from 'moment'
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className='mt-3'>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className='text-secondery'>Journalism Without Fear or Favour</p>
        <p>{moment().format('dddd, MMMM D, YYYY')}</p>
      </div>
      <div className='d-flex mb-3'>
        <Button variant='danger'>Latest</Button>
        <Marquee speed={100} className='text-danger'>
          I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;