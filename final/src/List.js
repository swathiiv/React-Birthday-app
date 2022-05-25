import React from 'react';

//in line 4 people is destructured
const List = ({peopleprop}) => {
  return (
    <>
      {peopleprop.map((p)=>{
          const {id,name,age,image}=p;

          return (
              <article key={id} className='p'>

                    <img src={image} alt={name}/>

                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>

              </article>
          );
      })}
    </>
  );
};

export default List;
