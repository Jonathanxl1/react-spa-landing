import { useEffect, useRef } from "react";
import { ProfileDTO } from "../Dtos/profile.dto";

interface Props {
  reverse: boolean;
}

function ProfileTeam({
  role,
  name,
  url_photo,
  resume,
  reverse = false,
}: Partial<ProfileDTO & Props>) {
  let divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reverse && divRef.current) {
      let currentClassName = divRef.current.className;
      divRef.current.className = currentClassName?.concat("flex-row-reverse");
    }
  }, [reverse]);

  return (
    <div
      ref={divRef}
      className="w-full h-auto flex justify-around flex-row-reverse">
      <div className="w-3/12 h-auto flex justify-center items-center ">
        <div
          className="size-40 rounded-full bg-cover "
          style={{
            backgroundImage: `url('/src/assets/images_profiles/${url_photo}.png')`,
          }}></div>
      </div>
      <div className="w-7/12 flex flex-col items-center space-y-3">
        <h2 className="font-bold">{role}</h2>
        <span>Nombre: {name}</span>
        <span className="text-center">{resume}</span>
      </div>
    </div>
  );
}

export default ProfileTeam;
