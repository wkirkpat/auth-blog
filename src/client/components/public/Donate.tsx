import * as React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import Form from "./Form";

const Donate: React.FC<IDonateProps> = () => {
  return (
    <>
      <StripeProvider apiKey="pk_test_51H4pnjA7JACc3AmKpVPr9u8BMQnFezPGxNqKfiX1ftAr61UIpoaOlzKoEkb76E5yimZuJTLvYw92DMV8y22T0N8n00bNH6UMdK">
        <Elements>
          <Form />
        </Elements>
      </StripeProvider>
    </>
  );
};

interface IDonateProps {}

export default Donate;
