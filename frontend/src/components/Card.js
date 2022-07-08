import "../style/components/_Card.scss";
import ArticleList from "../data/ArticleList";

function Card() {
    return (
      <div className="container">
        {ArticleList.map(({ id, title, image, description }, index) => (
          <div key={`${id}-${index}`} className="card">
            <div className="card_title">
              <h3>
                {title}
              </h3>
            </div>
            <div className="card_img">
              <img src={image} alt="" />
            </div>
            <div className="card_text">{description}</div>
          </div>
        ))}
      </div>
    );
};

export default Card;