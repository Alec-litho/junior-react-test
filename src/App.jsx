import React, { useEffect, useState } from "react";
import EditSeminarForm from "./components/EditSeminarForm";
import SeminarList from "./components/SeminarList";
import { Container, Navbar } from "react-bootstrap";
import data from "./seminars.json";
import { fetchSeminars } from "./api";

const App = () => {
  let [editSeminar, setEditSeminar] = useState(null);
  const [currSeminar, setCurrSeminar] = useState(null);
  const [seminars, setSeminars] = useState(data.seminars);

  useEffect(() => {
    fetchSeminars().then((res) => setSeminars(res));
  });

  return (
    <Container>
      {currSeminar && <EditSeminarForm currSeminar={currSeminar} setCurrSeminar={setCurrSeminar} />}
      <SeminarList seminars={seminars} setCurrSeminar={setCurrSeminar} />
    </Container>
  );
};

export default App;
