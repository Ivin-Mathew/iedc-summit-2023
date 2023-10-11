import React from "react";
import background from "../assets/img/partners/background.png";

import cdac from "../assets/img/partners/cdac-logo.png";
import cdacVega from "../assets/img/partners/cdac.png";
import dapp from "../assets/img/partners/dapp.jpg";
import gdsc from "../assets/img/partners/gdsc.jpg";
import kagazee from "../assets/img/partners/kagazee.png";
import pheonix from "../assets/img/partners/pheonixGuild.png";
import polygon from "../assets/img/partners/polygon.png";
import riglabs from "../assets/img/partners/riglabs.png";
import tie from "../assets/img/partners/tie.jpg";
import tinkerhub from "../assets/img/partners/tinkerhub.png";
import ulearn from "../assets/img/partners/ulearn.png";
import microsoft from "../assets/img/partners/microsoft.png";
import microsoft2 from "../assets/img/partners/microsoft2.png";
const Partners = () => {
  const partnerLogos = [
    cdac,
    cdacVega,
    dapp,
    gdsc,
    kagazee,
    pheonix,
    polygon,
    riglabs,
    tie,
    tinkerhub,
    ulearn,
    microsoft,
    microsoft2,
  ];

  return (
    <div className="w-full py-10 bg-gradient-to-tr from-[#0597F2] to-[#6F04D9] space-y-4">
      <h1 className="font-medium md:font-[500] text-center text-white font-darker-grotesque text-5xl md:text-[60px]">
        Community Partners
      </h1>

      <div className="px-10 my-10 flex flex-wrap gap-6 justify-center items-center">
        {partnerLogos.map((partner) => (
          <div className="w-24 md:w-32 my-6 mx-3 flex justify-center items-center">
            <img width={20} className="w-40" src={partner} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
