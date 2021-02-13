import React from "react";
import image from "../greenL.jpeg";
import Typical from "react-typical";

const Home = () => {
  return (
    <main className='mainhome'>
      <img
        id='homeimgid'
        src={image}
        alt='green plant'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-hight-screen pt-8 lg:pt-50 px-8'>
        <h1 className='text-6xl text-gray-100 font-bold cursive leading-none lg:leading-snug mt-8'>
          <Typical
            loop={Infinity}
            wrapper='b'
            steps={[
              "Hello,\n ",
              1000,
              "\n Welcome to my personal web page...",
              1000,
            ]}
          />
        </h1>
      </section>
    </main>
  );
};

export default Home;
