import React, { useEffect, useState } from "react";
import EditSeminarForm from "./components/EditSeminarForm";
import SeminarList from "./components/SeminarList";
import { Container } from "react-bootstrap";
import { fetchSeminars } from "./api";
import "./styles/load.css";

const App = () => {
  const [currSeminar, setCurrSeminar] = useState(null); //store current seminar to update later
  const [seminars, setSeminars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //retrieve seminars from json-server
  useEffect(() => {
    fetchSeminars().then((res) => setSeminars(res));
  }, []);

  return (
    <Container>
      {isLoading && (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      )}
      {currSeminar && (
        <EditSeminarForm currSeminar={currSeminar} setCurrSeminar={setCurrSeminar} setSeminars={setSeminars} setIsLoading={setIsLoading} />
      )}
      <SeminarList seminars={seminars} setSeminars={setSeminars} setCurrSeminar={setCurrSeminar} setIsLoading={setIsLoading} />
    </Container>
  );
};

export default App;
