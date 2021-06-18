import React from "react";
import styles from "./Home.module.scss";
import { firestore } from "../../firebase";
import { useEffect, useState } from "react";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [searchText, setSearchText] = useState("independence day");
  const getMovie = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=913ece68")
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        setMovie(jsonResponse);
      });
  };

  useEffect(() => {
    fetch(
      "http://www.omdbapi.com/?t=independence day&apikey=913ece68" + searchText
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        setMovie(jsonResponse);
      });
  }, [searchText]);
  useEffect(() => {
    getMovie();
  }, []);

  // const handleBlur = (event) => {
  //   const userInput = event.target.value;
  //   setSearchText(userInput);
  // };
  return (
    <>
      <h1>OMDB Search</h1>
      <input type="text" placeholder="Search your movie"></input>
    </>
  );
};

export default Home;
