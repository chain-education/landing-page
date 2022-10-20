import type { NextPage } from 'next'
import Layout from "../components/Layout";
import Header from "../components/Header";
import Info from "../components/Info";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="ChainEducation | Home">
      <Header />
      <Info />
      <Footer />
    </Layout>
  )
}

export default Home
