"use client";
import Script from 'next/script';

export default function Testcomp() {
  return (
    <>
      <div id="google_translate_element" style={{ position: 'fixed', top: 10, right: 10, zIndex: 1000 }} />

      {/* 1. Configuration callback */}
      <Script
        id="google-translate-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,hi',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              }, 'google_translate_element');
            }
          `,
        }}
      />

      {/* 2. Load Google's translation script */}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}