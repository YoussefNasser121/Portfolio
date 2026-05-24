import { useEffect, useState } from "react";
import Footer from "./Footer";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/YoussefNasser121/repos")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch repos");
        return res.json();
      })
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Error loading repositories");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-5">Loading repositories...</p>;
  if (error) return <p className="text-center mt-5 text-danger">{error}</p>;

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">My GitHub Projects</h1>
      <div className="row">
        {repos.map(repo => (
          <div className="col-md-6 col-lg-4 mb-4" key={repo.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{repo.name}</h5>
                <p className="card-text flex-grow-1">{repo.description }</p>
                <p><strong>Language:</strong> {repo.language}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark mt-auto"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Projects;