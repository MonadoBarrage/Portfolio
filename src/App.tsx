import "./App.css";
import Biography from "./pages/biography/Biography";
import Resume from "./pages/resume/Resume";
import Projects from "./pages/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="container">
      <h1 className="title">Michael Tan</h1>

      <div className="page section-header">
        <Biography />
      </div>

      <div className="page section-header">
        <Resume />
      </div>
      <div className="section-header">
        <Projects />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
