import quantumLogo from "../assets/images/quantum.svg";
import acmeLogo from "../assets/images/acme-corp.svg";
import echoValleyLogo from "../assets/images/echo-valley.svg";
import pulseLogo from "../assets/images/pulse.svg";
import outsideLogo from "../assets/images/outside.svg";
import apexLogo from "../assets/images/apex.svg";
import celestialLogo from "../assets/images/celestial.svg";
import twiceLogo from "../assets/images/twice.svg";

import Image from "next/image";

const Logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
  return (
    <section className="container py-24 overflow-x-clip">
      <h3 className="text-xl text-white/50 text-center">
        Already chosen by these market leaders
      </h3>
      <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-24 pr-24">
          {Logos.map((e) => (
            <Image src={e.image} key={e.name} alt={e.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
