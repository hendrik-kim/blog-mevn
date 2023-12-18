import React from "react";
import Posting from "../components/Posting";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Posting postVisibility="public" />
    </div>
  );
}

export default Home;
