import "./App.css";
import { jobs } from "./data/jobs";
import JobCard from "./components/JobCard";
import { useState, useEffect } from "react";

function App() {
  const [selectedCity, setSelectedCity] = useState("Todas");
  const [availableJobs, setAvailableJobs] = useState(jobs);
  const [isLoading, setIsLoading] = useState(true);

  const filteredJobs = availableJobs.filter((job) => {
    return selectedCity === "Todas" || job.city === selectedCity;
  });

  function handleAcceptJob(jobId: string) {
    setAvailableJobs(availableJobs.filter((job) => job.id !== jobId));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="app">
      <header className="app-header">
        <div>
          <p className="app-kicker">Marketplace de serviços</p>
          <h1>Pedidos disponíveis</h1>
        </div>

        <label className="city-filter">
          Filtrar por cidade
          <select
            value={selectedCity}
            onChange={(event) => setSelectedCity(event.target.value)}
          >
            <option value="Todas">Todas as cidades</option>
            <option value="Lisboa">Lisboa</option>
            <option value="Porto">Porto</option>
            <option value="Braga">Braga</option>
            <option value="Coimbra">Coimbra</option>
          </select>
        </label>
      </header>

      {isLoading ? (
        <p className="status" role="status">
          <span className="status-dot" aria-hidden="true" />
          A carregar pedidos...
        </p>
      ) : (
        <section className="job-list" aria-live="polite">
          {filteredJobs.length === 0 ? (
            <p className="empty-state">
              <strong>Sem pedidos nesta cidade</strong>
              <span>
                Não existem pedidos disponíveis para o filtro selecionado.
              </span>
            </p>
          ) : (
            filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                handleAcceptJob={handleAcceptJob}
              />
            ))
          )}
        </section>
      )}
    </main>
  );
}

export default App;
