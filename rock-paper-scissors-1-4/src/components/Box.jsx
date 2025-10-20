import React from 'react';

export const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      
      <div className="box-img">
      {/* <img src={props.item && props.item.img} /> */}
      {/* <img src={props.item?.img} /> */}
        <img src={props.item?.img || 'https://i.namu.wiki/i/J9A5vBE6BuFBd09_MojiggkfWoci1CuuIjNf19nuSnxmfqmx4oYePJh0FWVzCmc5AIHxVoi2QWF8G5yIs_iwRA.webp'} />
      </div>
      <h2>WIN</h2>
    </div>
  );
};
