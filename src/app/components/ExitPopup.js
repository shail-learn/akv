'use client';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const ExitReviewPopup = () => {
  useEffect(() => {
    const neverShowAgain = localStorage.getItem('reviewNeverShow');
    const alreadyShown = localStorage.getItem('reviewShown');

    if (neverShowAgain || alreadyShown) return;

    const handleMouseOut = (e) => {
      if (e.clientY < 50) {
        localStorage.setItem('reviewShown', 'true');

        Swal.fire({
          title: 'Enjoyed Atulya Krishi Vana?',
          text: 'Leave us a quick Google review. It helps a lot ❤️',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Sure!',
          cancelButtonText: 'Maybe later',
          confirmButtonColor: '#3f6212',
          cancelButtonColor: '#ccc',
          html: `
            <p>Leave us a quick Google review. It helps a lot ❤️</p>
            <div style="margin-top: 1rem; text-align: left;">
              <input type="checkbox" id="dontShowAgainCheckbox" />
              <label for="dontShowAgainCheckbox" style="margin-left: 5px;">Don't show this again</label>
            </div>
          `,
          didClose: () => {
            const checkbox = document.getElementById('dontShowAgainCheckbox');
            if (checkbox && checkbox.checked) {
              localStorage.setItem('reviewNeverShow', 'true');
            }
          }
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(
              'https://www.google.com/search?q=atulya+krishi+vana&ludocid=11622486605723057988#lrd=0x397cf92475629591:0xa1c838400aff4884,1',
              '_blank'
            );
          }
        });
      }
    };

    document.addEventListener('mouseout', handleMouseOut);
    return () => document.removeEventListener('mouseout', handleMouseOut);
  }, []);

  return null;
};

export default ExitReviewPopup;
