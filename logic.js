"use strict";

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchGetDogPhoto();
});

function watchGetDogPhoto() {
  $("#get-photo").submit(e => {
    e.preventDefault();
    getDogImage();
  });
}

function getDogImage() {
  fetch("https://dog.ceo/api/breed/hound/images/random")
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson.message))
    .catch(error => alert("The dogs are alittle shy. Try again later."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $(".results").append(`<img src="${responseJson.message}">`);
  //display the results section
  $(".results").removeClass("hidden");
}
