import PropTypes from "prop-types";
import { FaShareAlt, FaRegBookmark } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar, FaRegEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  console.log(news);
  const { _id, author, title, image_url, details, rating, total_view } = news;
  return (
    <div>
      <div className="border border-t-0 rounded-t-md">
        <div className="py-3 px-4 bg-[#F3F3F3] rounded-t-md flex justify-between ">
          <div className="flex items-center gap-3">
            <img
              className="w-10 rounded-full"
              src={author.img}
              alt={`image of ${author.name}`}
            />
            <div>
              <h4 className="font-semibold text-[#403F3F]">{author.name}</h4>
              <h5 className="text-sm">
                {author?.published_date?.slice(0, 10)}
              </h5>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button>
              <FaShareAlt></FaShareAlt>
            </button>
            <button>
              <FaRegBookmark></FaRegBookmark>
            </button>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold my-5">{title}</h2>
          <img
            src={image_url}
            className="w-full"
            alt={`image about ${title}`}
          />
          {details.length > 200 ? (
            <>
              <p>{details.slice(0, 200)}...</p>
              <Link
                className="text-[#FF8C47] font-semibold"
                to={`/news/${_id}`}>
                Read More
              </Link>
            </>
          ) : (
            <p>{details}</p>
          )}
        </div>
        <hr className="mx-4" />
        <div className="flex justify-between my-4 p-4">
        <div className="flex items-center gap-3">
          <Rating
            className="text-xl text-[#FF8C47]"
            initialRating={rating.number}
            emptySymbol={
              <FaRegStar></FaRegStar>
            }
            fullSymbol={
              <FaStar></FaStar>
            }
          />
          <span className="font-medium">{rating.number}</span>
        </div>
          <div className="flex gap-2 items-center">
            <FaRegEye></FaRegEye>
            <span className="font-medium">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
