import React from 'react';

export const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>

      {/* <img src={props.item && props.item.img} /> */}

      <div className="box-img">
        <img src={props.item?.img} />
      </div>
      <h2>WIN</h2>
    </div>
  );
};
