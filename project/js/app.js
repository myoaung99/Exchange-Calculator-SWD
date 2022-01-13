const inputEle = document.querySelector("#input");
const fromEle = document.querySelector("#from");
const toEle = document.querySelector("#to");
const resultEle = document.querySelector(".result-text");
const tbody = document.querySelector("#historyList");

function toNum(x) {
  return Number(x.replace(",", ""));
}

function appendOption(place) {
  const optgroup = document.createElement("optgroup");
  optgroup.setAttribute("id", "opt-group");
  for (let i in data.rates) {
    const option = document.createElement("option");
    option.innerText = i;
    option.setAttribute("id", i);
    option.setAttribute("value", toNum(data.rates[i]));
    optgroup.append(option);
    place.append(optgroup);
  }
}

appendOption(fromEle);
appendOption(toEle);

function createList(array) {
  let rowSpacer = document.querySelector("#rowSpacer");
  if (rowSpacer) rowSpacer.remove();

  let tr = document.createElement("tr");

  array.map((el) => {
    let td = document.createElement("td");
    let text = document.createTextNode(el);
    td.append(text);
    tr.append(td);
    tbody.append(tr);
  });
}

function store() {
  localStorage.setItem("record", tbody.innerHTML);
}

document.querySelector("#input-section").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get State
  let input = inputEle.value;
  let from = fromEle.value;
  let to = toEle.value;

  //process state
  let fromDisplay = input + " " + fromEle[fromEle.selectedIndex].innerText;
  let toDisplay = toEle[toEle.selectedIndex].innerText;
  let first = input * from;
  let final = first / to;
  let result = final.toFixed(2);
  let date = new Date().toLocaleString();
  let arr = [date, fromDisplay, toDisplay, result + " " + toDisplay];

  // set state
  resultEle.innerHTML = result;
  inputEle.value = "";
  fromEle.value = "";
  toEle.value = "1";
  inputEle.focus = true;

  createList(arr);
  store();
});

(function () {
  if (localStorage.getItem("record")) {
    tbody.innerHTML = localStorage.getItem("record");
  } else {
    tbody.innerHTML = `<tr id="rowSpacer"><td colspan = 4>There is nothing.</td></tr>`;
  }
})();

function changeMode() {
  document.querySelector("body").classList.toggle("night-mode");
  document.querySelector("#mode-icon").classList.toggle("fa-sun");
}
