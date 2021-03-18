import { FC } from "react";
import { Container, Row, Col } from "@mverissimoo/emotion-grid";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";

import {
  Title,
  Text,
  Button,
  ContentLeft,
  ContentCenter,
  Image,
  Card,
  CardTitle,
  CardContent,
  CardIcon,
  CardPrice,
  CardSmall,
  MainPriceCard,
  PriceCard,
} from "./styles";
import blogging from "../../assets/blogging.png";
import login from "../../assets/login.png";
import security from "../../assets/security.png";

const Home: FC = () => {
  return (
    <Container>
      <Row>
        <Col xs={4} md={6} xl={6}>
          <ContentLeft>
            <Title>Open Source Password Manager</Title>
            <Text>
              Easiest and safest way for individuals to store passwords.
            </Text>
            <Button>Start Now</Button>
          </ContentLeft>
        </Col>
        <Col xs={4} md={6} xl={6}>
          <ContentCenter>
            <Image src={blogging} alt="" />
          </ContentCenter>
        </Col>
      </Row>
      <Row style={{ marginTop: 48 }}>
        <Col xs={4} md={12} xl={12}>
          <Title style={{ textAlign: "center" }}>Why choose ByteNest?</Title>
        </Col>
      </Row>
      <Row style={{ marginTop: 48, marginBottom: 48 }}>
        <Col xs={4} md={4} xl={4}>
          <Card>
            <CardIcon>
              <AiOutlineSafetyCertificate />
            </CardIcon>
            <CardTitle>Trusted Security</CardTitle>
            <CardContent>
              Your private information is totally encrypted.
            </CardContent>
          </Card>
        </Col>
        <Col xs={4} md={4} xl={4}>
          <Card>
            <CardIcon>
              <FaUsers />
            </CardIcon>
            <CardTitle>Open Source</CardTitle>
            <CardContent>
              ByteNest source code is totally accessible.
            </CardContent>
          </Card>
        </Col>
        <Col xs={4} md={4} xl={4}>
          <Card>
            <CardIcon>
              <GiWorld />
            </CardIcon>
            <CardTitle>Global Access</CardTitle>
            <CardContent>
              Access ByteNest from anywhere with any device.
            </CardContent>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={6} xl={6}>
          <ContentCenter>
            <Image src={login} alt="" />
          </ContentCenter>
        </Col>
        <Col xs={4} md={6} xl={6}>
          <ContentLeft>
            <Title>Secure Passwords Anywhere</Title>
            <Text>
              ByteNest gives you power to create and manage unique passwords, so
              you can strengthen privacy and boost productivity online from any
              device or location.
            </Text>
            <Button>Get Started</Button>
          </ContentLeft>
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={6} xl={6}>
          <ContentLeft>
            <Title>Privacy</Title>
            <Text>
              Protect your online data using a password manager you can
              trust.ByteNest is based on 256-bit symmetric AES encryption and
              security standards.
            </Text>
            <Button>Try Now</Button>
          </ContentLeft>
        </Col>
        <Col xs={4} md={6} xl={6}>
          <ContentCenter>
            <Image src={security} alt="" />
          </ContentCenter>
        </Col>
      </Row>
      <Row style={{ marginTop: 48 }}>
        <Col xs={4} md={12} xl={12}>
          <Title style={{ textAlign: "center" }}>Plans and Pricing</Title>
        </Col>
      </Row>
      <Row style={{ paddingTop: 70, paddingBottom: 48, marginBottom: 30}}>
        <Col xs={4} md={4} xl={4}>
          <PriceCard>
            <CardTitle>Free Forever</CardTitle>
            <CardPrice>0€/month</CardPrice>
            <CardContent>
              Start storing and sharing secure passwords with a two-person
              organization.
            </CardContent>
            <CardSmall>
              The core features and sharing are 100% free. Upgrade anytime.
            </CardSmall>
          </PriceCard>
        </Col>
        <Col xs={4} md={4} xl={4}>
          <MainPriceCard>
            <CardTitle>Standard</CardTitle>
            <CardPrice>3€/month</CardPrice>
            <CardContent>
              Share private data safely with your coworkers, department, or
              entire organization.
            </CardContent>
            <CardSmall>
              Includes Free Plan Features for all users. Explore our Standard plan
              free for 7 days.
            </CardSmall>
          </MainPriceCard>
        </Col>
        <Col xs={4} md={4} xl={4}>
          <PriceCard>
            <CardTitle>Premium</CardTitle>
            <CardPrice>7€/month</CardPrice>
            <CardContent>
              Secure business secrets, enable enterprise policies, SSO
              authentication, and self-hosting.
            </CardContent>
            <CardSmall>
              Includes Standard Features for all users. Explore our
              Premium plan free for 7 days.
            </CardSmall>
          </PriceCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
