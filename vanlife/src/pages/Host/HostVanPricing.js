import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HostVanPricing() {
    const [currentVan] = useOutletContext();
  return (
    <h3 className="host-van-price">${currentVan.price}.00<span>/day</span></h3>
  );
}

export default HostVanPricing;
