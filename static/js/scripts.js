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

})(jQuery); // End of use strict

$(function () {
  $('[data-toggle="popover"]').popover({
	  trigger: 'hover'
  })
})

$("form#contact-form").submit(function() {
  var sendgridjs_url      = "https://mjlm-mail.herokuapp.com/send";
  var sendgridjs_to       = "lise@majolime.com";
  var sendgridjs_subject  = "Courrier provenant du Web";
  var sendgridjs_html     = "<p></p><p>Adresse de l'expéditeur: <a href='mailto:" + $("input#email").val() + "'>" + $("input#email").val() + "</a></p><p>Nom: <strong>" + $("input#name").val() + "</strong></p><p></p><p>" + $("#message").val() + "</p>";

  var email = {
    to: sendgridjs_to,
    subject: sendgridjs_subject,
    html: sendgridjs_html
  };

  $.post(sendgridjs_url, email, function(response) {
    if (response.success) {
        var messageText = "<h4 class='alert-heading'>Message envoyé avec succès!</h4><p>Nous vous contacterons très bientôt, surveillez votre <strong>boîte de courriel</strong>.<br /><br /></p><hr /><p class='mb-0'>Merci d'avoir contacté la Ferme Majolimé.</p>";

        var alertBox = '<div class="alert alert-success alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
        $('#contact-form').find('.messages').html(alertBox);
        // empty the form
        $('#contact-form')[0].reset();

    } else {
        var messageText = "<h4 class='alert-heading'>Une erreur est survenue!</h4><p>" + response.error.message + "</p><hr /><p>Si le problème persiste, veuillez nous contacter à l'adresse <a href='mailto:lise@majolime.com'>lise@majolime.com</a></p>";

        var alertBox = '<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
        $('#contact-form').find('.messages').html(alertBox);
    }
  });

  return false;
});