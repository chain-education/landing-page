import type { NextPage } from 'next'
import Layout from "../components/Layout";
import Header from "../components/Header";
import Classrooms from "../components/Classrooms";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="ChainEducation | Home">
      <Header />
      <Classrooms />
      <Footer />
    </Layout>
  )
}

export default Home
