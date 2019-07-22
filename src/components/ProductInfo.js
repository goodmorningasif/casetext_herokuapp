import React from "react";
import { BodyContent, ValueProp, ProofPoints } from "./App.style";
import { PRODUCT_INFO } from "../enums";

const ProductInfo = () => (
  <BodyContent>
    {PRODUCT_INFO.map(info => {
      if (info.type === "ValueProp") {
        return <ValueProp>{info.copy}</ValueProp>;
      }

      if (info.type === "ProofPoints") {
        return <ProofPoints>{info.copy}</ProofPoints>;
      }

      return null;
    })}
  </BodyContent>
);

export default ProductInfo;
