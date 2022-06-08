import React from "react";
import Hero from "./Hero/Hero";
import Table from "./Table/Table";

const Home = () => {
  return (
    <main className="container">
      <Hero />
      <div className="mt-14" ></div>
      <Table />
      <div className="mt-14" ></div>
    </main>
  );
};

export default Home;
