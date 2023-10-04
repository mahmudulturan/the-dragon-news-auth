import NewsCard from "./NewsCard";
import PropTypes from 'prop-types';
const NewsContent = ({newses}) => {

    return (
        <div className="p-4">
           <div>
            <h3 className="text-xl font-semibold mb-5">Dragon News Home</h3>
            <div className="flex flex-col gap-7">
                {
                    newses.map(news => <NewsCard news={news} key={news._id}></NewsCard>)
                }
            </div>
           </div>
        </div>
    );
};

NewsContent.propTypes = {
    newses: PropTypes.array
}

export default NewsContent;