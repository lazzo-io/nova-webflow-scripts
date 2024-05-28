  $('#States').ready(function() {
    $("#States").multiselect({
      columns: 1,
      placeholder: "Select a wire circuit",
      search: true,
      searchOptions: {
        default: "Type to search a wire",
      },
    });
  });

  // $("#Countries").multiselect({
  //   columns: 1,
  //   placeholder: "Select a country",
  //   search: true,
  //   searchOptions: {
  //     default: "Type to search countries",
  //   },
  // });

  $('#Industries').ready(function() {
    $("#Industries").multiselect({
      columns: 1,
      placeholder: "Select trades",
      search: true,
      searchOptions: {
        default: "Type to search a trade",
      },
    });
  });