import { FaCalendarAlt } from "react-icons/fa";
import PropTypes from 'prop-types';

const RecommendedCard = ({news}) => {
    const { image_url, title, author} = news;
    return (
        <div>
            <div className="my-6 cursor-pointer">
                <img src={image_url} className="rounded-md" alt="" />
                <h3 className="text-xl font-semibold my-5">{title}</h3>
                <p className="flex items-center gap-2 my-3 font-medium"><FaCalendarAlt></FaCalendarAlt> {author.published_date.slice(0,10)}</p>
            </div>
        </div>
    );
};

RecommendedCard.propTypes = {
    news: PropTypes.object
}

export default RecommendedCard;