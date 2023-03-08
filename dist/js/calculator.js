console.log("Nova counter is ON");

const BASE_PRICE = 397;
const BASE_WORDS = 600;
const EXTRA_ONEHND_WORDS = 147;
const EXTRA_INDUSTRY = 147;
var timer;

const area = document.getElementById("BodyPress");

area.addEventListener("input", function () {
  clearTimeout(timer);

  timer = setTimeout(() => {
    calculatePrice();
  }, 500);
});

function calculatePrice() {
  let total = BASE_PRICE;
  let extra_words = 0;

  let word_counter = wordCounter();

  // Calculate total
  if (word_counter > BASE_WORDS) {
    let word_counter_near = Math.ceil(word_counter / 100) * 100;
    let extra_100_words = (word_counter_near - BASE_WORDS) / 100;

    extra_words = extra_100_words * EXTRA_ONEHND_WORDS;

    // Update texts
    document.getElementById("calculator-total-words").innerText =
      word_counter_near;

    //Just Test
    console.log("Near : ", word_counter_near);
    console.log("Extra 100s : ", extra_100_words);
  } else {
    document.getElementById("calculator-total-words").innerText = 600;
  }

  // Update price
  total = total + extra_words;

  document.getElementById("calculator-total-price").innerText = total;

  // Update texts
  document.getElementById("calculator-words").innerText = word_counter;

  //Just Test
  console.log("Words : ", wordCounter());
}

function wordCounter() {
  return area ? area.value.length : 0;
}
