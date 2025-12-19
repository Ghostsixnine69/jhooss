const alternatives = [
  { text:"", image:"images/cat-01.gif" },
  { text:"Entonces déjame decirte algo: contigo todo se siente más real", image:"images/cat-02.gif" },
  { text:"No te pregunto por hoy, te pregunto por todo lo que todavía no vivimos", image:"images/cat-03.gif" },
  { text:"Yo ya te elegí, incluso en los días simples, incluso en los complicados", image:"images/cat-04.gif" },
  { text:"Entonces no es una pregunta… es una verdad: quiero caminar contigo", image:"images/cat-05.gif" }
];

const ohyes = {
  text:"Sabía que aceptarías 💖",
  image:"images/cat-yes.gif"
};

const cat = document.querySelector('.cat');
const text = document.querySelector('.text');
const buttons = document.querySelectorAll('.button:not(.button__error)');
const errorButton = document.querySelector('.button__error');
const rain = document.querySelector('.rain');

let count = 0;

function updateDisplay(item){
  cat.src = item.image;
  text.textContent = item.text;
}

updateDisplay(alternatives[0]);

buttons.forEach(button=>{
  button.addEventListener('click',()=>{
    const action = button.dataset.action;

    if(action === "yes"){
      updateDisplay(ohyes);
      buttons.forEach(b=>b.style.display="none");
    }

    if(action === "no"){
      count++;
      if(count < alternatives.length){
        updateDisplay(alternatives[count]);
      }else{
        buttons.forEach(b=>b.style.display="none");
        errorButton.style.display="inline-block";
      }
    }
  });
});

errorButton.addEventListener('click',()=>{
  count = 0;
  updateDisplay(alternatives[0]);
  buttons.forEach(b=>b.style.display="inline-block");
  errorButton.style.display="none";
});

/* Lluvia de corazones */
setInterval(()=>{
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '💖';
  heart.style.left = Math.random()*100 + 'vw';
  heart.style.animationDuration = (Math.random()*3 + 2) + 's';
  rain.appendChild(heart);
  setTimeout(()=>heart.remove(),5000);
},300);


