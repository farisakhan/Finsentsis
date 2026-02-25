import React from "react";
import TeamCard, { type TeamMember } from "./TeamCard";

interface TeamGridProps {
  members: TeamMember[];
}

const TeamGrid: React.FC<TeamGridProps> = ({ members }) => {
  return (
    <section
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 1.5rem 5rem",
      }}
    >
      {members.map((member, index) => (
        <TeamCard key={member.name} member={member} index={index} />
      ))}
    </section>
  );
};

export default TeamGrid;