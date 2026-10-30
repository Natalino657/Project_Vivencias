import "./App.css";
import { jobs } from "./data/jobs";
import JobCard from "./components/JobCard";
import { useState } from "react";

function App() {
  const [selectedCity, setSelectedCity] = useState("Todas");
  const [availableJobs, setAvailableJobs] = useState(jobs);

  const filteredJobs = availableJobs.filter((job) => {
    return selectedCity === "Todas" || job.city === selectedCity;
  });

  /* function handleAcceptJob(jobId: string) {
    const updatedJobs = availableJobs.filter((job) => {
      return job.id !== jobId;
    });

    setAvailableJobs(updatedJobs);
  }*/

  function handleAcceptJob(jobId: string) {
    setAvailableJobs(availableJobs.filter((job) => job.id !== jobId));
  }
  return (
    <main>
      <h1>Pedidos disponiveis</h1>

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

      <section>
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} handleAcceptJob={handleAcceptJob} />
        ))}
      </section>
    </main>
  );
}

export default App;
