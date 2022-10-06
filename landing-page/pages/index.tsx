import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Service from "../components/Service";
import About from "../components/About";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="ChainEducation | Home">
      <Header />
      <Hero />
      <Feature/>
      <Service />
      <About />
      <Footer />
    </Layout>
  )
}

export default Home
