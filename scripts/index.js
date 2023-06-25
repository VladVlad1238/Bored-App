const bodyNode = document.querySelector('.js-body')
const titleNode = document.querySelector('.js-title');
const boredTextNode = document.querySelector('.js-bored-text');
const buttonNode = document.querySelector('.js-button');


const titleChange = () => {
  titleNode.innerText = 'Ура, теперь не скучно 🔥';
};

const backgroundColorChange = () =>{
  bodyNode.classList.add('active-color');
}

const fetchHandler = () => {
  fetch('https://www.boredapi.com/api/activity/')
  .then(response => response.json())
  .then((res) =>{
    if (res.status < 200 || res.status > 400) {
      return
    }
    const boredText = res.activity

    boredTextNode.innerHTML = `<p class="js-bored-text bored__text">${boredText}</p>`
  });
}

buttonNode.addEventListener('click', () => {
  titleChange();
  backgroundColorChange();
  fetchHandler();
})
