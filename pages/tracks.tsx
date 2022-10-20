import type {NextPage} from 'next';
import Layout from "../components/Layout";
import Header from "../components/Header";
import Tracks from "../components/Tracks";
import Footer from "../components/Footer";

const Track: NextPage = () => {
    return (
        <Layout pageTitle = "ChainEducation | Tracks">
            <Header />
            <Tracks />
            <Footer />
        </Layout>
    )
}

export default Track;
