import Link from "next/link";
import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const Instructors = () => {
    return (
        <section className="section instructors">
            <Container>
                <Row>
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
                                    Aviraj has worked in Gojek in the past for two and half years. He is into Web3 space since 2017. He will be instructing on creating smart contracts and blockchain on Substrate ecosystem.
                                </CardText>
                                <Button>
                                    <Link href={"https://linkedin.com/in/avirajkhare00"} target={"_blank"}>LinkedIn</Link>
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Instructors;