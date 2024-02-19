import React from "react";
import Header from "../common/Header";
import TeamCard from "../cards/TeamCard";

function TeamSection() {
  const teamData = [
    {
      id: 0,
      imageUrl:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      name: "Imtiyaz Sayyid",
      profession: "Full Stack Developer",
    },
    {
      id: 1,
      imageUrl:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      name: "Fahad Khan",
      profession: "Full Stack Developer",
    },
    {
      id: 2,
      imageUrl:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      name: "Ali Shaikh",
      profession: "Junior Developer",
    },
  ];
  return (
    <section className="mt-[9rem]">
      <Header title="our team" subtitle="Meet The Team" />
      <div className="grid grid-cols-1 gap-16  md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-[3.31rem]">
        {teamData.map((team) => (
          <TeamCard key={team.id} imageUrl={team.imageUrl} name={team.name} profession={team.profession} />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
