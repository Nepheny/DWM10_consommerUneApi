const apiKey = "RGAPI-3aca1937-a399-4daf-b813-4ad18e6f4a22"

$(document).ready(function() {
  if (localStorage.getItem('API') == null) {
    $.ajax({
      url: "",
      type: "GET",
      headers: {
        
      },
      success: function (response) {
        localStorage.setItem("API", JSON.stringify(response));
      }
    });
  }

  function dataParseKey(key) {
    const responseStorage = localStorage.getItem(key);
    return JSON.parse(responseStorage);
  }

  $('#a').on('click', function (e) {
    const response = dataParseKey('API');
    
  });
});