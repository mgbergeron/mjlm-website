(function($) {
    "use strict"; // Start of use strict
    
    $('#welcomeModal').modal('show');

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);


    $("button#send").click(function() {
      var sendgridjs_url      = "https://mjlm-mail.herokuapp.com/send";
      var sendgridjs_to       = "mathieu@infosysteme.org";//$("input#to").val();
      var sendgridjs_subject  = "Test via app Heroku";//$("input#subject").val();
      var sendgridjs_html     = "<p>html of email here as a string</p>";

      var email = {
        to      : sendgridjs_to,
        subject : sendgridjs_subject,
        html    : sendgridjs_html
      }
      $.post(sendgridjs_url, email, function(response) {
        if (response.success) {
          // redirect somewhere or something. up to you. the email was sent successfully.
        } else {
          alert(response.error.message);
        }
      });

      return false;
    });

})(jQuery); // End of use strict

$(function () {
  $('[data-toggle="popover"]').popover({
	  trigger: 'hover'
  })
})

$("form#contact-form").submit(function() {
  var sendgridjs_url      = "https://mjlm-mail.herokuapp.com/send";
  var sendgridjs_to       = $("input#email").val();
  var sendgridjs_subject  = $("input#subject").val();
  var sendgridjs_html     = "<p>" + $("#message").val() + "</p>";

  var email = {
    to: sendgridjs_to,
    subject: sendgridjs_subject,
    html: sendgridjs_html
  };

  $.post(sendgridjs_url, email, function(response) {
    if (response.success) {
      // redirect somewhere or something. up to you. the email was sent successfully.
    } else {
      alert(response.error.message);
    }
  });

  return false;
});