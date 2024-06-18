import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Neuroscience & AI Portfolio</h1>
      </header>
      <section>
        <h2>About Me</h2>
        <p>Hello! I am [Your Name], a passionate researcher in Neuroscience and AI.</p>
      </section>
      <section>
        <h2>Education</h2>
        <ul>
          <li><strong>PhD in Neuroscience</strong> - University of Somewhere</li>
          <li><strong>MSc in Artificial Intelligence</strong> - Tech University</li>
        </ul>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Project 1:</strong> Neural Network for Predicting Neural Activity
            <p>Description: A project that uses deep learning to predict neural responses.</p>
          </li>
          <li>
            <strong>Project 2:</strong> AI-Driven Brain-Computer Interface
            <p>Description: Developing an interface that allows control of devices using brain signals.</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
