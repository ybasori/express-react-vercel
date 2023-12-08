import Navbar from "@src/Components/Organisms/Navbar/Navbar";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </>
  );
};

export default Home;
