const inputEle = document.querySelector("#input");
const fromEle = document.querySelector("#from");
const toEle = document.querySelector("#to");
const resultEle = document.querySelector(".result-text");

function toNum(x) {
  return Number(x.replace(",", ""));
}

function appendOption(place) {
  for (let i in data.rates) {
    const option = document.createElement("option");
    option.innerText = i;
    option.setAttribute("id", i);
    option.setAttribute("value", toNum(data.rates[i]));
    place.append(option);
    console.log(i);
  }
}

appendOption(from);
appendOption(to);

document.querySelector("#input-section").addEventListener("submit", (e) => {
  e.preventDefault();
  let input = inputEle.value;
  let from = fromEle.value;
  let to = toEle.value;
  console.log(input, from, to);

  let first = input * from;
  let final = first / to;
  console.log(final);

  resultEle.innerHTML = final.toFixed(2);
  inputEle.value = "";
  fromEle.value = "";
  toEle.value = "1";
  inputEle.focus = true;
});
