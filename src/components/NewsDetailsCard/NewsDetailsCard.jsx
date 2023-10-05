import {PropTypes} from 'prop-types';
import { BsArrowLeftShort } from "react-icons/bs";

const NewsDetailsCard = ({theNews}) => {
    const {image_url, title, details} = theNews;
    return (
        <div className='mt-5'>
            <img src={image_url} alt="" />
            <h1 className='text-2xl font-bold mt-5 mb-3'>{title}</h1>
            <p className='leading-relaxed'>{details}</p>
            <button className='py-2 px-4 my-5 bg-[#D72050] text-white flex items-center gap-1'><BsArrowLeftShort className='text-2xl'></BsArrowLeftShort> All news in this category</button>
        </div>
    );
};
NewsDetailsCard.propTypes = {
    theNews: PropTypes.object,
}

export default NewsDetailsCard;