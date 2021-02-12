import React from "react";
// import image from "../dreambigfish.jpg";
// import image from "../bluePlant.jpeg";
import image from "../greenL.jpeg";

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt='fish'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-8 lg:pt-50 px-8'>
        <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug '>
          Hello, <br />
          Welcome to my personal web page
        </h1>
      </section>
    </main>
  );
};

export default Home;
