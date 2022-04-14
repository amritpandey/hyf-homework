import React, { useContext, useEffect, useState, createContext } from "react";
import "./App.css";
import { DisplaySearchResult } from "./DisplaySearchResult";

export const FetchedContext = createContext();

export const MainComponent = () => {
  
  const [input, setInput] = useState("");
  const [queryResult, setQueryResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const API = `https://api.github.com/search/users?q=${input}`;

  useEffect(() => {
    
    if (!input) {
      setQueryResult([]);
    } else {
      setLoading(true);
      fetch(API)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          setErrMessage("Error fetching! Error code: " + res.status);
          return;
        })
        .then((data) => {
          const result = data.items.map((name) => name.login);
          setQueryResult(result);
          setLoading(false);
        })
        .catch((error) => {
          throw error;
        });
    }
  }, [input]);

  console.log(errMessage);
  return (
    <div>
      <input
        style={{ fontSize: "25px", padding: "10px", fontStyle: "italic" }}
        type="text"
        placeholder="Search for user..."
        onChange={(e) => setInput(e.target.value)}
      />
      <FetchedContext.Provider
        value={{ input, queryResult, loading, errMessage }}
      >
        <DisplaySearchResult />
      </FetchedContext.Provider>
    </div>
  );
};
