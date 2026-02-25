import React from "react";
import TeamGrid from "../../components/team/TeamGrid";
import JoinMissionCTA from "../../components/team/JoinMissionCTA";
import { type TeamMember } from "../../components/team/TeamCard";

// ─── Team Data ────────────────────────────────────────────────────────────────
const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Ushodhar Raju",
    title: "Founder & CEO",
    subtitle: "Leads product vision and strategy",
    description:
      "Leads product vision and enterprise strategy, building AI-powered governance systems that simplify complex regulatory environments. He focuses on scalable architecture, strategic partnerships, and long-term institutional impact.",
    image: "/assets/team/ushodhar.jpg",
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Vidhi Vallechha",
    title: "Business Development",
    subtitle: "Drives growth and ecosystem collaborations",
    description:
      "Plays a key role in stakeholder engagement and business development at Finsentsis. With strong communication and relationship-building skills, she supports client acquisition, ecosystem collaborations, and strategic expansion efforts.",
    image: "/assets/team/vidhi.jpg",
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Esther Rosalin Narmeta",
    title: "Head of HR",
    subtitle: "People & Organizational Development",
    description:
      "Leads all HR functions at Finsentsis, overseeing talent acquisition, employee engagement, and organizational structure. Ensures strong internal processes, team alignment, and a performance-driven culture that supports the company's long-term growth and execution excellence.",
    image: "/assets/team/esther.jpg",
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Karishma Shaik",
    title: "Client Success & Growth",
    subtitle: "Client-Focused Strategy Expert",
    description:
      "Leads client acquisition and business outreach initiatives at Finsentsis. Manages LinkedIn engagement, partnership conversations, and meeting coordination with prospective clients. Plays a key role in expanding market presence and building strong business relationships.",
    image: "/assets/team/karishma.jpg",
    linkedIn: "https://linkedin.com",
  },
];

// ─── Our Story Section ────────────────────────────────────────────────────────
const OurStory: React.FC = () => {
  return (
    <section className="our-story">
      <h2>Our Story</h2>

      <p>
        Finsentsis OS was founded with a mission to make regulatory compliance
        intelligent, autonomous, and global. Traditional compliance processes
        are slow, manual, and fragmented across tools and geographies.
        Finsentsis OS eliminates this friction through an AI-powered governance
        engine that adapts to evolving laws and policies in real time.
      </p>

      <p>
        Our team combines deep compliance expertise with cutting-edge
        technology to deliver solutions that actually work. We're working with
        leading enterprises across financial services, healthcare, technology,
        and manufacturing to simplify compliance, reduce costs, and manage risk.
      </p>

      <style>{`
        .our-story {
          max-width: 760px;
          margin: 0 auto;
          padding: 6rem 1.5rem;
          text-align: center;
        }

        .our-story h2 {
          font-size: clamp(1.8rem, 4vw, 2.75rem);
          font-weight: 700;
          margin-bottom: 2rem;
          letter-spacing: -0.03em;
        }

        .our-story p {
          font-size: 1rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.85;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </section>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
const TeamPage: React.FC = () => {
  return (
    <div className="team-page">
      {/* Hero Section */}
      <header className="team-hero">
        <p className="hero-tag">LEADERSHIP</p>

        <h1>
          Meet the Innovators
          <br />
          Behind Finsentsis OS
        </h1>

        <p className="hero-subtext">
          Finsentsis OS is built by visionary leaders and compliance experts
          dedicated to transforming how enterprises navigate global regulatory
          obligations.
        </p>
      </header>

      {/* Team */}
      <TeamGrid members={TEAM_MEMBERS} />

      {/* Divider */}
      <div className="section-divider" />

      {/* Our Story */}
      <OurStory />

      {/* CTA */}
      <JoinMissionCTA />

      <style>{`
        .team-page {
          min-height: 100vh;
          background: #0a110c;
          font-family: 'DM Sans', 'Segoe UI', sans-serif;
          color: white;
        }

        .team-hero {
          text-align: center;
          padding: 7rem 1.5rem 4rem;
          background: radial-gradient(
            ellipse 80% 60% at 50% -10%,
            rgba(34,197,94,0.15) 0%,
            transparent 70%
          );
        }

        .hero-tag {
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #4ade80;
          margin-bottom: 1.2rem;
        }

        .team-hero h1 {
          font-size: clamp(2rem, 5vw, 3.25rem);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 1.2rem;
        }

        .hero-subtext {
          font-size: 1rem;
          color: rgba(255,255,255,0.55);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .section-divider {
          border-top: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          margin: 4rem 0;
        }
      `}</style>
    </div>
  );
};

export default TeamPage;