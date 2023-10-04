import { useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header";
import Latest from "../components/Latest/Latest";
import LeftSideNav from "../components/LeftSideNav/LeftSideNav";
import Navbar from "../components/Navbar/Navbar";
import NewsContent from "../components/NewsContent/NewsContent";
import RightSideNav from "../components/RightSideNav/RightSideNav";

const Home = () => {
    const newses = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Latest></Latest>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-4 my-8">
                <div><LeftSideNav></LeftSideNav></div>
                <div className="col-span-2"><NewsContent newses={newses}></NewsContent></div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;