$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var inputs = ["person1", "person2", "animal", "exclamation", "verb", "noun", "adjective"];

    // var person1 = $("input#person1").val();
    // var person2 = $("input#person2").val();
    // var animal= $("input#animal").val();
    // var exclamation = $("input#exclamation").val();
    // var verb = $("input#verb").val();
    // var noun = $("input#noun").val();
    // var adjective =
    // $("input#adjective").val();


    for (var index = 0; index < inputs.length; index +=1) {
      var tag = inputs[index];
      var userText = $("#" + tag).val();
      $("." + tag).text(userText);
    }

    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);
    // $(".adjective").text(adjectiveInput);

    $("#story").show();

    event.preventDefault();
  });

  $("#formLetter").submit(function(event) {
    var userNameInput= $("input#userName").val();

    $(".userName").text(userNameInput);
    $("#letter").show();

    event.preventDefault();
  });

  $("#formUpperCase").submit(function(event) {
    var UpperCaseInput= $("input#UpperCase").val();

    $(".UpperCase").text(UpperCaseInput.toUpperCase());

    $("#UpperCaseName").show();

    event.preventDefault();
  });
});
