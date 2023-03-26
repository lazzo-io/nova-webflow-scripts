console.log("Nova counter is ON");

const BASE_PRICE = 397;
const BASE_WORDS = 600;
const BASE_SELECTS = 3;
const EXTRA_ONEHND_WORDS = 147;
const EXTRA_ONE_SELECT = 147;
var timer;

const area = document.getElementById("BodyPress");
const states_cal = $("#States");
const industries_cal = $("#Industries");

area.addEventListener("input", function () {
  clearTimeout(timer);

  timer = setTimeout(() => {
    calculatePrice();
  }, 500);
});

states_cal.change(function () {
  clearTimeout(timer);

  timer = setTimeout(() => {
    calculatePrice();
  }, 500);
});

industries_cal.change(function () {
  clearTimeout(timer);

  timer = setTimeout(() => {
    calculatePrice();
  }, 500);
});

function calculatePrice() {
  let total = BASE_PRICE;
  let extra_words = 0;
  let extra_selects = 0;

  let word_counter = wordCounter();

  // Calculate total words
  if (word_counter > BASE_WORDS) {
    let word_counter_near = Math.ceil(word_counter / 100) * 100;
    let extra_100_words = (word_counter_near - BASE_WORDS) / 100;

    extra_words = extra_100_words * EXTRA_ONEHND_WORDS;

    // Update texts
    document.getElementById("calculator-total-words").innerText = word_counter_near;
  } else {
    document.getElementById("calculator-total-words").innerText = 600;
  }

  // Calculate States
  let state_counter = Number(selectCounter("#States"));

  // Calculate Industries
  let industry_counter = Number(selectCounter("#Industries"));

  if (state_counter || state_counter) {
    let extra_selectors = state_counter + industry_counter > 3 ? state_counter + industry_counter - BASE_SELECTS : 0;

    extra_selects = extra_selectors * EXTRA_ONE_SELECT;
  }

  // Update price
  total = total + extra_words + extra_selects;

  document.getElementById("calculator-total-price").innerText = total;

  // Update texts
  document.getElementById("calculator-words").innerText = word_counter;
}

function wordCounter() {
  return area ? area.value.length : 0;
}

function selectCounter(selector) {
  let count = 0;

  $(selector)
    .val()
    .forEach((d) => {
      count = count + 1;
    });

  return count;
}
