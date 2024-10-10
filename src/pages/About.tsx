import { useState } from "react";
import ContentBlock from "../components/ContentBlock";
import ProfileTeam from "../components/Profile";

import dataProfile from "../services/teamProfiles.json";
import { ProfileDTO } from "../Dtos/profile.dto";

function About() {
  let [profiles] = useState<Array<ProfileDTO>>(dataProfile.team);
  return (
    <>
      <ContentBlock>
        <h1 className="font-bold text-center">Acerca de Nosotros</h1>
      </ContentBlock>
      {profiles.map((data, idx) => {
        return (
          <ContentBlock className="flex justify-center" key={idx}>
            <ProfileTeam {...data} reverse={idx % 2 == 0}></ProfileTeam>
          </ContentBlock>
        );
      })}
    </>
  );
}

export default About;
