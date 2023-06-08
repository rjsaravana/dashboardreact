import BillingInfo from "./billingInfo";
import PaymentInfo from "./paymentInfo";
import TransHistory from "./transHistory";

export const DepLayout: React.FC = () => {
  return (
    <>
      <PaymentInfo />
      <BillingInfo />
      <TransHistory />
    </>
  );
};
