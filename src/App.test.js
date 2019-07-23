import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NAV_LINKS, PRODUCT_INFO } from "./enums";
import stripeHelper from "./stripeHelper";
import * as utils from "./utils";

describe("App", () => {
  let rendered;
  let div;

  beforeEach(() => {
    div = document.createElement("div");
    rendered = ReactDOM.render(<App />, div);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Base App", () => {
    it("renders without crashing", () => {
      expect(rendered).toBeDefined();
    });

    it("renders child components", () => {
      expect(rendered.ref_Navigation).toBeDefined();
      expect(rendered.ref_ProductInfo).toBeDefined();
      expect(rendered.ref_CallToAction).toBeDefined();
    });
  });

  describe("Navigation", () => {
    let navigation;

    beforeEach(() => {
      navigation = rendered.ref_Navigation;
    });

    it("renders navigation component", () => {
      expect(navigation.ref_NavBar).toBeDefined();
    });

    it("renders casetext logo", () => {
      expect(navigation.ref_LeftNavItem).toBeDefined();
      expect(navigation.ref_Logo).toBeDefined();
    });

    it("renders navigation links", () => {
      expect(navigation.ref_RightNavItem).toBeDefined();
      expect(navigation.ref_RightNavItem.children.length).toBe(9);
      expect(navigation.ref_NavLinkProduct).toBeDefined();
      expect(navigation.ref_NavLinkProduct.href).toBe(NAV_LINKS[0].url);
      // repeat for other links ...
    });
  });

  describe("ProductInfo", () => {
    let productInfo;

    beforeEach(() => {
      productInfo = rendered.ref_ProductInfo;
    });

    it("renders product info", () => {
      expect(productInfo.ref_BodyContent).toBeDefined();
    });

    it("renders content children", () => {
      expect(productInfo.ref_BodyContent.children.length).toBe(5);
      expect(productInfo.ref_ValuePropAccessTo50StatesCaseLaw).toBeDefined();
      expect(productInfo.ref_ValuePropFindCasesWithSameFacts).toBeDefined();
      // repeat for other copy ...
    });
  });

  describe("CallToAction", () => {
    let callToAction;

    beforeEach(() => {
      callToAction = rendered.ref_CallToAction;
      jest.spyOn(stripeHelper, "fetchPlan");
      jest.spyOn(utils, "formatPricing");
    });

    it("renders call to action component", () => {
      expect(callToAction.ref_CTAWrapper).toBeDefined();
      expect(callToAction.ref_CTAContent).toBeDefined();
      expect(callToAction.ref_CTAMessaging).toBeDefined();
    });

    it("fetches Stripe pricing data", () => {
      expect(stripeHelper.fetchPlan).toHaveBeenCalled();
    });

    it("uses format pricing util", () => {
      expect(utils.formatPricing).toHaveBeenCalled();
    });
  });
});

describe("Utils", () => {
  describe("decimalMover", () => {
    it("returns a multiple of 10 based on the exponent passed", () => {
      expect(utils.decimalMover(2)).toBe(100);
      expect(utils.decimalMover(3)).toBe(1000);
    });
  });

  describe("formatPricing", () => {
    it("returns the price divided by 100", () => {
      expect(utils.formatPricing({ basePrice: 1000 })).toBe(10);
    });

    it("returns the price adjusted to a discount if it is passed", () => {
      expect(utils.formatPricing({ basePrice: 1000, discount: 20 })).toBe(8);
    });
  });
});
