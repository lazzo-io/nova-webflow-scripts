const BASE_PRICE = 397;

const TIER_1_PRICE = 397;
const TIER_2_PRICE = 450;
const TIER_3_PRICE = 480;

const BASE_WORDS = 600;
const BASE_SELECTS = 3;
const EXTRA_ONEHND_WORDS = 147;
const EXTRA_ONE_SELECT = 147;
var timer;

// const tiers = $('input[name="Tiers"]');

const area = document.getElementById("BodyPress");
const states_cal = $("#States");
const industries_cal = $("#Industries");

document.getElementById("FORMID").value = getUID();

tiers.change(function () {
  clearTimeout(timer);

  timer = setTimeout(() => {
    calculatePrice();
  }, 100);
});

$("#BodyPress").on("input", function() {
  clearTimeout(timer);

  timer = setTimeout(() => {
    calculatePrice();
  }, 500);
});

// area.addEventListener("input", function () {
//   clearTimeout(timer);

//   timer = setTimeout(() => {
//     calculatePrice();
//   }, 500);
// });

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

  let tier = $('input[name="Tiers"]:checked').val();
  
  if(tier === "Tier1") total = TIER_1_PRICE;
  if(tier === "Tier2") total = TIER_2_PRICE;
  if(tier === "Tier3") total = TIER_3_PRICE;

  let word_counter = wordCounter();

  // Calculate total words
  if (word_counter > BASE_WORDS) {
    let word_counter_near = Math.ceil(word_counter / 100) * 100;
    let extra_100_words = (word_counter_near - BASE_WORDS) / 100;

    extra_words = extra_100_words * EXTRA_ONEHND_WORDS;

    // Update texts
    document.getElementById("calculator-total-words").innerText = word_counter_near;

    // Update Stripe fields
    document.getElementById("StripeExtraHundreds").value = extra_100_words;

    // Update texts
    document.getElementById("calculator-extra-words").innerText = word_counter - BASE_WORDS;
  } else {
    document.getElementById("calculator-total-words").innerText = BASE_WORDS;

    // Update Stripe fields
    document.getElementById("StripeExtraHundreds").value = 0;

    // Update texts
    document.getElementById("calculator-extra-words").innerText = 0;
  }

  // Calculate States
  let state_counter = Number(selectCounter("#States"));

  // Calculate Industries
  let industry_counter = Number(selectCounter("#Industries"));

  if (state_counter || state_counter) {
    let extra_selectors = state_counter + industry_counter > 3 ? state_counter + industry_counter - BASE_SELECTS : 0;

    extra_selects = extra_selectors * EXTRA_ONE_SELECT;

    // Update Stripe fields
    document.getElementById("StripeExtraStatesInds").value = extra_selectors;

     // Update texts
    document.getElementById("calculator-extra-states").innerText = extra_selectors;
  }

  // Update price
  total = total + extra_words + extra_selects;

  document.getElementById("calculator-total-price").innerText = total;

  // Update texts
  document.getElementById("calculator-words").innerText = word_counter;
}

function wordCounter() {
  let _text = quill.getText();

  return _text ? _text.split(/[\s\n]/g).filter(Boolean).length : 0;
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

function getUID(){
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  const d = new Date();
  
  let out = '';
  let dFormat = `${d.getFullYear().toString().substring(3,4)}${((d.getMonth() + 10) * 31) + d.getDate()}`;

  for(var i=0, clen=chars.length; i<4; i++){
     out += chars.substr(0|Math.random() * clen, 1);
  }

  return (out + Number(dFormat).toString(36)).toUpperCase();
}