import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
  // const cardComponent =  robots.map((user, i) => {
  //   return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} /> 
  // })
  // if (true) {
  //   /* will only show in published version of website */
  //   throw new Error('incorrect')
  // }
  return (
    <div>
      {/* { cardComponent } */
        robots.map((user, i) => {
          return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} /> 
        })
      }
    </div>
  );
}

export default CardList