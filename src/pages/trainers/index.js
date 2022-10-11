/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import AxiosInstance from "../../services/axios";

import trainer1 from "../../assets/images/trainer1.avif";
import trainer2 from "../../assets/images/trainer2.avif";
import "./trainers.css";
const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    AxiosInstance.get("/trainers").then((data) => {
      setTrainers(data?.data);
    });
  }, []);
  return (
    <div className="bg-black px-10 font-display text-white ">
      <Header />
      <h3 className="mt-32 text-6xl">
        <strong className="uppercase">Personal Trainers</strong>
      </h3>
      {trainers?.map(({ id, name, description }) => (
        <div
          className="mt-32 flex odd:flex-row even:flex-row-reverse justify-between "
          key={id}
        >
          <div className="basis-1/2 flex flex-col justify-center">
            <h4 className="text-3xl">
              <strong className="uppercase">{name}</strong>
            </h4>
            <div
              className="pt-5 text-1xl font-navbar"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
            <div className="mt-20">
              <Link className="uppercase px-5 py-5 text-white  bg-orange-600">
                Schedule Workout
              </Link>
            </div>
          </div>
          <div className="w-full basis-1/2">
            <img
              src={require(`../../assets/images/trainer${id}.avif`)}
              alt="trainer1"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Trainers;
