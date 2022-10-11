import { Link } from "react-router-dom";
import hiit from "../../assets/images/HIIT.jpg";
import pillates from "../../assets/images/pillates.jpg";
import yoga from "../../assets/images/yoga.jpg";
import zumba from "../../assets/images/zumba.jpg";
const ClassesSection = () => {
  return (
    <section id="classes" className="px-10 font-display font-bold">
      <div className="pt-20 text-5xl">
        <h2>
          <strong className="uppercase font-semibold">Popular classes</strong>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-x-72 px-2">
        <div className="mt-32">
          <img src={yoga} className="max-w-lg max-h-80" alt="yoga" />
          <h5 className="mt-3 ">
            <strong className="text-4xl">Yoga</strong>
          </h5>
        </div>
        <div className="mt-32 ">
          <img src={pillates} className="max-w-lg max-h-80" alt="pillates" />
          <h5 className="mt-3">
            <strong className="text-4xl">Pillates</strong>
          </h5>
        </div>
        <div className="mt-32">
          <img src={hiit} className="max-w-lg max-h-80 min-h-fit" alt="hiit" />
          <h5 className="mt-3">
            <strong className="text-4xl">HIIT</strong>
          </h5>
        </div>
        <div className="mt-32">
          <img
            src={zumba}
            className="max-w-lg max-h-80 min-h-fit"
            alt="zumba"
          />
          <h5 className="mt-3">
            <strong className="text-4xl">Zumba</strong>
          </h5>
        </div>
      </div>
      <div className="flex flex-col items-center my-28">
        <Link
          to="/classes"
          className="uppercase px-5 py-5 text-white  bg-orange-600"
        >
          Check all classes
        </Link>
      </div>
    </section>
  );
};
export default ClassesSection;
