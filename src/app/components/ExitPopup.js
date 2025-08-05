'use client';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const ExitPopup = () => {
  useEffect(() => {
    // Check localStorage on mount; if true, skip attaching the event listener
    if (localStorage.getItem('reviewNeverShow') === 'true') return;

    const handleMouseOut = (e) => {
      // Check localStorage on every mouseout event
      if (e.clientY < 50 && localStorage.getItem('reviewNeverShow') !== 'true') {
        Swal.fire({
          title: 'Enjoyed Atulya Krishi Vana?',
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
          didOpen: () => {
            const checkbox = document.getElementById('dontShowAgainCheckbox');
            if (checkbox) {
              checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                  localStorage.setItem('reviewNeverShow', 'true');
                  Swal.close(); // Close popup immediately
                }
              });
            }
          },
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

export default ExitPopup;