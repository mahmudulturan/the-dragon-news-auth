import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='lg:w-3/4 mx-auto my-10 text-center'>
                <img src={logo} className='mx-auto mb-4' alt="logo of dragon news" />
                <p className='text-lg text-[#706F6F]'>Journalism Without Fear or Favour</p>
                <p className='text-xl font-medium'>{moment().format("dddd,")} <span className='text-[#706F6F]'>{moment().format("MMMM D, YYYY")}</span></p>
        </div>
    );
};

export default Header;