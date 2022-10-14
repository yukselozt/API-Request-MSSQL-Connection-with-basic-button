import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import React from "react";

function App() {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");
  console.log("fdzfsd");
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/read").then((response) => {
  //     console.log(response.data);
  //     setList(response.data);
  //   });
  // });

  // useEffect(() => {
  //   setInterval(() => {
  //     Axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
  //       setSetup(response.data.message);
  //       setPunchline(response.data.status);
  //     });
  //   }, 10000);
  // });

  function request() {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      setSetup(response.data.message);
      setPunchline(response.data.status);
    });
  }

  return (
    <div>
      <button
        onClick={() => {
          request();
        }}
      >
        request
      </button>
      <p>{setup}</p>
      <p>{punchline}</p>
    </div>
  );
}

export default App;
