import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51NJtNJSCyckeC82wn2GfMV7MaIay3iZYlF3MNGjWlEXxGyTOIwFCyoGebSanO9v73H0gfyesibYZs2tCVmuCAdbV001O3Xgv14');
  }
  return stripePromise;
};

export default getStripe;