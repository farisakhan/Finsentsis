import React from "react";

interface JoinMissionCTAProps {
  headline?: string;
  subtext?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

const JoinMissionCTA: React.FC<JoinMissionCTAProps> = ({
  headline = "Join Our Mission",
  subtext = "Help us transform how enterprises manage compliance globally.",
  buttonLabel = "Get Started →",
  buttonHref = "#",
}) => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>{headline}</h2>
        <p>{subtext}</p>
        <a href={buttonHref} className="cta-button">
          {buttonLabel}
        </a>
      </div>

      <style>{`
        .cta-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            #0a1a0e 0%,
            #0d2a14 50%,
            #0a1a0e 100%
          );
          padding: 6rem 2rem;
          text-align: center;
        }

        .cta-section::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(
            circle,
            rgba(34,197,94,0.12) 0%,
            transparent 70%
          );
          border-radius: 50%;
        }

        .cta-content {
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .cta-content p {
          font-size: 1rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }

        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
          padding: 0.85rem 2.25rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s ease;
          box-shadow: 0 4px 24px rgba(34,197,94,0.3);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(34,197,94,0.45);
        }
      `}</style>
    </section>
  );
};

export default JoinMissionCTA;