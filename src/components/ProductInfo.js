import React, { PureComponent } from "react";
import { BodyContent, ValueProp, ProofPoints } from "./App.style";
import { PRODUCT_INFO } from "../enums";

class ProductInfo extends PureComponent {
  render() {
    return (
      <BodyContent
        ref={ref => {
          this.ref_BodyContent = ref;
        }}
      >
        {PRODUCT_INFO.map(info => {
          if (info.type === "ValueProp") {
            return (
              <ValueProp
                ref={ref => {
                  this[`ref_ValueProp${info.title}`] = ref;
                }}
                key={info.title}
              >
                {info.copy}
              </ValueProp>
            );
          }

          if (info.type === "ProofPoints") {
            return (
              <ProofPoints
                ref={ref => {
                  this[`ref_ProofPoints${info.title}`] = ref;
                }}
                key={info.title}
              >
                {info.copy}
              </ProofPoints>
            );
          }

          return null;
        })}
      </BodyContent>
    );
  }
}
export default ProductInfo;
