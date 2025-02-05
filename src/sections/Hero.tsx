import Button from "../components/Button";
// import Image from "next/image";
// import designExample1Image from "../assets/images/design-example-1.png";
// import designExample2Image from "../assets/images/design-example-2.png";
// import Tag from "../components/Tag";

import Pointer from "../components/Pointer";

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        {/* absolutes */}
        <div className="hidden lg:block">
          {/* <div className="absolute top-16 -left-52">
            <Image src={designExample1Image} alt="cursor 1 image" />
          </div>
          <div className="absolute -top-16 -right-80">
            <Image src={designExample2Image} alt="cursor 2 image" />
          </div> */}
          <div className="absolute top-96 left-48">
            <Pointer name="Appbanton" />
          </div>
          <div className="absolute -top-4 right-48">
            <Pointer name="Joe" color="red" />
          </div>
        </div>

        {/* hero text */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 lg:max-w-4xl mx-auto">
          Build the application of your dreams
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          We are a full service design agency that combines a deep UX & UI
          knowledge with cross sector insights to create clean and engaging user
          experiences
        </p>
        {/* <form className="flex border border-white/15 rounded-full p-2 mt-6 max-w-lg mx-auto">
          <input
            className="bg-transparent text-white/25 px-4 md:flex-1 w-full" //flex-1 here tells the input feild to grow until it reaches the button
            type="email"
            placeholder="Enter your email"
          />
        </form> */}
        <div className="flex justify-center mx-auto mt-14">
          <Button
            type="submit"
            variant="primary"
            className="flex items-center"
            size="sm"
            href="https://forms.gle/z5g59bT6x1NaZnNv5"
          >
            Book a 10 min chat
          </Button>
        </div>
        <p className="mt-6 text-center text-white/25 font-medium">
          It&apos;s absolutely free
        </p>
      </div>
    </section>
  );
}
