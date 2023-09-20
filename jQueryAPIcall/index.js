$("#make_call").bind("click", function() {
    $.ajax({
      url: "https://official-joke-api.appspot.com/random_joke",
      data: null,
      success: (response) => { 
        console.log(response); 
        $("#setup").text(response.setup); 
        $("#punchline").text(response.punchline);
    },
    });
  });