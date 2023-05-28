import { Button, Row, Col, Card, Form, FormGroup, Input } from 'reactstrap';
// import classNames from 'classnames/bind';
// import styles from './Home.module.scss';

// const cx = classNames.bind(styles);

function Home() {
  return (
    <Card>
      <Row>
        <Col xs="6">
          <Form>
            <FormGroup>
              <Input type="text" placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <Input type="password" placeholder="Password" />
            </FormGroup>
            <Button color="primary">Login</Button>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}

export default Home;
