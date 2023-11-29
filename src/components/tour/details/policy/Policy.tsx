import React from "react";

const Policy = () => {
  return (
    <>
      <h2 className="text-[16px] py-2 font-[600]">Confirmation Policy :</h2>
      <p className="text-[16px]">
        The customer receives a confirmation voucher via email within 24 hours
        of successful booking.
        <br />
        <br />
        In case the preferred slots are unavailable, an alternate schedule of
        the customer’s preference will be arranged and a new confirmation
        voucher will be sent via email.
        <br />
        <br />
        Alternatively, the customer may choose to cancel their booking before
        confirmation and a full refund will be processed.
      </p>
      <h2 className="text-[16px] py-2 font-[600]">Refund Policy : :</h2>
      <p className="text-[16px]">
        The applicable refund amount will be processed within 10 business days.
        All applicable refunds will be done in the traveler&apos;s banks wallet
        as E-cash.
      </p>
    </>
  );
};

export default Policy;
