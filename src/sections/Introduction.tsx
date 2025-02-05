import Tag from "../components/Tag";

const text =
  "We work closely with your dev team, digital product managers and stakeholders to design an experience that makes your product offering a joy to use";
export default function Introduction() {
  return (
    //different padding y used to ensure legibility of design
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="flex justify-center mb-10">
          <Tag variant="default"> Introduction</Tag>
        </div>
        <div className="text-4xl md:text-6xl lg:text-7xl font-medium text-center">
          <span className=""> {text} </span>
        </div>
      </div>
    </section>
  );
}
