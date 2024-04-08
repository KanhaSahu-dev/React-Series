import React from 'react';

function Card({ boi }) {
  // Check if boi is defined before accessing its properties
  if (!boi) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1 className='text-3xl bg-green-50 p-3 rounded-md'>
        Vite with TailWind-{boi.name}-{boi.hello}
      </h1>
      <img
        src="https://images.pexels.com/photos/4788287/pexels-photo-4788287.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        height="50"
        width="100"
        alt=""
      />
      <h1 className='text-2xl bg-green-500 p-3 rounded'>A card for Photos</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, temporibus!</p>
    </div>
  );
}

export default Card;
