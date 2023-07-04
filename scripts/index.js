const TITLE_TEXT = 'Ура, теперь не скучно 🔥';
const url = 'https://www.boredapi.com/api/activity/';

const bodyNode = document.querySelector('.js-body')
const titleNode = document.querySelector('.js-title');
const boredTextNode = document.querySelector('.js-bored-text');
const buttonNode = document.querySelector('.js-button');


const titleChange = () => {
  titleNode.innerText = TITLE_TEXT;
};

const backgroundColorChange = () =>{
  bodyNode.classList.add('active-color');
}

 async function fetchHandler() {
   try {
    const response = await fetch('https://www.boredapi.com/api/activity/');
    const res = await response.json();
    const boredText = res.activity
    console.log(boredText)
    boredTextNode.innerHTML = `<p class="js-bored-text bored__text">${boredText}</p>`
   } catch (e) {
    console.error(e)
   }
  
}

/*const fetchHandler = () => {
  fetch('https://www.boredapi.com/api/activity/')
  .then(response => response.json())
  .then((res) =>{
    if (res.ok) {
      return res;
    }
    const boredText = res.activity

    boredTextNode.innerHTML = `<p class="js-bored-text bored__text">${boredText}</p>`
  });
}*/

buttonNode.addEventListener('click', () => {
  titleChange();
  backgroundColorChange();
  fetchHandler();
})
