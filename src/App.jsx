import "./App.css";
import { useEffect, useState } from "react";
import { getContentItem } from "./service";
import Item from "./components/Item";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 800px;
`;

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    getContentItem("db4930e9-7504-4d9d-ae6c-33facca754d1")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        try {
          setError(e.response.data.errors.message || e.response.data.message);
        } catch {
          setError("Unknown error occured");
        }
      });
  }, []);

  return (
    <AppContainer>
      {error && <h1>{error}</h1>}
      {!error && data && <Item data={data} />}
    </AppContainer>
  );
}

export default App;
