import React from "react";
import {
  CallToActionContent,
  CallToActionButton,
  CallToActionMessaging,
  CallToActionWrapper
} from "./App.style";

const CallToAction = () => (
  <CallToActionWrapper>
    <CallToActionContent>
      <CallToActionMessaging>
        Our base price is $65/month for an annual subscription
      </CallToActionMessaging>
      <CallToActionButton>Sign Up Today!</CallToActionButton>
      <div>{window.location.pathname}</div>
    </CallToActionContent>
  </CallToActionWrapper>
);

export default CallToAction;
