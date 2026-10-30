import type { JobRequest } from "../types/JobRequest";

type JobCardProps = {
  job: JobRequest;
  handleAcceptJob: (id: string) => void;
};

function JobCard({ job, handleAcceptJob }: JobCardProps) {
  const formattedDate = new Date(job.startsAt).toLocaleString("pt-PT", {
    timeZone: "Europe/Lisbon",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <article>
      <h2>{job.service}</h2>

      <p>Cidade: {job.city}</p>
      <p>Data e hora: {formattedDate}</p>
      <p>Duração: {job.durationMin} minutos</p>
      <p>Preço: {(job.priceCents / 100).toFixed(2)} €</p>

      {job.urgent && <strong>Urgente</strong>}

      <div>
        <button onClick={() => handleAcceptJob(job.id)}>Aceitar</button>
      </div>
    </article>
  );
}

export default JobCard;
