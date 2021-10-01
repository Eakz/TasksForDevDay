import React, { useEffect } from 'react';
import useStore from '../../../App/Store';
import { SpinnerContainer, CubeSpinner } from './styled';

const FullPageSpinner = (props) => {
  const { setAnimation } = useStore();

  useEffect(() => {
    setAnimation(true);
    return () => setAnimation(false);
  }, []);
  return (
    <SpinnerContainer>
      <CubeSpinner />
    </SpinnerContainer>
  );
};

export default FullPageSpinner;
