import React, { Component } from "react";
import stripeHelper from "./stripeHelper";
import { STRIPE_ENUMS } from "./enums";
import { formatPricing } from "./utils";

import { CTAContent, CTAButton, CTAMessaging, CTAWrapper } from "./App.style";

class CallToAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basePrice: 0,
      discount: 0
    };
  }

  componentDidMount() {
    const appliedDiscount = window.location.pathname.slice(1);

    stripeHelper
      .fetchPlan()
      .then(resp => this.setState(() => ({ basePrice: resp.amount })));

    if (STRIPE_ENUMS[appliedDiscount]) {
      stripeHelper
        .fetchDiscount(STRIPE_ENUMS[appliedDiscount])
        .then(resp => this.setState(() => ({ discount: resp.percent_off })));
    }
  }

  render() {
    const { basePrice, discount } = this.state;
    return (
      <CTAWrapper>
        <CTAContent>
          <CTAMessaging>
            Our base price is ${formatPricing({ basePrice, discount })}/month
            for an annual subscription
          </CTAMessaging>
          <CTAButton>Start Free Trial</CTAButton>
        </CTAContent>
      </CTAWrapper>
    );
  }
}
export default CallToAction;
