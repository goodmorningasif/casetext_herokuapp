import fetcher from "./fetcher";
import { STRIPE_ENUMS, FETCHER_ENUMS } from "./enums";

const stripeHelper = {
  fetchPlan() {
    return fetcher({
      url: `${STRIPE_ENUMS.plansURL}${STRIPE_ENUMS.plansId}`,
      method: FETCHER_ENUMS.get,
      auth: process.env.REACT_APP_STRIPE_SECRET
    });
  },

  fetchDiscount(couponId) {
    return fetcher({
      url: `${STRIPE_ENUMS.couponURL}${couponId}`,
      method: FETCHER_ENUMS.get,
      auth: process.env.REACT_APP_STRIPE_SECRET
    });
  }
};

export default stripeHelper;
