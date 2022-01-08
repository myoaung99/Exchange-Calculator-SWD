const from = document.querySelector("#from");
const to = document.querySelector("#to");

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
  }
}

appendOption(from);
appendOption(to);
