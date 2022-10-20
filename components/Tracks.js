import Link from "next/link";
import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const Tracks = () => {
    return (
        <section className="section tracks">
            <Container>
                <Row>
                    <Col sm={3}>
                        <Card
                            style={{
                                width: '18rem'
                            }}
                        >
                            <img
                                alt="Substrate Logo"
                                src="/substrate_logo.png"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Substrate
                                </CardTitle>
                                <CardText>
                                    Learn how to build your own Blockchain on top of Substrate Ecosystem.
                                </CardText>
                                <Button>
                                    Start Track
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card
                            style={{
                                width: '18rem'
                            }}
                        >
                            <center>
                                <img
                                    alt="Ethereum Logo"
                                    src="/ethereum_logo.png"
                                    height={'120px'}
                                    width={'50px'}
                                />
                            </center>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Ethereum
                                </CardTitle>
                                <CardText>
                                    Learn how to build smart contracts on top of Ethereum.
                                </CardText>
                                <Button>
                                    Start Track
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Tracks;