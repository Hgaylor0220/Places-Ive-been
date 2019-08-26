// function PlacesList() {
//   this.places = [],
// }
//
// PlacesList.prototype.addPlace = function(place) {
//   this.places.push(contact);
// }

function Place(location, landmarks, year, notes) {
  this.location = location,
  this.landmarks = landmarks,
  this.year = year,
  this.notes = notes
}

var england = new Place("London, Bristol, and Guernsey", "Big Ben, Buckingham Palace, The London Eye", "May 2018", "This trip was a jolly good time!");

var newYork = new Place("New York City", " Central Park, World Trade Center, Statue of Liberty", "June 2019", "Lots of walking and using public transportation, bring your good shoes!");

var washingtonDC = new Place("Washington DC", "White House, Washington Monument, Smithsonian", "May 2019", "Lots of history, but very muggy!");

var italy = new Place("Como", "Lake Como, Bellagio", "May 2018", "Beautiful scenery, even better food and wine.")

var washington = new Place(" Carson City"," Fall Creek Falls, White Salmon", "August 2019", "Great white water activiteis including kayaking and rafting, must be skilled to stay alive. Great hikes if you wear the right shoes.")

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("#england").click(function() {
   console.log("im clicked!");
   $(".location").empty();
   $(".location").append(england.location);
   $(".landmarks").empty();
   $(".landmarks").append(england.landmarks);
   $(".year").empty();
   $(".year").append(england.year);
   $(".notes").empty();
   $(".notes").append(england.notes);
   $("#england-object").show();
 });
});
