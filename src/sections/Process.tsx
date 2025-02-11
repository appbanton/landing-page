import Image from "next/image";

import Tag from "../components/Tag";
import FeatureCard from "../components/FeatureCard";
import Avatar from "../components/Avatar";

import avatar1 from "../assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "../assets/images/avatar-florence-shaw.jpg";
import avatar3 from "../assets/images/avatar-lula-meyers.jpg";
import Key from "../components/Key";

const features = [
  "Research",
  "Discovery",
  "Wireframes",
  "UX Strategy",
  "Prototyping",
  "User Testing",
  "Design Handoffs",
];

export default function Process() {
  return (
    <section className="py-24" id="process">
      <div className="container">
        <div className="flex justify-center mb-10">
          <Tag variant="default">our process</Tag>
        </div>
        <h2 className="text-5xl md:text-6xl font-medium text-center md:max-w-2xl mx-auto">
          Where power meets
          <span className="text-brand-primary"> simplicity</span>
        </h2>

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          {/* card #1 */}
          <FeatureCard
            title="Tell us your product vision"
            description="Share your design project details with us and watch your dream take shape"
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="flex aspect-video items-center justify-center">
              <Avatar className="z-30">
                <Image src={avatar1} alt="avatar 1" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-20">
                <Image src={avatar2} alt="avatar 2" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6  border-amber-500 z-10">
                <Image src={avatar3} alt="avatar 3" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-transparent">
                <div className="size-full rounded-full bg-neutral-700 inline-flex items-center justify-center gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      className="size-1.5 bg-white rounded-full"
                      key={i}
                    ></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
          {/* card #2 */}
          <FeatureCard
            title="Witness the design magic"
            description="Our expert team of creatives will turn your vision into pixel perfection"
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="flex aspect-video items-center">
              <p className="text-4xl font-extrabold text-white/20 text-center">
                We&apos;ve achieved{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  incredible{" "}
                </span>
                growth this year
              </p>
            </div>
          </FeatureCard>
          {/* card #3 */}
          <FeatureCard
            title="Get ongoing support"
            description="This ensures you have uninterrupted access to our design team"
            className="md:col-span-2 md:col-start-2 lg:col-span-1"
          >
            <div className="flex aspect-video items-center gap-4">
              <Key className="w-28">shift</Key>
              <Key>alt</Key>
              <Key>C</Key>
            </div>
          </FeatureCard>
        </div>

        {/* Feature list */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((e) => (
            <div
              key={e}
              className="bg-neutral-900 border border-white/10 px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 inline-flex justify-center items-center hover:scale-105 transition duration-300" //inline flex prevents container width from spanning available width
            >
              <span className="bg-brand-primary text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">
                &#10038;
              </span>
              <div className="font-medium md:text-lg">{e}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
