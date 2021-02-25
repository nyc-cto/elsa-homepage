import React from 'react';

export default function Img(props) {
  return <img className={`usa-media-block__img ${props.className}`}
    src={props.img} alt={props.altText}/>;
}
