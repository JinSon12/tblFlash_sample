import React, { useState } from "react";
import { useParams } from "react-router-dom";

const PromoDetail = (props) => {
  const urlParams = useParams();
  let promoId = urlParams.promoId;

  console.log(promoId);

  return <></>;
};

export default PromoDetail;
