import React from "react";

export interface TeamMember {
  name: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  linkedIn?: string;
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  const imageRight = index % 2 !== 0;

  return (
    <div
      className={`team-card ${imageRight ? "row" : "row-reverse"}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="team-card-image">
        <img src={member.image} alt={member.name} />
        <div className="image-overlay" />
      </div>

      <div className="team-card-content">
        <p className="team-description">{member.description}</p>

        <div>
          <h3 className="team-name">{member.name}</h3>
          <p className="team-title">{member.title}</p>

          {member.subtitle && (
            <p className="team-subtitle">{member.subtitle}</p>
          )}

          {member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              View LinkedIn profile →
            </a>
          )}
        </div>
      </div>

      <style>{`
        .team-card {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          padding: 2rem 2.5rem;
          margin-bottom: 1.5rem;

          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.04),
            rgba(255,255,255,0.02)
          );

          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;

          backdrop-filter: blur(10px);

          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s ease forwards;
        }

        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 70px rgba(0,0,0,0.45);
        }

        .team-card.row {
          flex-direction: row;
        }

        .team-card.row-reverse {
          flex-direction: row-reverse;
        }

        .team-card-image {
          width: 200px;
          height: 220px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }

        .team-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 60%,
            rgba(0,0,0,0.5) 100%
          );
        }

        .team-card-content {
          flex: 1;
        }

        .team-description {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.75;
          margin-bottom: 1.5rem;
          font-weight: 300;
        }

        .team-name {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }

        .team-title {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.45);
          margin-bottom: 0.2rem;
        }

        .team-subtitle {
          font-size: 0.78rem;
          font-style: italic;
          color: rgba(255,255,255,0.35);
        }

        .linkedin-link {
          display: inline-block;
          margin-top: 0.75rem;
          font-size: 0.8rem;
          color: #4ade80;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .linkedin-link:hover {
          color: #22c55e;
        }

        @media (max-width: 768px) {
          .team-card {
            flex-direction: column !important;
            text-align: center;
          }

          .team-card-image {
            width: 100%;
            height: 260px;
          }
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TeamCard;