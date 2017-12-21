
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html lang="en">

	<jsp:include page="fragments/head.jsp" />

  <body>
  
	    <jsp:include page="fragments/navbar-dark.jsp" />

    <section>
    	<div class="container text-center mb-6">
      		<h1>Nous contacter</h1>
      	</div>
      	
	    <div class="container">
		    <div class="alert alert-warning mb-6" role="alert">
			  <h4 class="alert-heading">Veuillez prendre note que </h4>
			  	<blockquote class="blockquote">
					<p class="mb-0">Le formulaire de contact n'est présentement pas disponible. Veuillez SVP nous envoyer un <u>courriel</u> ou nous contacter <b><u>directement par téléphone</u></b>. Voir les informations plus ci-bas.</p>
					<br />
					<p class="mb-0">Merci de votre compréhension.</p>
					<footer class="blockquote-footer">La direction</footer>
				</blockquote>
			</div>
	
	      <!-- Content Row -->
	      <div class="row">
	        <!-- Map Column -->
	        <div class="col-lg-8 mb-4">
	          <!-- Embedded Google Map -->
	          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d706376.1975883436!2d-72.181805!3d46.244621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf87b4c2afef2ecd!2sFerme+Majolim%C3%A9!5e0!3m2!1sfr!2sca!4v1504488127770" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
	        </div>
	        <!-- Contact Details Column -->
	        <div class="col-lg-4 mb-4">
	          <h2>Informations</h2>
	          <p>
	            530 route 261
	            <br>Saint-Sylvère, Québec (Canada) G0Z 1H0
	            <br>
	          </p>
	          <p>
	            <abbr title="Téléphone">T</abbr>: 819-609-2129
	          </p>
	          <p>
	            <abbr title="Courriel">C</abbr>:
	            <a href="mailto:lise@majolime.com">lise@majolime.com
	            </a>
	          </p>
	          <p>
	            <abbr title="Heures d'ouverture">H</abbr>: Lundi au Samedi: Sur rendez-vous
	          </p>
	        </div>
	      </div>
	      <!-- /.row -->
	
		<!-- 
	      <div class="row">
	        <div class="col-lg-8 mb-4">
	          <h3>Envoyez-nous un message</h3>
	          <form name="sentMessage" id="contactForm" novalidate>
	            <div class="control-group form-group">
	              <div class="controls">
	                <label for="name">Nom complet:</label>
	                <input type="text" class="form-control" id="name" required data-validation-required-message="SVP veuillez fournir votre nom.">
	                <p class="help-block"></p>
	              </div>
	            </div>
	            <div class="control-group form-group">
	              <div class="controls">
	                <label for="phone">Numéro de téléphone:</label>
	                <input type="tel" class="form-control" id="phone" required data-validation-required-message="SVP veuillez fournir votre numéro de téléphone.">
	              </div>
	            </div>
	            <div class="control-group form-group">
	              <div class="controls">
	                <label for="email">Adresse courriel:</label>
	                <input type="email" class="form-control" id="email" required data-validation-required-message="SVP veuillez fournir votre adresse courriel.">
	              </div>
	            </div>
	            <div class="control-group form-group">
	              <div class="controls">
	                <label for="message">Message:</label>
	                <textarea rows="10" cols="100" class="form-control" id="message" required data-validation-required-message="SVP veuillez fournir votre message" maxlength="999" style="resize:none"></textarea>
	              </div>
	            </div>
	            <div id="success"></div>
	            <button type="submit" class="btn btn-primary">Envoyer le message</button>
	          </form>
	        </div>
	
	      </div>
	 -->
          <a href="/hello" class="btn btn-primary">Envoyer le message</a>
	    </div>
	</section>
	    
	    <jsp:include page="fragments/footer.jsp" />
		<script src="resources/lib/jquery-validation/jquery.validate.min.js"></script>
		<script src="resources/lib/jquery-validation/messages_fr.js"></script>


  </body>

</html>