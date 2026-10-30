import "./App.css";
import { jobs } from "./data/jobs";
import JobCard from "./components/JobCard";

function App() {
  return (
    <main>
      <h1>Pedidos disponiveis</h1>

      <section>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>
    </main>
  );
}

export default App;
