<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Lighten Up - Gemplyte Sample Project</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="author" content="Gemplyte IT Solutions">
    <meta name="keywords" content="Lighten Up,Gemplyte,Sample Project">
    <meta name="description" content="Gemplyte Sample Project">
    <!-- Favicon -->
    <link rel="shortcut icon" href="image/logo/title.png" type="image/x-icon">

    <!-- Bootstrap Icons CDN (put this in <head> if not already added) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="css/loader.css">
    <link rel="stylesheet" type="text/css" href="css/home-banner.css">
    <link rel="stylesheet" type="text/css" href="css/home-product.css">
    <link rel="stylesheet" type="text/css" href="css/home-about.css">
    <link rel="stylesheet" type="text/css" href="css/home-contact.css">
    <link rel="stylesheet" type="text/css" href="css/home-categories.css">
    <link rel="stylesheet" type="text/css" href="css/home-view-product.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

    <!-- Google font -->
    <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&family=Spectral:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  </head>
  <body>
    <!-- loader section start here -->
    <div class="loading-screen">
      <div class="loader">
        <span>&lt;</span>
        <span>Gemlyte IT Solutions</span>
        <span>/&gt;</span>
      </div>
    </div>
    <!-- loader section end here -->
    <div id="main-content" style="display: none">
      <?php include "components/navbar.php"; ?>
      <?php include "content/home/home-banner.php"; ?>
      <?php include "content/home/home-categories.php"; ?>
      <?php include "content/home/home-products.php"; ?>
      <?php include "components/footer.php"; ?>
    </div>

    <!-- Bootstrap Bundle JS (includes Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Custom JS -->
    <script src="js/script.js"></script>

  </body>
</html>