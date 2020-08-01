import React, { Component } from "react";
import { Route } from "react-router-dom";
// import Home from "../components/Home";
import AuthBannerLogin from "../auth/AuthBannerLogin";
import ProductList from "../productList/ProductList";
import AuthBannerLoginOtp from "../auth/AuthBannerLoginOtp";
import AuthBannerSignUp from "../auth/AuthBannerSignUp";
import AuthBannerOtpVerify from "../auth/AuthBannerOtpVerify";
// import AuthBannerLogin from "../auth/AuthBannerLogin";
// import ProductList from "../productList/ProductList";
// import AuthBannerLoginOtp from "../auth/AuthBannerLoginOtp";
// import AuthBannerSignUp from "../auth/AuthBannerSignUp";
// import AuthBannerOtpVerify from "../auth/AuthBannerOtpVerify";
// import PaymentMethodCard from "../paymentMethod/paymentMethod";
import paymentMethod from "../paymentMethod/paymentMethod";
// import PaymentMethodDetail from "../paymentMethod/PaymentMethodDetail/PaymentMethodDetail";
import PaymentMethodBooking from "../paymentMethod/paymentMethodBooking/PaymentMethodBooking";
// import PaymentMethodCard from "../paymentMethod/paymentMethodCard/PaymentMethodCard";

import DetailView from "../detailView/DetailView";
// import AutocompleteForm from "../home/AutocompleteForm";
export default class Routes extends Component {
  render() {
    return (
      <>
        <Route path="/" exact component={ProductList} />
        {/* <Route path="/" exact component={map} /> */}
        <Route path="/:filter" exact component={ProductList} />
        <Route path="/login" component={AuthBannerLogin} />
        <Route path="/loginotp" component={AuthBannerLoginOtp} />
        <Route path="/otpverify" component={AuthBannerOtpVerify} />
        <Route path="/signup" component={AuthBannerSignUp} />
        <Route path="/entity/:id" exact component={DetailView} />
        {/* <Route path="/search" exact component={AutocompleteForm} /> */}
        {/* <Route path="/" exact component={ProductList} /> */}
        {/* <Route path="/login" exact component={AuthBannerLogin} /> */}
        {/* <Route path="/loginotp" component={AuthBannerLoginOtp} /> */}
        {/* <Route path="/otpverify" component={AuthBannerOtpVerify} /> */}
        {/* <Route path="/signup" component={AuthBannerSignUp} /> */}
        <Route path="/entity/:id/payment" exact component={paymentMethod} />
        <Route
          path="/entity/:id/payment/book"
          exact
          component={PaymentMethodBooking}
        />
      </>
    );
  }
}
