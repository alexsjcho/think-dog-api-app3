"use strict";

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchGetDogButton();
});

function watchGetDogButton() {
  $("#get-dog").submit(e => {
    e.preventDefault();
    getDogImage();
  });
}

function getUserInput() {
  $("breed-type").submit(e => {
    e.preventDefault();
    let someBreed = $("#num-dog").val();
    getDogImage(getNumInput);
  });
}

function getDogImage() {
  fetch(`https://dog.ceo/api/breed/${getUserInput}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson.message))
    .catch(error => alert("Hmmm. Cannot find that breed of dog. Try again."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $(".results").append(`<img src="${responseJson.message}">`);
  $(".results").removeClass("hidden");
}
