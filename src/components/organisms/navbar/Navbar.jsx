import "./style.scss";
import { useEffect, useState } from "react";
import { unsubscribe } from "../../../../services/authServices";
import { registerWithGoogle, signOut } from "../../../../firebase/authControl";
import { getUser } from "../../../../firebase/dbController";
import { auth } from "../../../../firebase/firebase";
import { NavLink, useNavigate } from "react-router";
import { getUserApplications } from "../../../../firebase/dbController";
import CustomButton from "../../atoms/button/CustomButton";
import CustomNavLink from "../../atoms/CustomNavLink/CustomNavLink";

const Navbar = () => {
  const [userAuth, setUserAuth] = useState(null);
  const [userRole, setUserRole] = useState(null);
  let navigate = useNavigate();

  const handleRegister = async () => {
    await registerWithGoogle();
    const user = await getUser(auth.currentUser.uid);
    unsubscribe(setUserAuth);
    setUserRole(user.role);
    console.log("Role: ", user.role);
    user.role === "admin" ? navigate("/applications") : navigate("/form");
  };

  const handleLogout = async () => {
    await signOut();
    unsubscribe(setUserAuth);
  };
  useEffect(() => {
    unsubscribe(setUserAuth);
  }, []);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (auth.currentUser) {
        const user = await getUser(auth.currentUser.uid);
        setUserRole(user.role);
      }
    };
    fetchUserRole();
  }, [auth.currentUser]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg lg-body-teritary bg-blue ">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <img className="logo" src="/logo.png" alt="logo" />
            <div className="d-flex flex-column justify-content-center g-2 ms-2 text-light">
              <h5 className="m-0">Job Application </h5>
              <h5 className="m-0">Management System</h5>
            </div>
          </div>
          {userAuth ? (
            <div className="container d-flex justify-content-end gap-2">
              <CustomNavLink
                link={"/applications"}
                children={"Your Applications"}
                className="btn btn-primary rounded-pill text-dark"
              />

              {userRole === "user" && (
                <CustomNavLink
                  link={"/form"}
                  children={"New Application"}
                  onClick={() => getUserApplications()}
                  className="btn btn-primary rounded-pill text-dark"
                />
              )}
              <CustomNavLink
                link={"/"}
                children={"Logout"}
                onClick={() => {
                  handleLogout();
                }}
                className="btn btn-primary rounded-pill text-dark"
              />
            </div>
          ) : (
            <CustomButton
              className="btn btn-primary  rounded-pill"
              onClick={async () => await handleRegister()}
            >
              Login/Register
            </CustomButton>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
