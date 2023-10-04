import {useState, useEffect} from 'react'
import RecommendedCard from './RecommendedCard';

const Recommended = () => {
    const [newses, setNewses] = useState([])
    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNewses(data))
    },[])
    return (
        <div>
            {
                newses.slice(15,18).map(news => <RecommendedCard key={news._id} news={news}></RecommendedCard>)
            }
        </div>
    );
};

export default Recommended;