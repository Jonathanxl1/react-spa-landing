import ContentBlock from "../components/ContentBlock";

import mockup from "../assets/mockup_1.png";
import profileMockup from "../assets/Profile View mockup.png";
import iphoneMockup from "../assets/Iphone app.png";

function Home() {
  return (
    <>
      <div className="w-full h-auto bg-gradient-to-b from-white from-20% to-green-600">
        <ContentBlock className="flex items-center">
          <div className="w-1/2  h-full flex  text-center flex-col justify-center">
            <h1 className="font-bold">
              ¡La mejor forma de escribir textos y evaluar!
            </h1>
            <p className="text-center ">
              Crea grandes textos que solamente expertos, profesores y
              estudiantes puedan ver
            </p>
          </div>
          <div className="w-1/2 h-auto">
            <img className="" src={mockup} alt="" />
          </div>
        </ContentBlock>
        <ContentBlock className="flex items-center justify-center">
          <div className="w-1/2 h-full flex justify-center">
            <img className="w-[200px] h-auto" src={profileMockup} alt="" />
          </div>
          <div className="w-1/2 flex flex-col text-center">
            <h1 className="font-bold">
              Comparte con gran variedad de personas
            </h1>
            <p className="text-center ">
              Conoce persona del mismo ambito personal tuyo
            </p>
          </div>
        </ContentBlock>
        <ContentBlock className="">
          <h1 className="text-center font-bold my-8">Experiencias</h1>
          <div className="w-full h-auto flex justify-center">
            <div className="w-3/12">
              <div className="card_experiences relative top-14 flex flex-col w-full">
                <em>
                  ¨En este aplicacion puedo mostrar mis tesis y validar si es
                  correcta gracias a la comunica EvalText¨
                </em>
                <p className="text-right">Julian j.</p>
              </div>
            </div>
            <div className="w-3/12 h-full flex justify-center mx-6">
              <img className="w-[200px] h-auto" src={iphoneMockup} alt="" />
            </div>
            <div className="w-3/12">
              <div className="card_experiences relative top-7 flex flex-col w-full ">
                <em>
                  “Puedo conocer mas sobre el ambito universitario y fomentar mi
                  conocimiento”
                </em>
                <p className="text-right">Maria H.</p>
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex justify-center mt-8">
            <div className="card_experiences flex flex-col w-5/12">
              <em>
                “Puedo colaborar y mejorar el ambito estudiantil gracias a
                compartir con estudiantes”
              </em>
              <p className="text-right">Jose A.</p>
            </div>
          </div>
        </ContentBlock>
        <ContentBlock className="">
          <p>Pendidn</p>
        </ContentBlock>
      </div>
    </>
  );
}

export default Home;
