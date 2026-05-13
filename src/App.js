import './App.css';

function App() {

  const technologies = [
    "React",
    "Docker",
    "Jenkins",
    "AWS EC2",
    "CI/CD Pipeline"
  ];

  const handleDeployment = () => {
    alert(
      "Application Successfully Deployed Using Jenkins + Docker + AWS EC2 🚀"
    );
  };

  return (
    <div className="app">

      <nav className="navbar">
        <h2>DevOps CI/CD Project</h2>
      </nav>

      <div className="hero">

        <div className="left">

          <h1>
            Automated React Deployment
            Using Jenkins + Docker
          </h1>

          <p>
            This project demonstrates a complete
            CI/CD pipeline using React, Docker,
            Jenkins and AWS EC2.
          </p>

          <button onClick={handleDeployment}>
            Deployment Successful 🚀
          </button>

        </div>

        <div className="right">

          <div className="status-card">

            <h3>Pipeline Status</h3>

            <div className="status success">
              ✔ Build Successful
            </div>

            <div className="status success">
              ✔ Docker Image Created
            </div>

            <div className="status success">
              ✔ Jenkins Pipeline Passed
            </div>

            <div className="status success">
              ✔ AWS Deployment Done
            </div>

          </div>

        </div>

      </div>

      <div className="tech-section">

        <h2>Technologies Used</h2>

        <div className="tech-grid">

          {technologies.map((tech, index) => (
            <div className="tech-card" key={index}>
              {tech}
            </div>
          ))}

        </div>

      </div>

      <footer>
        Created for Cloud & DevOps Assignment
      </footer>

    </div>
  );
}

export default App;