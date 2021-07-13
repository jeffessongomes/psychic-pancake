import { Link } from 'react-router-dom';

import {ContainerButton} from './styles';

const Button = ({Title, path}) => (
  <ContainerButton className="mt-4">
    <Link to={path}>
      {Title}
    </Link>
  </ContainerButton>
);

export default Button;
