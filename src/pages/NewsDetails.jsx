import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import NewsDetailsCard from "../components/NewsDetailsCard/NewsDetailsCard";
import RightSideNav from "../components/RightSideNav/RightSideNav";
import {useEffect, useState} from 'react'

const NewsDetails = () => {
    const [newses, setNewses] = useState(null)
    const {id} = useParams();
    useEffect(()=> {
        fetch('/news.json')
        .then(res=> res.json())
        .then(data =>setNewses(data))
    },[])
    const theNews = newses?.find(news => news._id == id)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
            <div className="col-span-3">
                <h3 className="text-xl font-semibold">Dragon News</h3>
                {
                    theNews &&
                <NewsDetailsCard theNews={theNews}></NewsDetailsCard>
                }
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
            </div>
        </div>
    );
};

export default NewsDetails;