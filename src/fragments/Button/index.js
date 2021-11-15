import { Link } from "react-router-dom";

import { ContainerButton } from "./styles";

const Button = ({ Title, path, className }) => (
  <ContainerButton className={`mt-4 ${className && className}`}>
    <Link to={path}>{Title}</Link>
  </ContainerButton>
);

export default Button;
