$(function () {
  $("#States").multiselect({
    columns: 1,
    placeholder: "Select a state",
    search: true,
    searchOptions: {
      default: "Type to search states",
    },
  });

  $("#Countries").multiselect({
    columns: 1,
    placeholder: "Select a country",
    search: true,
    searchOptions: {
      default: "Type to search countries",
    },
  });

  $("#Industries").multiselect({
    columns: 1,
    placeholder: "Select an industry",
    search: true,
    searchOptions: {
      default: "Type to search industries",
    },
  });
});
