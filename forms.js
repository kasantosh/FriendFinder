//Go to survey on click
$(document).ready(function() {
  $("#surveyform-submit").on("click", function(e) {
    e.preventDefault();
    var newPerson = {
      name: $("#name")
        .val()
        .trim(),
      photo: $("#photo")
        .val()
        .trim(),
      scores: [
        parseInt(
          $("#q1")
            .val()
            .trim()
        ),
        parseInt(
          $("#q2")
            .val()
            .trim()
        ),
        parseInt(
          $("#q3")
            .val()
            .trim()
        ),
        parseInt(
          $("#q4")
            .val()
            .trim()
        ),
        parseInt(
          $("#q5")
            .val()
            .trim()
        ),
        parseInt(
          $("#q6")
            .val()
            .trim()
        ),
        parseInt(
          $("#q7")
            .val()
            .trim()
        ),
        parseInt(
          $("#q8")
            .val()
            .trim()
        ),
        parseInt(
          $("#q9")
            .val()
            .trim()
        ),
        parseInt(
          $("#q10")
            .val()
            .trim()
        )
      ]
    };

    //console.log("in Submit");
    // console.log(newPerson);
    $.post("/api/friends", newPerson, function(data) {
      console.log(data);
      $("#modalname").text(data);
    });
  });
});
