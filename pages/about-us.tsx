import type {NextPage} from 'next';
import Layout from "../components/Layout";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const About: NextPage = () => {
    return (
        <Layout pageTitle = "ChainEducation | About Us">
            <Header />
            <AboutUs />
            <Footer />
        </Layout>
    )
}

export default About;