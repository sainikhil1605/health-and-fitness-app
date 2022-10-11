import { Link } from "react-router-dom";
import About from "../../components/About";
import ClassesSection from "../../components/ClassesSection";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <div className="bg-hero bg-cover overflow-hidden w-full text-white px-10">
        <Header />
        <div className="mt-10 font-bold font-display text-7xl py-32 pb-24 max-w-3xl">
          <h1>
            <strong>IT’S ALL ABOUT WHAT YOU CAN ACHIEVE</strong>
          </h1>
        </div>
        <p className="font-bold text-lg font-navbar">
          Empower yourself to make the changes you need to make
        </p>
        <div className="mt-20 mb-10 font-display font-semibold">
          <Link to="/classes" className="uppercase px-5 py-5  bg-orange-600">
            Let's get started
          </Link>
        </div>
      </div>

      <ClassesSection />
      <About />
    </>
  );
};
export default Home;
