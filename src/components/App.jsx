import { ThemeProvider } from "styled-components";
import react from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "./styles/Container.styled";
import Header from "./Header";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";

const theme = {
  colors: {
    header: "#fff",
    footer: "#139a49",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
