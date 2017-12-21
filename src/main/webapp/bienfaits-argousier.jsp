
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html lang="en">

	<jsp:include page="fragments/head.jsp" />

  <body>

    <!-- Navigation -->
    <nav id="mainNav" class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">
        	<img src="img/logo.svg" width="150" height="103" alt="Logo Ferme Majolimé">
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownApropos" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                À propos
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownApropos">
                <a class="dropdown-item" href="qui-sommes-nous.jsp">Qui sommes-nous</a>
                <a class="dropdown-item" href="produits.html">Produits</a>
                <a class="dropdown-item" href="photos.html">Photos</a>
              </div>
            </li>
            <li class="nav-item active dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownArgousier" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                L'argousier
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownArgousier">
                <a class="dropdown-item" href="bienfaits-argousier.jsp">Bienfaits</a>
                <a class="dropdown-item" href="information-argousier.jsp">Information</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.jsp">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <div class="container">

      <!-- Page Heading/Breadcrumbs -->
      <h1 class="mt-6 mb-3">Bienfaits
        <small>de l'argousier</small>
      </h1>

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="index.jsp">Accueil</a>
        </li>
        <li class="breadcrumb-item">L'argousier</li>
        <li class="breadcrumb-item active">Bienfaits</li>
      </ol>

      <!-- Image Header -->
      <img class="img-fluid rounded mb-4" src="http://placehold.it/1200x300" alt="">

      <!-- Marketing Icons Section -->
      <div class="row">
        <div class="col-lg-4 mb-4">
          <div class="card h-100">
            <h4 class="card-header">Card Title</h4>
            <div class="card-body">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="card h-100">
            <h4 class="card-header">Card Title</h4>
            <div class="card-body">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="card h-100">
            <h4 class="card-header">Card Title</h4>
            <div class="card-body">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->

    <aside class="bg-primary">
        <div class="container text-center">
            <div class="call-to-action">
                <h2 class="text-faded">N'attendez plus et contactez-nous dès maintenant pour une réservation!</h2>
                <a href="contact.jsp" class="btn btn-default btn-xl sr-button">Réservez maintenant!</a>
            </div>
        </div>
    </aside>
    
	<!-- Footer -->
	<footer class="py-5 bg-dark">
	  <div class="container">
	    <p class="m-0 text-center text-white">Copyright &copy; Ferme Majolim&eacute; 2017</p>
	  </div>
	  <!-- /.container -->
	</footer>
	
    <!-- Bootstrap core JavaScript -->
    <script src="resources/lib/jquery/jquery.min.js"></script>
    <script src="resources/lib/popper.js/popper.min.js"></script>
    <script src="resources/lib/bootstrap/js/bootstrap.min.js"></script>
	
	<script src="resources/js/scripts.min.js"></script>

  </body>

</html>