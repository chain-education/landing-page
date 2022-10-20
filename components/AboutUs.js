import Link from "next/link";
import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const AboutUs = () => {
    return (
        <section className="section about-us">
            <Container>
                <Row>
                    <Col sm={3}>
                        <Card
                            style={{
                                width: '18rem'
                            }}
                        >
                            <img
                                alt="Muskan Profile Pic"
                                src="/muskan_profile_pic.jpg"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Muskan Marwah
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Co-Founder & CEO
                                </CardSubtitle>
                                <CardText>
                                    Muskan has worked with IndiGo airlines in the past close to six years. Currently she is hacking inside Solidity and Rust.
                                </CardText>
                                <Button>
                                    <Link href={"https://www.linkedin.com/in/muskan-marwah-193770210/"} target={"_blank"}>LinkedIn</Link>
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
                            <img
                                alt="Aviraj Profile Pic"
                                src="/aviraj_profile_pic.jpg"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Aviraj Khare
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Co-Founder & CTO
                                </CardSubtitle>
                                <CardText>
                                    Aviraj has worked in Gojek in the past for two and half years. He is into Web3 space since 2017.
                                </CardText>
                                <Button>
                                    <Link href={"https://linkedin.com/in/avirajkhare00"} target={"_blank"}>LinkedIn</Link>
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
                            <img
                                alt="Yojit Profile Pic"
                                src="/yojit_profile_pic.jpg"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Yojit Bountra
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Co-Founder & CMO
                                </CardSubtitle>
                                <CardText>
                                    Yojit has worked in the Dell in the past. Currently he is working as a CMO in ChainEducation.
                                </CardText>
                                <Button>
                                    <Link href={"https://www.linkedin.com/in/yojit-bountra-916149176/"} target={"_blank"}>LinkedIn</Link>
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutUs;