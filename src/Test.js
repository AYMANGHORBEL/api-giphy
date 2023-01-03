/* eslint-disable no-undef */
import { GiphyFetch } from "@giphy/js-fetch-api";
import React, { useState } from "react";

const Test = () => {
  const [text, setText] = useState("");
  const [result, setresult] = useState([]);
  const gf = new GiphyFetch("wMa4wKMC0KC0mbYx1YnnwvDRNHFYUbVM");
  console.log(gf);
  const handleSubmit = (e) => {
    e.preventDefault();
    const anm = async () => {
      const res = await gf.animate(text, { limit: 10 });
      console.log(res);
      setresult(res.data);
    };
    anm();
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>GO!</button>
      {result.map((el) => (
        <div>
          <img src={el.url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Test;
