import boxing from "../../assets/images/boxing.jpg";
import hiit from "../../assets/images/HIIT.jpg";
import martial from "../../assets/images/martialArts.jpg";
import pillates from "../../assets/images/pillates.jpg";
import yoga from "../../assets/images/yoga.jpg";
import zumba from "../../assets/images/zumba.jpg";
import Header from "../../components/Header";
const Classes = () => {
  return (
    <div className="bg-black px-10 font-display">
      <Header />
      <div className="text-white ">
        <h2 className="mt-32 uppercase text-4xl font-bold">
          <span className="text-6xl">Classes</span>
        </h2>
        <section id="classes" className="pb-32 font-display font-bold">
          <div className="grid grid-cols-2 gap-x-64 px-2">
            <div className="mt-32">
              <img src={yoga} className="max-w-lg max-h-80" alt="yoga" />
              <h5 className="mt-3 ">
                <strong className="text-4xl">Yoga</strong>
              </h5>
            </div>
            <div className="mt-32 ">
              <img
                src={pillates}
                className="max-w-lg max-h-80"
                alt="pillates"
              />
              <h5 className="mt-3">
                <strong className="text-4xl">Pillates</strong>
              </h5>
            </div>
            <div className="mt-32">
              <img
                src={hiit}
                className="max-w-lg max-h-80 min-h-fit"
                alt="hiit"
              />
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
            <div className="mt-32">
              <img
                src={boxing}
                className="max-w-lg max-h-80 min-h-fit"
                alt="zumba"
              />
              <h5 className="mt-3">
                <strong className="text-4xl">Boxing</strong>
              </h5>
            </div>
            <div className="mt-32">
              <img
                src={martial}
                className="max-w-lg max-h-80 min-h-fit"
                alt="zumba"
              />
              <h5 className="mt-3">
                <strong className="text-4xl">Martial Arts</strong>
              </h5>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Classes;
