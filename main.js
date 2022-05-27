const advice = document.querySelector("#adcontent");
const adnumber = document.querySelector("#adnumber");
const rendombu = document.getElementById("reondom");



rendombu.addEventListener("click",()=>{
  let df = rondom();
  time();
})

function rondom() {
   async function sd() {
    let response = await fetch('https://api.adviceslip.com/advice');
    let data = await response.text();
    let resole = await JSON.parse(data);
    console.log(resole.slip);
    adnumber.innerHTML = resole.slip.id;
    advice.innerHTML = resole.slip.advice
    
  }
  sd();
  
}

const waitt = document.querySelector(".wait")
let times = 5;
function time() {
  waitt.classList.add('ative')
  times = 5;
  waitt.innerHTML = `${times}s`;
  let f = setInterval(() => {
    times--
    waitt.innerHTML = `${times}s`;
    if (times == 0){
      waitt.classList.remove("ative")
      clearInterval(f)
    }
  }, 1000);

}
