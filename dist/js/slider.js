var Webflow = Webflow || [];
var page = 1;

/* #region Form fields */
var tiers = $('input[name="Tiers"]');

var headline = $("#Headline");
var subheadline = $("#Subheadline");
var bodypress = $("#BodyPress");
var source = $("#Source");
var mediacontact = $("#MediaContact");

var caption_one = $("#Caption1");
var caption_two = $("#Caption2");
var image_one = $("input#ImageOne");
var image_two = $("input#ImageTwo");
var youtube_url = $("#YoutubeURL");

var date_dist = $("#DateDist");
var states = $("#States");
// var countries = $("#Countries");
var industries = $("#Industries");

var catalog_states = [{
    "v": "10010321",
    "t": "Major U.S. Markets"
  
}];
var catalog_industries = [{
  t: "Entertainment-Nashville",
  v: "2"
}, {
  t: "Entertainment-Minneapolis",
  v: "3"
}, {
  t: "Entertainment-Miami",
  v: "4"
}, {
  t: "Entertainment-Los Angeles",
  v: "5"
}, {
  t: "Entertainment-Houston",
  v: "7"
}, {
  t: "Entertainment-NYC",
  v: "8"
}, {
  t: "Entertainment-Hartford",
  v: "9"
}, {
  t: "Entertainment-DC",
  v: "13"
}, {
  t: "Entertainment-Dallas",
  v: "14"
}, {
  t: "Entertainment-Cleveland",
  v: "15"
}, {
  t: "Entertainment-Detroit",
  v: "16"
}, {
  t: "Entertainment-Chicago",
  v: "17"
}, {
  t: "Entertainment-Orlando",
  v: "18"
}, {
  t: "Entertainment-Phoenix",
  v: "19"
}, {
  t: "Entertainment-Tampa",
  v: "22"
}, {
  t: "Entertainment-St. Louis",
  v: "23"
}, {
  t: "Entertainment-Seattle",
  v: "24"
}, {
  t: "Entertainment-San Francis",
  v: "25"
}, {
  t: "Entertainment-Philadelphi",
  v: "26"
}, {
  t: "Entertainment-San Diego",
  v: "27"
}, {
  t: "Entertainment-Raleigh",
  v: "28"
}, {
  t: "Entertainment-Portland",
  v: "29"
}, {
  t: "Finance-FinancialMagazine",
  v: "32"
}, {
  t: "Entertainment-Sacremento",
  v: "34"
}, {
  t: "Telecom_Networkg_Wireless",
  v: "35"
}, {
  t: "Entertainment-Charlotte",
  v: "36"
}, {
  t: "Entertainment-Baltimore",
  v: "37"
}, {
  t: "Entertainment-Boston",
  v: "53"
}, {
  t: "Entertainment-Atlanta",
  v: "56"
}, {
  t: "Biotechnology",
  v: "62"
}, {
  t: "Food-Restaurants",
  v: "71"
}, {
  t: "Education-General",
  v: "73"
}, {
  t: "Travel-Ecotourism",
  v: "77"
}, {
  t: "Arts - Classical Music",
  v: "81"
}, {
  t: "Wireless Communications",
  v: "88"
}, {
  t: "Building&amp;Construction",
  v: "92"
}, {
  t: "Environment_Conservation",
  v: "93"
}, {
  t: "Food-Dairy",
  v: "97"
}, {
  t: "Agriculture-ForestProduct",
  v: "100"
}, {
  t: "Software",
  v: "103"
}, {
  t: "Energy-Power Generation",
  v: "108"
}, {
  t: "Aviation-Airline&amp;Airport",
  v: "109"
}, {
  t: "Health-Ophthalmology&amp;Opti",
  v: "111"
}, {
  t: "Packaging",
  v: "112"
}, {
  t: "Lifestyle-Parenting",
  v: "113"
}, {
  t: "Pets",
  v: "114"
}, {
  t: "Paper-Pulp Industry",
  v: "115"
}, {
  t: "Entertainment-Music",
  v: "116"
}, {
  t: "Photography",
  v: "117"
}, {
  t: "Printing-Graphics Design",
  v: "119"
}, {
  t: "Transportation-Trains",
  v: "121"
}, {
  t: "Real Estate-Residential",
  v: "122"
}, {
  t: "Plastics_Rubber",
  v: "124"
}, {
  t: "Retail &amp; Dept. Stores",
  v: "128"
}, {
  t: "Health-Pharmaceuticals",
  v: "129"
}, {
  t: "Engineering",
  v: "130"
}, {
  t: "Import_Export_Trade",
  v: "131"
}, {
  t: "Insurance",
  v: "136"
}, {
  t: "Legal",
  v: "138"
}, {
  t: "Lifestyle-Men's Magazines",
  v: "139"
}, {
  t: "Government-Military",
  v: "141"
}, {
  t: "Publishing",
  v: "144"
}, {
  t: "Government-Armed Forces",
  v: "159"
}, {
  t: "Lifestyle-Teen",
  v: "171"
}, {
  t: "Health-Dailies",
  v: "184"
}, {
  t: "Travel-Luxury",
  v: "192"
}, {
  t: "Homeland Sec - Congress",
  v: "199"
}, {
  t: "Sports-Tennis",
  v: "211"
}, {
  t: "Home-Home Improvement",
  v: "214"
}, {
  t: "Transportation",
  v: "230"
}, {
  t: "Travel-Car&amp;MotorcycleTour",
  v: "231"
}, {
  t: "Arts-Theatre-Opera",
  v: "234"
}, {
  t: "Human Resources",
  v: "252"
}, {
  t: "Arts-Dance",
  v: "253"
}, {
  t: "Arts-General",
  v: "254"
}, {
  t: "Health-Diabetes",
  v: "289"
}, {
  t: "Beverage",
  v: "290"
}, {
  t: "Food-Baking",
  v: "291"
}, {
  t: "Energy-Ethanol_Biodiesal",
  v: "294"
}, {
  t: "Ceramics_Glassware",
  v: "296"
}, {
  t: "Lifestyle-Women's Magazin",
  v: "298"
}, {
  t: "Health-AIDS/HIV",
  v: "301"
}, {
  t: "Religion-Christianity",
  v: "303"
}, {
  t: "Broadcasting Industry",
  v: "304"
}, {
  t: "Sports-Cycling",
  v: "308"
}, {
  t: "Asian Interests",
  v: "310"
}, {
  t: "Beverage - Non-Alcoholic",
  v: "316"
}, {
  t: "Health-MedicalClinclTrial",
  v: "317"
}, {
  t: "Health-Oncology",
  v: "326"
}, {
  t: "Technology-Satellite Tech",
  v: "335"
}, {
  t: "Business-CorpMeetingPlang",
  v: "338"
}, {
  t: "Transportation-AirCrgoFr8",
  v: "342"
}, {
  t: "health-Nutrition",
  v: "343"
}, {
  t: "Sports-Football",
  v: "345"
}, {
  t: "Chemicals",
  v: "346"
}, {
  t: "Books and Literature",
  v: "369"
}, {
  t: "Travel",
  v: "391"
}, {
  t: "Photonics-Optics",
  v: "393"
}, {
  t: "Office Furniture",
  v: "396"
}, {
  t: "Fashion-Beauty/Brbr/Csmtc",
  v: "434"
}, {
  t: "Health-Genomics",
  v: "458"
}, {
  t: "Government - Congress",
  v: "459"
}, {
  t: "Finance-Taxes",
  v: "460"
}, {
  t: "MunicipalGov/Law/Fire/PD",
  v: "461"
}, {
  t: "Advertising&amp;Marketing",
  v: "485"
}, {
  t: "Architecture",
  v: "486"
}, {
  t: "Computers-Storage",
  v: "509"
}, {
  t: "Computers-Programming",
  v: "510"
}, {
  t: "Computers-Mainframes",
  v: "511"
}, {
  t: "Computers-Infrastructure",
  v: "512"
}, {
  t: "Computers - Hardware",
  v: "513"
}, {
  t: "Lifestyle-Gay &amp; Lesbian",
  v: "515"
}, {
  t: "Maritime_Marine",
  v: "522"
}, {
  t: "Computers-Software",
  v: "525"
}, {
  t: "Manufacturing",
  v: "526"
}, {
  t: "Health-Cardiology",
  v: "532"
}, {
  t: "Wireless Computing",
  v: "543"
}, {
  t: "Health-Radiology/X-Ray",
  v: "558"
}, {
  t: "Business-Hospitality",
  v: "562"
}, {
  t: "Collectibles",
  v: "565"
}, {
  t: "Home Design-Decorating",
  v: "568"
}, {
  t: "Sports-Fishing_Outdoors",
  v: "569"
}, {
  t: "Gardening",
  v: "570"
}, {
  t: "Health-Orthopedics",
  v: "571"
}, {
  t: "Health-Neurology",
  v: "572"
}, {
  t: "Auto-Motorcycle_ATVs",
  v: "573"
}, {
  t: "TV Talk Shows",
  v: "577"
}, {
  t: "Business-Small Business",
  v: "578"
}, {
  t: "Sports-Baseball",
  v: "629"
}, {
  t: "Health-Psychology",
  v: "645"
}, {
  t: "Finance-Accounting",
  v: "648"
}, {
  t: "Government IT",
  v: "728"
}, {
  t: "Travel-Business",
  v: "746"
}, {
  t: "Travel-AAA",
  v: "748"
}, {
  t: "Travel-Inflight Mags",
  v: "749"
}, {
  t: "Travel-Hotel Motel",
  v: "750"
}, {
  t: "Auto-Tires",
  v: "759"
}, {
  t: "Aviation-Dailies &amp; Online",
  v: "761"
}, {
  t: "Travel-RV/Motoring",
  v: "766"
}, {
  t: "Finance-Credit/DebitCards",
  v: "773"
}, {
  t: "Environment",
  v: "779"
}, {
  t: "Auto-Newspapers",
  v: "780"
}, {
  t: "Excelerate Energy",
  v: "781"
}, {
  t: "Auto-General &amp; Consumer",
  v: "784"
}, {
  t: "Sports-Surfing",
  v: "787"
}, {
  t: "Auto-European Cars",
  v: "788"
}, {
  t: "Auto-Racing",
  v: "789"
}, {
  t: "Auto-Electric, Hybrid",
  v: "790"
}, {
  t: "Auto-Classics, Restore",
  v: "791"
}, {
  t: "Auto-Trucks,SUVs,ATVs",
  v: "792"
}, {
  t: "Auto-Aftermarket",
  v: "793"
}, {
  t: "Auto-American Cars",
  v: "795"
}, {
  t: "Agriculture-Crops",
  v: "797"
}, {
  t: "Agriculture-Livestock",
  v: "798"
}, {
  t: "Aerospace",
  v: "803"
}, {
  t: "Food-FoodService/Catering",
  v: "804"
}, {
  t: "Entertainment-TV",
  v: "808"
}, {
  t: "Entertainment-Theatre",
  v: "809"
}, {
  t: "Entertainment-MoviesVideo",
  v: "810"
}, {
  t: "Entertainment-General-Dly",
  v: "811"
}, {
  t: "Entertainment",
  v: "817"
}, {
  t: "Animation",
  v: "818"
}, {
  t: "Entertainment-Family",
  v: "819"
}, {
  t: "NonProfit-Philanthropy",
  v: "835"
}, {
  t: "Sports-Skiing_Snowboardin",
  v: "841"
}, {
  t: "Agriculture-Forestry",
  v: "848"
}, {
  t: "Health-Hospitals",
  v: "850"
}, {
  t: "Health-Managed Care",
  v: "851"
}, {
  t: "Electronics-not computers",
  v: "860"
}, {
  t: "Finance-Economic Dvlpmnt",
  v: "863"
}, {
  t: "Supply Chain &amp; Logistics",
  v: "864"
}, {
  t: "Energy-dailies,bureaus",
  v: "865"
}, {
  t: "Industrial",
  v: "867"
}, {
  t: "Mining &amp; Metals",
  v: "880"
}, {
  t: "Pop Culture",
  v: "924"
}, {
  t: "Furniture",
  v: "925"
}, {
  t: "Sports-Boxing",
  v: "926"
}, {
  t: "Toys",
  v: "939"
}, {
  t: "Finance-Mortgage",
  v: "952"
}, {
  t: "COLLEGE PAPERS",
  v: "953"
}, {
  t: "Law - Corrections",
  v: "954"
}, {
  t: "Bridal_Weddings",
  v: "955"
}, {
  t: "Fashion (not beauty care)",
  v: "956"
}, {
  t: "Finance-General",
  v: "957"
}, {
  t: "Beverage-Alcoholic",
  v: "958"
}, {
  t: "Finance-Transportation",
  v: "959"
}, {
  t: "Energy-Oil&amp;Gas",
  v: "960"
}, {
  t: "Boating-Yachting-Sailing",
  v: "961"
}, {
  t: "Sports-Hunting",
  v: "968"
}, {
  t: "Finance-Telecom Industry",
  v: "977"
}, {
  t: "Finance-Retail Industry",
  v: "978"
}, {
  t: "Finance-Corporate Finance",
  v: "981"
}, {
  t: "Finance-Commodities",
  v: "982"
}, {
  t: "Finance-Bonds",
  v: "984"
}, {
  t: "Finance-Fundraising",
  v: "986"
}, {
  t: "Finance-Banking",
  v: "988"
}, {
  t: "Finance-Bankruptcy",
  v: "994"
}, {
  t: "Finance-Mutual Funds",
  v: "995"
}, {
  t: "Finance-Personal Finance",
  v: "996"
}, {
  t: "Finance-Real Estate Indus",
  v: "998"
}, {
  t: "Finance-Energy Industry",
  v: "1001"
}, {
  t: "Finance-Biotech Industry",
  v: "1003"
}, {
  t: "Finance-TV_Radio",
  v: "1010"
}, {
  t: "Finance-Stocks",
  v: "1011"
}, {
  t: "Business-Selling&amp;Sales",
  v: "1012"
}, {
  t: "Health-Surgical",
  v: "1034"
}, {
  t: "Health-Software",
  v: "1047"
}, {
  t: "Health-General",
  v: "1048"
}, {
  t: "Sports-Golf",
  v: "1075"
}, {
  t: "Education-Colleg&amp;Univ",
  v: "1085"
}, {
  t: "Technology-Semiconductors",
  v: "1093"
}, {
  t: "Steel",
  v: "1099"
}, {
  t: "Identity Theft",
  v: "1108"
}, {
  t: "Environment_top dailies",
  v: "1122"
}, {
  t: "Spanish-New York",
  v: "1130"
}, {
  t: "Homeland Sec - Website",
  v: "1137"
}, {
  t: "Energy-Renewable",
  v: "1140"
}, {
  t: "Collectibles-Coins",
  v: "1153"
}, {
  t: "Sports-Soccer",
  v: "1156"
}, {
  t: "Water&amp;Sanitation",
  v: "1179"
}, {
  t: "Purchasing",
  v: "1184"
}, {
  t: "Urban Planning &amp; Development",
  v: "1186"
}, {
  t: "Lifestyle-Yoga",
  v: "1218"
}, {
  t: "Sports-Wrestling",
  v: "1241"
}, {
  t: "Ethnic-Jewish",
  v: "1243"
}, {
  t: "Health-Dermatology",
  v: "1249"
}, {
  t: "Plumbing",
  v: "1250"
}, {
  t: "HVAC-Heating,Ventilating,AirConditi",
  v: "1251"
}, {
  t: "Office-Equipment &amp; Supplies",
  v: "1253"
}, {
  t: "Environment-Wildlife Conservation",
  v: "1254"
}, {
  t: "Scientific Computing &amp; Lab Instrume",
  v: "1256"
}, {
  t: "Audio Video_Tech Equip",
  v: "1257"
}, {
  t: "Arts-Museums &amp; Galleries",
  v: "1264"
}, {
  t: "Health&amp;Safety",
  v: "1272"
}, {
  t: "Entertainment-Pittsburgh",
  v: "1273"
}, {
  t: "Business-Franchises",
  v: "1275"
}, {
  t: "Environment-OrganicPrduct",
  v: "1276"
}, {
  t: "Entertainment-Music-Modern",
  v: "1278"
}, {
  t: "Entertainment-Music-Country",
  v: "1279"
}, {
  t: "Home Security &amp; Access Control",
  v: "1281"
}, {
  t: "Law Enforcement",
  v: "1283"
}, {
  t: "Homeland Security",
  v: "1285"
}, {
  t: "Lifestyle",
  v: "1295"
}, {
  t: "Environment-Organic Foods",
  v: "1296"
}, {
  t: "Animals-Horses",
  v: "1298"
}, {
  t: "Sports-Horse Racing",
  v: "1300"
}, {
  t: "Sports-Equestrian",
  v: "1304"
}, {
  t: "Business-VentureCap",
  v: "1306"
}, {
  t: "Computer &amp; Video Games",
  v: "1310"
}, {
  t: "Textiles &amp; Fibers",
  v: "1312"
}, {
  t: "Health-Medical Research",
  v: "1315"
}, {
  t: "Childcare &amp; Development",
  v: "1317"
}, {
  t: "Children's Interest",
  v: "1318"
}, {
  t: "Auto-Repairs &amp; Service",
  v: "1320"
}, {
  t: "Consumer Electronics",
  v: "1321"
}, {
  t: "Digital Media",
  v: "1350"
}, {
  t: "Technology (General)",
  v: "1353"
}, {
  t: "Finance-Investments",
  v: "1357"
}, {
  t: "Health-Organ Transplant",
  v: "1359"
}, {
  t: "Internet_Only",
  v: "1367"
}, {
  t: "Environment-Recycling",
  v: "1369"
}, {
  t: "Political TV",
  v: "1371"
}, {
  t: "Religion",
  v: "1373"
}, {
  t: "Sports-Basketball",
  v: "1374"
}, {
  t: "Energy-Solar Energy",
  v: "1378"
}, {
  t: "Government-Politics",
  v: "1387"
}, {
  t: "Technology-Robotics",
  v: "1397"
}, {
  t: "Waste Mgmt-Pollutn Ctrl",
  v: "1409"
}, {
  t: "Real Estate-Commercial",
  v: "1412"
}, {
  t: "Entertainment-Hollywood",
  v: "1413"
}, {
  t: "Entertainment-Radio",
  v: "1414"
}, {
  t: "Education-Business Schools",
  v: "1415"
}, {
  t: "Education-Teachers",
  v: "1417"
}, {
  t: "Education-Technology",
  v: "1418"
}, {
  t: "Finance-Food Industry",
  v: "1420"
}, {
  t: "Finance-Entertainment Industry",
  v: "1423"
}, {
  t: "Fashion-Apparel",
  v: "1424"
}, {
  t: "Finance-Environment Ind",
  v: "1425"
}, {
  t: "Finance-Analysis",
  v: "1426"
}, {
  t: "Health-Dental",
  v: "1427"
}, {
  t: "Religion-Judaism",
  v: "1428"
}, {
  t: "Law Enforcement&amp;Emergency Services",
  v: "1429"
}, {
  t: "Finance-Equities",
  v: "1430"
}, {
  t: "Energy-Clean Energy",
  v: "1433"
}, {
  t: "Environment-GreenBuilding",
  v: "1434"
}, {
  t: "Lifestyle-Affluent",
  v: "1441"
}, {
  t: "Health-Chiropractic",
  v: "1442"
}, {
  t: "Energy-Coal",
  v: "1449"
}, {
  t: "Finance-Emerging Markets",
  v: "1451"
}, {
  t: "Ethnic-Arab American",
  v: "1452"
}, {
  t: "Business-Entrepreneurism",
  v: "1453"
}, {
  t: "Business-Mergers&amp;Acquisitions",
  v: "1454"
}, {
  t: "Business-Minority/Women-based",
  v: "1455"
}, {
  t: "Business-Intl Business",
  v: "1456"
}, {
  t: "Energy-Electricity",
  v: "1458"
}, {
  t: "Energy-Conservation",
  v: "1465"
}, {
  t: "Energy-Natural Gas",
  v: "1466"
}, {
  t: "Welding",
  v: "1473"
}, {
  t: "Sports-General-Print,Web,&amp;Broadcast",
  v: "1484"
}, {
  t: "Health-Addiction&amp;Recovery",
  v: "1485"
}, {
  t: "Antiques",
  v: "1511"
}, {
  t: "Arts-Fine Arts (Visual)",
  v: "1512"
}, {
  t: "Homeland Security",
  v: "1513"
}, {
  t: "Agriculture_General",
  v: "1515"
}, {
  t: "Shipping &amp; Freighting",
  v: "1532"
}, {
  t: "Auto-Trucking",
  v: "1533"
}, {
  t: "Health-Pediatrics",
  v: "1534"
}, {
  t: "Ethnic-Hispanic Top 10",
  v: "1584"
}, {
  t: "Government-Defense",
  v: "1585"
}, {
  t: "Educational-Science",
  v: "1622"
}, {
  t: "Class Action",
  v: "1633"
}, {
  t: "Technology - Mobile Apps",
  v: "1640"
}, {
  t: "Business Intelligence",
  v: "1643"
}, {
  t: "Technology - Cloud Computing",
  v: "1644"
}, {
  t: "Health-Medical_Devices",
  v: "1645"
}, {
  t: "Gaming-Gambling",
  v: "1647"
}, {
  t: "Ethnic-AfricanAmerican",
  v: "1648"
}, {
  t: "Veterinary",
  v: "1649"
}, {
  t: "Water Conservation",
  v: "1650"
}, {
  t: "Finance-Credit Unions",
  v: "1652"
}, {
  t: "Grounds-Landscaping",
  v: "1655"
}, {
  t: "Printing_Graphic Arts",
  v: "1668"
}, {
  t: "Public Affairs-USA",
  v: "1671"
}, {
  t: "Sports-Running",
  v: "1677"
}, {
  t: "Sports-Ice Hockey",
  v: "1681"
}, {
  t: "Public Relations",
  v: "1682"
}, {
  t: "Media",
  v: "1683"
}, {
  t: "Health-Urology",
  v: "1685"
}, {
  t: "Technology - Mobile",
  v: "1694"
}, {
  t: "Health-Nursing",
  v: "1701"
}, {
  t: "Health-Healthcare Technology",
  v: "1735"
}, {
  t: "Food-Manufacture/Grocery",
  v: "1743"
}, {
  t: "Health-Podiatry",
  v: "1751"
}, {
  t: "Sports-PowerSports",
  v: "1764"
}, {
  t: "Technology-IT Security",
  v: "20738"
}, {
  t: "Health-Diagnostics",
  v: "20764"
}];

$("#DateDist").attr("type", "date");
$("#DateDist").attr("min", new Date().toISOString().split("T")[0]);

/* #endregion */

Webflow.push(function () {
  var l = $("#flowbaseSlider .w-slider-arrow-left");
  var r = $("#flowbaseSlider .w-slider-arrow-right");

  $("#flowbaseSlider")
    .on("click", ".back-button-slide", function () {
      if (page >= 1 && page < 6) {
        page = page - 1;

        l.trigger("tap");
      }

      $("#PRSlider").get(0).scrollIntoView({ behavior: "smooth" });
    })
    .on("click", ".next-button-slide", function () {
      let valid = false;

      let tiers_checked = $('input[name="Tiers"]:checked');

      // Validate fields in page 1
      if (page == 1 && tiers_checked.val()) {
        styleEmptys();
        valid = true;
      } else {
        styleEmptys();
      }

      // Validate fields in page 1
      if (page == 2 && headline.val() && bodypress.val() && source.val()) {
        styleEmptys();
        valid = true;
      } else {
        styleEmptys();
      }

      // Validate fields in page 2
      if (page == 3) {
        styleEmptys();
        valid = true;
      } else {
        styleEmptys();
      }

      // Validate fields in page 3
      if (page == 4 && date_dist.val() && states.val() && states.val().length > 0 && industries.val() && industries.val().length > 0) {
        styleEmptys();
        valid = true;
      } else {
        styleEmptys();
      }

      if (valid && page >= 1 && page < 6) {
        page = page + 1;

        r.trigger("tap");
      }

      $("#PRSlider").get(0).scrollIntoView({ behavior: "smooth" });
    });

  
  quill.on('text-change', function(delta, oldDelta, source) {
    $("#BodyPress").text(quill.root.innerHTML).trigger("input");
  
    $("#RenderBodyPress").html(quill.root.innerHTML);
  });
});

/****** Form Validation ******/

/* #region Render Order Detail */

/* Step 1 */
tiers.change(function () {
  $("#RenderTier").text($(this).val());
});

/* Step 2 */
headline.change(function () {
  $("#RenderHeadline").text($(this).val());
});

subheadline.change(function () {
  $("#RenderSubheadline").text($(this).val());
});

// bodypress.change(function () {
//   $("#RenderBodyPress").text($(this).val());
// });

source.change(function () {
  $("#RenderSource").text($(this).val());
});

// mediacontact.change(function () {
//   $("#RenderMediaContact").text($(this).val());
// });

/* Step 3 */

image_one.change(function () {
  if (image_one.val() !== "") {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#RenderImageOne").attr("src", e.target.result);
      $("#RenderImageOne").attr("srcset", e.target.result);
    };

    reader.readAsDataURL(image_one[0].files[0]);
  }
});

image_two.change(function () {
  if (image_two.val() !== "") {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#RenderImageTwo").attr("src", e.target.result);
      $("#RenderImageTwo").attr("srcset", e.target.result);
    };

    reader.readAsDataURL(image_two[0].files[0]);
  }
});

caption_one.change(function () {
  $("#RenderCaption1").text($(this).val());
});

caption_two.change(function () {
  $("#RenderCaption2").text($(this).val());
});

youtube_url.change(function () {
  if (youtube_url.val() !== "") {
    let regex_url = youtube_url.val().match(/^.*(youtu.be\/|v\/|embed\/|watch\?|youtube.com\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*).*/);

    let youtube_id = regex_url && regex_url[3] ? regex_url[3] : "";

    if (youtube_id) {
      $("#RenderYoutube ").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + youtube_id + '" frameborder="0" allowfullscreen=""></iframe>');
    } else {
      $("#RenderYoutube ").html('<div width="100%" height="100%">We only support Youtube videos, here is the URL you fill: <span style="font-weight: bold; color: #1399fc">' + youtube_url.val() + "</span>, if this URL is correct just continue please.</div>");
    }

    try {
    } catch (error) {
      console.error("Trying to render youtube video: ", youtube_url.val());

      $("#RenderYoutube ").html('<div width="100%" height="100%">We have some problems rendering your video, but here is the URL you fill: <span style="font-weight: bold; color: #1399fc">' + youtube_url.val() + "</span>, if this is correct just continue please.</div>");
    }
  }
});

/* Step 4 */

date_dist.change(function () {
  $("#RenderDateDist").text($(this).val());
});

// countries.change(function () {
//   let list_d = "";

//   $(this)
//     .val()
//     .forEach((d, i) => {
//       list_d = i == 0 ? d : list_d + ", " + d;
//     });

//   $("#RenderCountries").text(list_d);
// });

states.change(function () {
  let list_d = "";

  $(this)
    .val()
    .forEach((d, i) => {
      let foundItem = catalog_states.find((element) => element.v === d);
      
      if(foundItem && foundItem.t) {
        list_d = i == 0 ? foundItem.t : list_d + ", " + foundItem.t;
      }
    });

  $("#RenderStates").text(list_d);
});

industries.change(function () {
  let list_d = "";

  $(this)
    .val()
    .forEach((d, i) => {
      let foundItem = catalog_industries.find((element) => element.v === d);
      
      if(foundItem && foundItem.t) {
        list_d = i == 0 ? foundItem.t : list_d + ", " + foundItem.t;
      }
    });

  $("#RenderIndustries").text(list_d);
});

/* #endregion */

function styleEmptys() {
  switch (page) {
    case 1:
      !tiers_cal.val() ? tiers_cal.addClass("empty") : tiers_cal.removeClass("empty");
      break;

    case 2:
      !headline.val() ? headline.addClass("empty") : headline.removeClass("empty");
      //!subheadline.val() ? subheadline.addClass("empty") : subheadline.removeClass("empty");
      !bodypress.val() ? bodypress.addClass("empty") : bodypress.removeClass("empty");
      !source.val() ? source.addClass("empty") : source.removeClass("empty");
      // !mediacontact.val() ? mediacontact.addClass("empty") : mediacontact.removeClass("empty");
      break;

    case 3:
      // !caption_one.val() ? caption_one.addClass("empty") : caption_one.removeClass("empty");
      //!caption_two.val() ? caption_two.addClass("empty") : caption_two.removeClass("empty");
      // !image_one.val() ? $("#BoxImage1").addClass("empty") : $("#BoxImage1").removeClass("empty");
      //!image_two.val() ? $("#BoxImage2").addClass("empty") : $("#BoxImage2").removeClass("empty");
      //!youtube_url.val() ? youtube_url.addClass("empty") : youtube_url.removeClass("empty");

      break;

    case 4:
      !date_dist.val() ? date_dist.addClass("empty") : date_dist.removeClass("empty");
      states.val() && states.val().length > 0 ? $("#ms-list-1 > button").removeClass("empty") : $("#ms-list-1 > button").addClass("empty");
      industries.val() && industries.val().length > 0 ? $("#ms-list-2 > button").removeClass("empty") : $("#ms-list-2 > button").addClass("empty");

      break;
    default:
      break;
  }
}
