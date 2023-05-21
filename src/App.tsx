import { useState } from "react";
import Navbar from "./components/navbar";
import "./App.css";

import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import AboutPage from "./components/AboutPage";
import ResumePage from "./components/ResumePage";

function App() {
  const [page, setPage] = useState("HomePage");
  return (
    <>
      <Navbar
        onClickHome={() => setPage("HomePage")}
        onClickProjects={() => setPage("ProjectPage")}
        onClickAbout={() => setPage("AboutPage")}
        onClickResume={() => setPage("ResumePage")}
      />
      {page === "HomePage" && <HomePage />}
      {page === "ProjectPage" && <ProjectPage />}
      {page === "AboutPage" && <AboutPage />}
      {page === "ResumePage" && <ResumePage />}
    </>
  );
}
export default App;
