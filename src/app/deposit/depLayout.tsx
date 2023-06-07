import BillingInfo from "./billingInfo";
import PaymentInfo from "./paymentInfo";

export const DepLayout: React.FC = () => {
  return (
    <>
      <PaymentInfo />
      <BillingInfo />
    </>
  );
};
