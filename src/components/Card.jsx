import React, {useState} from 'react';
function Card({id, name, info, image, price, removeTour}) {
  const [readMore, setReadMore] = useState (false);
  const description = readMore ? info : `${info.substring (0, 200)}....`;
  function readMoreHandler () {
    setReadMore (!readMore);
  }
  return (
    <div className="card">
      <img src={image} className="image" alt={name} />
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h3 className="tour-name">{name}</h3>
        </div>
        <div>
          {description}
          <span className="read-more" onClick={readMoreHandler}>
            {readMore ? 'Show Less' : 'Read More'}
          </span>
        </div>
      </div>
      <button className="btn-red" onClick={() => removeTour (id)}>
        Not Interested
      </button>
    </div>
  );
}
export default Card;
