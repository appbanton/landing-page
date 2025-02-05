import { twMerge } from "tailwind-merge";

export default function FeatureCard(props: {
  title: string;
  description: string;
  children?: React.ReactNode; //ReactNode represents all the things React can render
  className?: string;
}) {
  const { title, description, children, className } = props;
  return (
    <div
      className={twMerge(
        "border border-white/10 rounded-3xl bg-neutral-900 p-6",
        className
      )}
    >
      {/* aspect video === 16/9. This should standardize children */}
      <div className="aspect-video">{children}</div>
      <div>
        <h3 className="text-4xl font-medium mt-6">{title}</h3>
        <p className="text-white/50 mt-2">{description}</p>
      </div>
    </div>
  );
}
