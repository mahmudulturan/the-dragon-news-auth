import Marquee from "react-fast-marquee";
import {Link} from 'react-router-dom';
const Latest = () => {
  return (
    <div className="py-3 px-3 bg-[#F3F3F3] flex items-center gap-5">
      <button className="py-2 px-4 bg-[#D72050] text-white font-medium">
        Latest
      </button>
      <Marquee speed={100} pauseOnHover={true}>
        <Link to='/detail' className="m-4">Latest news comming soon!! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, nesciunt.</Link>
        <Link to='/detail' className="m-4">Latest news comming soon!! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, nesciunt.</Link>
        <Link to='/detail' className="m-4">Latest news comming soon!! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, nesciunt.</Link>
        <Link to='/detail' className="m-4">Latest news comming soon!! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, nesciunt.</Link>
      </Marquee>
    </div>
  );
};

export default Latest;
