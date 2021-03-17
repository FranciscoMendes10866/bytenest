import { FC } from "react";
import { Container, Row, Col } from "@mverissimoo/emotion-grid";

const Home: FC = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} xl={6}>
          <h1>Title</h1>
        </Col>
        <Col xs={12} md={6} xl={6}>
          <p>Image</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
