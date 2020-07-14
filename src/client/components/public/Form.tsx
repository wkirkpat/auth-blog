import * as React from "react";
import {
  CardElement,
  injectStripe,
  ReactStripeElements,
} from "react-stripe-elements";
import { useState } from "react";

const Form: React.FC<IFormProps> = (props) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let { token } = await props.stripe.createToken({ name: name });
      let amount = value;
      await fetch("/api/donate", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ token, amount }),
      });
      //redirect, clear, alerts, whatever else I want to happen after it completes
    } catch (e) {
      throw e;
    }
  };

  return (
    <main className="container">
      <form
        className="form-group, mt-3, border border-primary rounded shadow-lg p-3"
        onSubmit={handleSubmit}
      >
        <label>Name</label>
        <input
          type="text"
          className="input-group my-1 p-1 border border-dark"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <label>Amount</label>
        <input
          type="text"
          className="input-group my-1 p-1 border border-dark"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <label>CC Number -- Exp -- CVC</label>
        <CardElement className="p-2 border border-dark" />
        <button className="btn btn-primary border border-dark mt-3">
          Charge
        </button>
      </form>
    </main>
  );
};

interface IFormProps extends ReactStripeElements.InjectedStripeProps {}

export default injectStripe(Form);
