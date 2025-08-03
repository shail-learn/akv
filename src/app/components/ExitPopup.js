'use client';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const ExitReviewPopup = () => {
  useEffect(() => {
    const alreadyShown = localStorage.getItem('reviewShown');
    if (alreadyShown) return;

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