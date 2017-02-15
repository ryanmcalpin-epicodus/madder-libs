$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
    var adjectiveInput =
    $("input#adjective").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);
    $(".adjective").text(adjectiveInput);

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
