// const Base_URL = "https://fxapi.app/api/USD/INR.json";

let dropdowns = document.querySelectorAll(".select-dropdown select");
let button = document.querySelector(".msg button");
let fromcurr = document.querySelector(".from select ");
let tocurr = document.querySelector(".to select");

for(let select of dropdowns)
{
  for(let currcode in countryList)
  {
     let option = document.createElement("option");
    option.value = currcode;
    option.innerText = option.value;
    select.append(option);
  }
    select.addEventListener("change",(e)=>{
        updateFlag(e.target);
    })
}
let updateFlag = (element) => {
 let curr = element.value;
 console.log(curr);
 let contrycode = countryList[curr];
 let newSrc = `https://flagsapi.com/${contrycode}/flat/64.png`;
 let img = element.parentElement.querySelector("img");
 img.src = newSrc;
};
button.addEventListener("click",async(e)=>{
  e.preventDefault();
   
   let amount = document.querySelector("#amount");
   let amtVal = amount.value;
   if(amtVal === "" || amtVal <= 0)
   {
     amtVal = 1;
     amount.value = amtVal;
   }
   let from = fromcurr.value;
   let to = tocurr.value; 
   console.log(from, to);
  const URL = `https://fxapi.app/api/${from}/${to}.json`;

  let response = await fetch(URL);
  let data = await response.json();
  let rate = data.rate;
  let converter = amtVal * rate;
  
let para = document.querySelector(".msg p");
para.innerText = `${amtVal} ${from}= ${converter} ${to}`;
});

