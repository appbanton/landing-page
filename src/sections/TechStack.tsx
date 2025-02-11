import IntegrationsColumn from "../components/IntegrationsColumn";
import Tag from "../components/Tag";

import figmaIcon from "../assets/images/figma-logo.svg";
import notionIcon from "../assets/images/notion-logo.svg";
import slackIcon from "../assets/images/slack-logo.svg";
import relumeIcon from "../assets/images/relume-logo.svg";
import framerIcon from "../assets/images/framer-logo.svg";
import githubIcon from "../assets/images/github-logo.svg";

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool",
  },
  {
    name: "Notion",
    icon: notionIcon,
    description: "Notion is an all in one workspace for notes",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerful team messaging application",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is an AI based design tool for wireframing",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool",
  },
  {
    name: "Github",
    icon: githubIcon,
    description: "GitHub is the leading code repository platform",
  },
];

export type IntegrationsType = typeof integrations;

export default function TechStack() {
  return (
    <section className="py-24 overflow-hidden" id="stack">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          {/* lg:LHS */}
          <div>
            {/* Text */}
            <Tag variant="default" className="mb-10">
              {" "}
              Tech stack
            </Tag>
            <h2 className="text-6xl font-medium mb-4">
              We build with the best
              <span className="text-brand-primary"> tools</span>
            </h2>
            <p className="text-white/50 text-lg">
              With the right tools in the right hands, great design isn&apos;t
              just possible—it&apos;s inevitable.
            </p>
          </div>
          {/* lg: RHS */}
          <div>
            {/* Gradient effect */}
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 grid md:grid-cols-2 gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              {/* carousel */}
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                integrations={integrations.slice().reverse()}
                className="hidden md:flex"
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
