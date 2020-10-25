/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// Startup Scripts
$(document).ready(function()
{
	$('.carousel').css('height', ($(window).height() - $('header').outerHeight()) + 'px'); // Set carousel to fill page height

	$('#scroll-carousel').click(function()
	{
		$('html,body').animate({scrollTop: $("#carousel-bloc").height()}, 'slow');
	});
});


// Window resize
$(window).resize(function()
{
	$('.carousel').css('height', ($(window).height() - $('header').outerHeight()) + 'px'); // Refresh carousel height
});

// Back To Top btn

$(function() {

  var $btn = $('#btnTop');
  var $home = $('#topSection');
  var startpoint = $home.scrollTop() + $home.height();

  $(window).on('scroll', function() {
    if($(window).scrollTop() > startpoint) {
      $btn.show();
    } else {
      $btn.hide();
    }
  });
});
