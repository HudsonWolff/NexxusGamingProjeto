import "./App.css";
import './animation.css'
import About from "./components/About";
import BackgroundAnimated from "./components/BackgroundAnimated";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (





    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        minHeight:"100vh",
        gap: "2rem",
        backgroundColor:"black",
        zIndex:"50"       
      }}
    >
      <BackgroundAnimated/>
      <Header />
      <About/>
      <Products/>
      <Contact/>
    </div>
    
  );
}

export default App;
