import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="bg-about bg-cover overflow-hidden w-full text-white px-10">
        <div className="mt-32 text-4xl font-bold mb-20 uppercase">
          Deeksha club
        </div>
        <p className="max-w-xl">
          <span className="max-w-xl">
            We’re not here to carry you to fitness, we’re here to motivate you
            to carry yourself to your goals.
            <br />
            <br />
            If you’re not sure what your goals are, or don’t know where to start
            on your fitness journey, come in and speak to one of our qualified
            trainers who can help you develop a plan.
          </span>
        </p>
        <div className="flex my-28">
          <Link className="uppercase px-5 py-5 text-white  bg-orange-600">
            Schedule
          </Link>
        </div>
      </section>
    </>
  );
};
export default About;
