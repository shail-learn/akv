'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaGlobe } from 'react-icons/fa';

const languages = [
  { label: 'English', value: 'en' },
  { label: 'Hindi', value: 'hi' },
];

const includedLanguages = 'en,hi';

function googleTranslateElementInit() {
  if (
    typeof window !== 'undefined' &&
    window.google &&
    window.google.translate &&
    typeof window.google.translate.TranslateElement === 'function'
  ) {
    if (!window.__googleTranslateInitDone) {
      window.__googleTranslateInitDone = true;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    }
  } else {
    setTimeout(googleTranslateElementInit, 300); // Retry if not ready
  }
}

export function GoogleTranslate() {
  const pathname = usePathname();
  const [langCookie, setLangCookie] = useState('en');

  // Read current language from googtrans cookie
  const getCurrentLangFromCookie = () => {
    const match = document.cookie.match(/googtrans=\/[^\/]+\/([^;]+)/);
    return match?.[1] || 'en';
  };

  // Set combo value and dispatch change
  const onChange = (value) => {
    document.cookie = `googtrans=/en/${value}; path=/`;
    setLangCookie(value);

    const combo = document.querySelector('.goog-te-combo');
    if (combo) {
      combo.value = value;
      combo.dispatchEvent(new Event('change'));
    }

    // Reload to sync DOM with translated content
    setTimeout(() => {
      location.reload();
    }, 500);
  };

  // Mount script and expose init
  useEffect(() => {
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  // Initialize on route change
  useEffect(() => {
    googleTranslateElementInit();
    setLangCookie(getCurrentLangFromCookie());
  }, [pathname]);

  // Sync dropdown when language changes silently (e.g., closing top bar)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setLangCookie(getCurrentLangFromCookie());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      subtree: true,
      childList: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center space-x-2 text-[#A8A8A8]">
      <FaGlobe />
      <div id="google_translate_element" style={{ visibility: 'hidden', width: 0, height: 0 }} />
      <select
        onChange={(e) => onChange(e.target.value)}
        value={langCookie}
        className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700"
      >
        {languages.map((lang) => (
          <option value={lang.value} key={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>

      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}
