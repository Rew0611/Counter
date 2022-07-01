var colour = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let inrease = document.getElementById("increase");
let reset = document.getElementById("reset");
let decrease = document.getElementById("decrease");
let number = document.getElementById("num");
let count = 0;

increase.addEventListener('click',function(){
    count +=1;
    number.textContent=count;
    let rew = "#";
  for (let i = 0; i < 6; i++) {
    rew += colour[randomnumber()];
  }
  let rew2 = "#";
  for (let i = 0; i < 6; i++) {
    rew2 += colour[randomnumber()];
  }
  document.body.style.backgroundImage =
    "linear-gradient(to bottom right," + rew + "," + rew2 + ")";
})
decrease.addEventListener('click',function(){
    if(count>0)
    {
    count -=1;
    number.textContent=count;
    }
    let rew = "#";
  for (let i = 0; i < 6; i++) {
    rew += colour[randomnumber()];
  }
  let rew2 = "#";
  for (let i = 0; i < 6; i++) {
    rew2 += colour[randomnumber()];
  }
  document.body.style.backgroundImage =
    "linear-gradient(to bottom right," + rew + "," + rew2 + ")";
})
reset.addEventListener('click',function(){
    count =0;
    number.textContent=count;
    let rew = "#";
  for (let i = 0; i < 6; i++) {
    rew += colour[randomnumber()];
  }
  let rew2 = "#";
  for (let i = 0; i < 6; i++) {
    rew2 += colour[randomnumber()];
  }
  document.body.style.backgroundImage =
    "linear-gradient(to bottom right," + rew + "," + rew2 + ")";
})










button.addEventListener("click", function () {
  let rew = "#";
  for (let i = 0; i < 6; i++) {
    rew += colour[randomnumber()];
  }
  let rew2 = "#";
  for (let i = 0; i < 6; i++) {
    rew2 += colour[randomnumber()];
  }
 text .textContent = rew + ", " + rew2;
  document.body.style.backgroundImage =
    "linear-gradient(to bottom right," + rew + "," + rew2 + ")";
});
function randomnumber() {
  return Math.floor(Math.random() * colour.length);
}
