import Header from "../components/Header/Header";
import Latest from "../components/Latest/Latest";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Latest></Latest>
            <Navbar></Navbar>
            <h1>Home</h1>
        </div>
    );
};

export default Home;