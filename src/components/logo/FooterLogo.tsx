import React from "react";
import { useNavigate } from "react-router-dom";

export const FooterLogo = () => {
  const navigate = useNavigate();
  return (
    <img src="/images/logo_bt.png" style={{maxWidth: 'calc(100% - 32px)'}} alt="logo" onClick={() => navigate("/")} />
  );
};
