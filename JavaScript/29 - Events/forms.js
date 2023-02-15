//prevent default functionality
const vic = document.querySelector('.vic');
vic.addEventListener('click', function(event) {
    const shouldChangePage = confirm(
      'This website might be malicious!, do you wish to proceed?'
    );

    if (!shouldChangePage) {
        event.preventDefault();
      }
    });

    const signupForm = document.querySelector('[name="signup"]');

    signupForm.addEventListener('submit', function(event) {
        const name = event.currentTarget.name.value;
        if (name.includes('Stella')) {
          alert('Sorry babe');
          event.preventDefault();
        }
      });

      function logEvent(event) {
        console.log(event.type);
        console.log(event.currentTarget.value);
      }
      
    //   console.log(signupForm) ;
      signupForm.name.addEventListener('keyup', logEvent);

      signupForm.name.addEventListener('keydown', logEvent);
      signupForm.name.addEventListener('focus', logEvent);



   