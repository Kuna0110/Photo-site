import React from "react";
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import Menu from "./Components/Menu";
import PhotoSearch from "./Components/PhotoSearch";

function App() {
  return (
    <div>
      <Container>
        <Menu />

        <Header as='h1'>React Photo Search - API Unsplash</Header>

        <PhotoSearch />
      </Container>
    </div>
  );
}

export default App;
