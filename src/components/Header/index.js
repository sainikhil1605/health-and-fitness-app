import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white font-navbar">
      <div className="py-8">
        <NavLink to="/" className="font-extrabold mr-10">
          Deeksha Club
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-white border-b-2 mr-5" : "mr-5"
          }
          to="/classes"
        >
          Classes 
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-white border-b-2 mr-5" : "mr-5"
          }
          to="/personalTrainers"
        >
          Personal Workouts
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-white border-b-2 mr-5" : "mr-5"
          }
          to="/priceAndPlans"
        >
          Prices & Plans
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-white border-b-2 mr-5" : "mr-5"
          }
          to="/schedule"
        >
          Schedule
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-white border-b-2 mr-5" : "mr-5"
          }
          to="/signUp"
        >
          Sign up
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
