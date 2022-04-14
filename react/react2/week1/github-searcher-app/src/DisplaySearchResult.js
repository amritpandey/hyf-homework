import { useContext } from "react";
import { FetchedContext } from "./MainComponent";

export const DisplaySearchResult = () => {
  const getData = useContext(FetchedContext);
  const newUser = getData.queryResult.map((item) => <div>{item}</div>);
  return (
    <div>
      {getData.input.length === 0 && (
        <div style={{ color: "red" }}>{"No items"}</div>
      )}

      {/* {getData.errMessage && <div>{getData.errMessage}</div>} */}

      {
      (getData.loading & (getData.input.length !== 0) ? (
        <div
          style={{ color: "green", fontFamily: "fantasy", fontSize: "25px" }}
        >
          {"Loading ..."}
        </div>
      ) : (
        newUser
      ))}
    </div>
  );
};
