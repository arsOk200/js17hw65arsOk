import React from 'react';

interface Props{
  title:string;
  content:string;
}

const PageInfo:React.FC<Props> = ({title,content,}) => {
  return (
    <div className='container'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default PageInfo;