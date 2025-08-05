import { NavLink } from "react-router";

const CustomNavLink = ({ link, children, ...props }) => {
  return (
    <NavLink to={link} {...props}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
