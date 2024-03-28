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
      if (page == 2 && headline.val() && subheadline.val() && bodypress.val() && source.val()) {
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

quill.on('text-change', function(delta, oldDelta, source) {
  $("#BodyPress").text(quill.root.innerHTML).trigger("input");

  $("#RenderBodyPress").html(quill.root.innerHTML);
});

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
      list_d = i == 0 ? d : list_d + ", " + d;
    });

  $("#RenderStates").text(list_d);
});

industries.change(function () {
  let list_d = "";

  $(this)
    .val()
    .forEach((d, i) => {
      list_d = i == 0 ? d : list_d + ", " + d;
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
      !subheadline.val() ? subheadline.addClass("empty") : subheadline.removeClass("empty");
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
