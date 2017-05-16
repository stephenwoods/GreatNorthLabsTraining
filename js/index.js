// This wraps all of my code in what's called a closure, which encapsulates these variables inside this file's scope.
// (function() {
//   function addListeners() {
//     document.querySelector('#nameForm').addEventListener('submit', function(event) {
//       event.preventDefault();
//       var name = event.currentTarget.nameInput.value;
//       var node = document.createElement("LI");
//       var textNode = document.createTextNode(name);
//       node.appendChild(textNode);
//       document.querySelector('#dogNames').appendChild(node);
//       event.currentTarget.nameInput.value = '';
//     });
//   }
//
//   // When stuff is loaded on screen...
//   document.addEventListener("DOMContentLoaded", function(event) {
//     // Call this function.
//     addListeners();
//   });
//
// })();

$(document).ready(function() {
  console.log($('#nameForm'));
  $('#nameForm').submit(function(e) {
    e.preventDefault();
    $('#dogNames').append('<li>' + escape(e.currentTarget.nameInput.value) + '</li>');
    e.currentTarget.nameInput.value = '';
  });
});
