import React from 'react';
import Img from './Img';

export default function GridSquare(props) {
  return (
    <div className="usa-media-block tablet:grid-col">
      <Img className="maxw-8" img={props.img} alt={props.altText}/>

      <div className="usa-media-block__body">
        <h2 className="usa-graphic-list__heading text-barlow-title">
          {props.heading}
        </h2>
        <p>{props.children}</p>
      </div>

    </div>
  );
}
