import type {NextPage} from 'next';
import Layout from "../components/Layout";
import Header from "../components/Header";
import Instructors from "../components/Instructors";
import Footer from "../components/Footer";

const Instructor: NextPage = () => {
    return (
        <Layout pageTitle = "ChainEducation | Instructors">
            <Header />
            <Instructors />
            <Footer />
        </Layout>
    )
}

export default Instructor;
