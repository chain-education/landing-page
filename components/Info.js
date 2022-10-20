import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <h1 className="mb-4 font-weight-normal line-height-1_4">Say Hi to ChainEducation</h1>
              <p className="text-muted mb-4 pb-2 line-height-1_2">
                ChainEducation is a decentralized platform where anyone can upgrade their web3 skills from hands on tutorials.
                <br />
                <br />
                They will be able to earn certificates as NFT once they complete a course.
                <br />
                <br />
                Platform will also create their profile so that they can showcase it to the community and can add their projects and achievements too.
                <br />
                <br />
                Educators can create their classroom, they can upload as many courses in a classroom.
                <br />
                <br />
                Students can get them enrolled in a classroom.
                <br />
                <br />
                For every achievement, they will earn achievement NFT.
                <br />
                <br />
                Students can rate and review the courses too.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <Image src={'/cover_photo.jpeg'} width={'800px'} height={'600px'}></Image>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;