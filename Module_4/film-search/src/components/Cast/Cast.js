import React from "react";

import CastItem from "./CastItem";

const Cast = ({ credits }) => {
  const elements = credits.map((credit) => {
    const { character, name, profile_path, id } = credit;
    return (
      <>
        <CastItem
          key={id}
          id={id}
          character={character}
          name={name}
          profile_path={profile_path}
        />
      </>
    );
  });
  return (
    <>
      <ul className="CastList">{elements}</ul>
    </>
  );
};

export default Cast;
