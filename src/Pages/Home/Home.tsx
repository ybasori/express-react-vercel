import Navbar from "@src/Components/Organisms/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  useEffect(() => {
    navigate("/pdf-merger");
  }, [navigate]);

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
