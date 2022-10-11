import Header from "../../components/Header";

const PricesAndPlans = () => {
  return (
    <div className="bg-black px-10 text-white">
      <Header />
      <div className="mt-32 font-display font-bold pb-32">
        <h3>
          <strong className="uppercase text-6xl">Prices & Plans</strong>
        </h3>
        <div className="mt-32 flex justify-between pr-32">
          <div>
            <div className="flex">
              <h4 className="mr-40">
                <strong className="uppercase text-5xl">Basic</strong>
              </h4>
              <span className="text-5xl font-normal">30$</span>
            </div>
            <div className="font-extralight font-navbar">
              <h5 className="mt-10 text-2xl">
                <strong className="capitalise">Included:</strong>
              </h5>
              <ul className="list-disc ml-4 mt-5">
                <li> 2x group workouts of your choice</li>
                <li>Unlimited gym access</li>
                <li>Personal workout</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex">
              <h4 className="mr-40">
                <strong className="uppercase text-5xl">Unlimited</strong>
              </h4>
              <span className="text-5xl font-normal">50$</span>
            </div>
            <div className="font-extralight font-navbar">
              <h5 className="mt-10 text-2xl">
                <strong className="capitalise">Included:</strong>
              </h5>
              <ul className="list-disc ml-4 mt-5">
                <li> 2x group workouts of your choice</li>
                <li>Unlimited gym access</li>
                <li>Personal workout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PricesAndPlans;
