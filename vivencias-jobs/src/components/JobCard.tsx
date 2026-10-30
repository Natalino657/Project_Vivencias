import type { JobRequest } from "../types/JobRequest";

type jobCardProps = {
  job: JobRequest;
};

function JobCard({ job }: jobCardProps) {
  return (
    <article>
      <h2>{job.service}</h2>

      <p>Cidade:{job.city}</p>
      <p>Data e Hora: {job.startsAt.toString()}</p>
      <p>Duração: {job.durationMin}</p>
      <p>Preco: {(job.priceCents / 100).toFixed(2)} €</p>

      {job.urgent && <strong>Urgente</strong>}
    </article>
  );
}

export default JobCard;
