import { useEffect, useState } from 'react';

import { ContainerOrder, Container } from './styles';

import OrderComponent from '../../components/orderComponent';

function Order(){
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 135) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
  }, []);

  return(
    <Container>
      <div className={`container--bannerStart ${ isFixed && 'isFixedBanner' }`}>
        <div className={`bannerStart ${ isFixed && 'bannerFixed' } `}>
          <p>
            Bebidas
          </p>
        </div>
      </div>
      <ContainerOrder>
        <OrderComponent />
      </ContainerOrder>
    </Container>
  )
}

export default Order;
