var Webflow = Webflow || [];
var current_page = 1;

/* #region Form fields */
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
var countries = $("#Countries");
var industries = $("#Industries");

/* #endregion */

Webflow.push(function () {
  var l = $("#flowbaseSlider .w-slider-arrow-left");
  var r = $("#flowbaseSlider .w-slider-arrow-right");

  $("#flowbaseSlider")
    .on("click", ".back-button-slide", function () {
      //Validate fields

      l.trigger("tap");
    })
    .on("click", ".next-button-slide", function () {
      r.trigger("tap");
    });
});

/****** Form Validation ******/

/* #region Render Order Detail */

/* Step 1 */
headline.change(function () {
  $("#RenderHeadline").text($(this).val());
});

subheadline.change(function () {
  $("#RenderSubheadline").text($(this).val());
});

bodypress.change(function () {
  $("#RenderBodyPress").text($(this).val());
});

source.change(function () {
  $("#RenderSource").text($(this).val());
});

mediacontact.change(function () {
  $("#RenderMediaContact").text($(this).val());
});

/* Step 2 */

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

/* Step 3 */

date_dist.change(function () {
  $("#RenderDateDist").text($(this).val());
});

countries.change(function () {
  let list_d = "";

  $(this)
    .val()
    .forEach((d, i) => {
      list_d = i == 0 ? d : list_d + ", " + d;
    });

  $("#RenderCountries").text(list_d);
});

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
