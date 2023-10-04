import {Outlet} from 'react-router-dom'
const MainLayout = () => {
    return (
        <div className='font-poppins lg:w-10/12 mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;