import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section>
        <div className="mt-32 px-10 font-display">
          <h3 className="font-bold text-4xl">ARE YOU READY FOR CHANGES?</h3>
          <div className="flex my-16">
            <Link className="uppercase px-5 py-5 text-white  bg-orange-600">
              Schedule
            </Link>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-x-96 px-10 bg-black text-white font-display">
        <div>
          <h6 className="uppercase font-bold pt-32 text-2xl">Working hours</h6>
          <p className="my-10 font-navbar ">
            <span>
              Monday - Friday 5:00 AM - 12:00 AM
              <br />
              Sunday - Saturday 8:00 AM - 10:00 PM
            </span>
          </p>
        </div>
        <div>
          <h6 className="uppercase font-bold pt-32 text-2xl">Address</h6>
          <p className="my-10 font-navbar">
            <span>
              Overland Park.
              <br />
              Kansas,KS-66223
            </span>
          </p>
        </div>
        <div className="flex flex-row pb-20">
          <FaTwitter className="mr-10" />
          <FaFacebook className="mx-10" />
          <FaInstagram className="mx-10" />
        </div>
      </section>
    </>
  );
};
export default Footer;
