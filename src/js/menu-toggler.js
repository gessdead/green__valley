$(document).ready(function(){
  $('#toggler').on('click', function(e){
    e.preventDefault();
    $('#hidden').slideToggle('slow');
  });
});