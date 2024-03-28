const TIER_1_PRICE = 397;
const TIER_2_PRICE = 497;
const TIER_3_PRICE = 697;

const TIER_1_BASE_WORDS = 500;
const TIER_2_BASE_WORDS = 600;
const TIER_3_BASE_WORDS = 800;

const TIER_1_BASE_SELECTS = 1;
const TIER_2_BASE_SELECTS = 2;
const TIER_3_BASE_SELECTS = 4;

const BASE_PRICE = 397;
const BASE_WORDS = 500;
const BASE_SELECTS = 3;
const EXTRA_ONEHND_WORDS = 147;
const EXTRA_ONE_SELECT = 147;

const MAX_EXTRA_SELECT = 5;

const EXTRA_SAME_DAY = 150;

var timer;

const tiers_cal = $('input[name="Tiers"]');

const area = document.getElementById("BodyPress");
const states_cal = $("#States");
const industries_cal = $("#Industries");

const date_dist_cal = $("#DateDist");

document.getElementById("FORMID").value = getUID();

tiers_cal.change(function () {
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

date_dist_cal.change(function () {
  clearTimeout(timer);

  timer = setTimeout(() => {
    calculatePrice();
  }, 500);
});

function calculatePrice() {
  let total = BASE_PRICE;
  let current_base_words = BASE_WORDS;

  let extra_words = 0;
  let extra_selects = 0;

  let tier = $('input[name="Tiers"]:checked').val();
  
  if(tier === "Tier1") { 
    total = TIER_1_PRICE;
    current_base_words = TIER_1_BASE_WORDS;

    document.getElementById("base-total-words").innerText = TIER_1_BASE_WORDS;
  }

  if(tier === "Tier2") {
    total = TIER_2_PRICE;
    current_base_words = TIER_2_BASE_WORDS;

    document.getElementById("base-total-words").innerText = TIER_2_BASE_WORDS;
  }

  if(tier === "Tier3") {
    total = TIER_3_PRICE;
    current_base_words = TIER_3_BASE_WORDS;

    document.getElementById("base-total-words").innerText = TIER_3_BASE_WORDS;
  }

  let word_counter = wordCounter();

  // Calculate total words
  if (word_counter > current_base_words) {
    let word_counter_near = Math.ceil(word_counter / 100) * 100;
    let extra_100_words = (word_counter_near - current_base_words) / 100;

    extra_words = extra_100_words * EXTRA_ONEHND_WORDS;

    // Update texts
    document.getElementById("calculator-total-words").innerText = word_counter_near;

    // Update Stripe fields
    document.getElementById("StripeExtraHundreds").value = extra_100_words;

    // Update texts
    document.getElementById("calculator-extra-words").innerText = word_counter - current_base_words;
  } else {
    document.getElementById("calculator-total-words").innerText = current_base_words;

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
    let extra_selectors = 0;

    if(tier === "Tier1") extra_selectors = state_counter + industry_counter > TIER_1_BASE_SELECTS ? state_counter + industry_counter - TIER_1_BASE_SELECTS : 0;
    if(tier === "Tier2") extra_selectors = state_counter + industry_counter > TIER_2_BASE_SELECTS ? state_counter + industry_counter - TIER_2_BASE_SELECTS : 0;
    if(tier === "Tier3") extra_selectors = state_counter + industry_counter > TIER_3_BASE_SELECTS ? state_counter + industry_counter - TIER_3_BASE_SELECTS : 0;

    extra_selects = extra_selectors * EXTRA_ONE_SELECT;

    // Update Stripe fields
    document.getElementById("StripeExtraStatesInds").value = extra_selectors;

     // Update texts
    document.getElementById("calculator-extra-states").innerText = extra_selectors;
  }

  // Update price
  total = total + extra_words + extra_selects;

   //Update same day price
  try{
    if(new Date(date_dist_cal.val()).getUTCDate() === new Date().getUTCDate()) {
      document.getElementById("StripeExtraSameDay").value = 1;
      
      total = total + EXTRA_SAME_DAY;
    }
    else {
      document.getElementById("StripeExtraSameDay").value = 0;
    }
  }
  catch(e){
    console.error("Error parsing date");
  }

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