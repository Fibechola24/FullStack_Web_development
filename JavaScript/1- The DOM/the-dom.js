// function init(){
//     const p = document.querySelector('p');
//     console.log(p);
// }
// init();

// // const item2 = document.querySelector('.item');
// console.log(item2);
// const divs = document.querySelector(divs);
// console.log(divs);
// const item2 = document.querySelector('.item2');
// const item2image = item2.querySelector('img');
// const heading = document.querySelector('h2');
// console.log(heading);
// console.dir(heading.textContent);  //getter
// heading.textContent = 'I am happy';
// console.log(heading.textContent);

// console.dir(heading.textContent);
// console.log(heading.innerText);

// const heading2 = document.querySelector('h2');
// heading2.textContent = 'Change the text content';
// console.log(heading2.textContent);

//classes

// const pic = document.querySelector('img');
// pic.classList.add('open');
// pic.classList.remove('cool');

// console.log(pic.classList);
// pic.alt = 'image random';
// // pic.width = 200;


// function toggleROund(){
//    pic.classList.toggle('.round');
// }
// pic.addEventListener('click', toggleROund);

// window.addEventListener('load', function() { console.log(pic.naturalwidth)});

// console.log('it works!');

// const myPar = document.createElement('p');
// myPar.textContent = 'I am a paragraph';


// const myImage = document.createElement('img');
// myImage.src = 'https://picsum.photos/500';
// myImage.alt = 'picsum photo';


// const myDiv = document.createElement('div');
// myDiv.classList.add('wrapper');
// console.log(myDiv);


// myDiv.appendChild(myPar);
// myDiv.appendChild(myImage);
// document.body.appendChild(myDiv);

// const heading = document.createElement('h2');
// heading.textContent = 'Header is added with JavaScript';
// myDiv.insertAdjacentElement('afterbegin', heading);


/* create an five unordered list with content, one, two, three, four, five
*/

// var list = document.createElement("ul");

// var items = ["one", "two", "three", "four", "five"];

// for (var i = 0; i < items.length; i++) {
//   var item = document.createElement("li");
//   item.innerHTML = items[i];
//   list.appendChild(item);
// }


// document.body.appendChild(list);
// const list = document.createElement('ul');
// const li = document.createElement('li');
// li.textContent = 'Two';
// list.appendChild(li);



// const li5 = document.createElement('li');
// li5.textContent = 'Five';
// list.append(li5);

// document.body.insertAdjacentElement('afterbegin', list);


//creating HTML elements with strings

//transversing through our DOM element

//make a div
const div = document.createElement('div');
//add a class of wrapper to it
div.classList.add('wrapper');
//put it into the body
document.body.appendChild(div);

//make an unordered list
const ul = ` 
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
`;
//put that list into the above wrapper
div.innerHTML = ul;
console.log(div);

//create an image
const img = document.createElement('img');
//set the source to an image
img.src = "https://picsum.photos/500"
//set width and height of the image
img.width = 250;
img.height = 250;
//add a class of cute
img.classList.add('Cute');
//add an alt of cute puppy
img.alt = 'cute puppy';
//append the image to the wrapper
div.appendChild(img);


 // with HTML string, make a div, with two paragraphs inside of it

//  const myHTML = `
//     <div class = "myDiv">
//     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, exercitationem?</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, exercitationem?</p>
//     </div>
//  `;

//  const ulElement = div.querySelector('ul');
// //  console.log(ulElement);
// // put this div before the unordered list from above
// ulElement.insertAdjacentHTML('beforebegin', myHTML);

//  // add a class to the second paragraph called warning
//  const myDiv = div.querySelector('.myDiv');
// //  console.log(myDiv);
//  // remove the first paragraph



// create a function called generatePlayerCard that takesin three arguments: name, age, and height


// have that function return html that looks like this:
// <div className="playerCard">
// <h2>NAME 1 AGE</h2>
// <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>