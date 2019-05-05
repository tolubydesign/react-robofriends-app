import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className=" c bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot" src={`https://robohash.org/${ id }?200x200`} />
      <div>
        <h3> { name } </h3>
        <p> { email } </p>
      </div>
    </div>
  );
}

export default Card;