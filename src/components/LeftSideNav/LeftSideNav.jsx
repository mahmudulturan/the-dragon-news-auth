import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Recommended from '../Recommended/Recommended';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div className="p-4">
            <div>
                <h3 className="text-xl font-semibold mb-5">All Caterogy</h3>
                <div className='ml-5 text-xl font-medium space-y-4 text-[#9F9F9F]'>
                    {
                        categories.map(category=> <NavLink to={`/news/categories/${category.id}`} className='block' key={category.id}>{category.name}</NavLink>)
                    }
                </div>
            </div>
            <div>
                <Recommended></Recommended>
            </div>
        </div>
    );
};

export default LeftSideNav;