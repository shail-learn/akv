"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function ReCaptchaProviderWrapper({ children }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.SITE_KEY}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
