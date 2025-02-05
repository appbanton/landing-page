import Image from "next/image";
import { type IntegrationsType } from "../sections/TechStack";
import { twMerge } from "tailwind-merge";

export default function IntegrationsColumn(props: {
  integrations: IntegrationsType;
  className?: string;
}) {
  const { integrations, className } = props;
  return (
    <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
      {integrations.map((e) => (
        <div
          key={e.name}
          className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
        >
          <div className="flex justify-center mb-6">
            <Image src={e.icon} alt={`${e.name} Icon`} className="size-24" />
          </div>
          <h3 className="text-3xl text-center mb-2">{e.name}</h3>
          <p className="text-white/50 text-center">{e.description}</p>
        </div>
      ))}
    </div>
  );
}
