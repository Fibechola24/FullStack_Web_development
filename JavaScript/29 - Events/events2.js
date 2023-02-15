// console.log('It worked') ;

const buyButtons = document.querySelectorAll('button.buy');
const coolButton = document.querySelector('.cool');
const buttns = document.querySelector('.buttns');

function handleClick(){
    console.log('it got clicked') ;
}

buttns.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);


//remove listener
// buttns.removeEventListener('click', handleClick);
// addEventListener("click", function(){ alert("Hello World!"); });

//arrow function

// const hooray = () => console.log ('Hooray!');


//listening for events on multiple buttons



// console.log(buyButtons) ; loop over to attach event listener to each item
// const buyButtns = document.querySelectorAll('.button.buy');

// function handleButtonClick() {
//     console.log('You are buying it') ;
// }

// buyButtns.forEach(function(buyBut){
// buyBut.addEventListener('click', handleButtonClick);
// });

function handleBuyButtonClick(event) {
    console.log('You clicked a button!');
    // console.log(event.target);
    console.log(parseFloat (event.target.dataset.price)) ;

    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.target === event.currentTarget);

}
buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click', handleBuyButtonClick);
  });

  window.addEventListener(
    'click',
    function(event) {
      console.log('YOU CLICKED THE WINDOW');
      console.log(event.target);
      console.log(event.type);
      // event.stopPropagation();
      console.log(event.bubbles);
    },
    { capture: true }
  );

  
  const photoEl = document.querySelector('.photo');

  photoEl.addEventListener('mouseenter', e => {
    console.log(e.currentTarget);
    // console.log(this);
  });