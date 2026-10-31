import type { JobRequest } from "../types/JobRequest";
import "./JobCard.css";

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

  const formattedPrice = (job.priceCents / 100).toLocaleString("pt-PT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <article className="job-card">
      <div className="job-card__top">
        <h2>{job.service}</h2>
        {job.urgent && <span className="job-card__badge">Urgente</span>}
      </div>

      <ul className="job-card__details">
        <li>
          <span>Cidade</span> {job.city}
        </li>
        <li>
          <span>Data e hora</span> {formattedDate}
        </li>
        <li>
          <span>Duração</span> {job.durationMin} minutos
        </li>
      </ul>

      <p className="job-card__price">
        {formattedPrice} <small>€</small>
      </p>

      <button
        type="button"
        className="job-card__accept"
        onClick={() => handleAcceptJob(job.id)}
      >
        Aceitar
      </button>
    </article>
  );
}

export default JobCard;
