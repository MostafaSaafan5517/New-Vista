// Header
let header = document.querySelector("header");

let path = window.location.pathname.slice(4);

header.innerHTML = `
<div class="container-xxl">
<a href="index.html" class="logo d-flex flex-row-reverse">
<img src="../images/new-logo.png">
</a>
<!-- Nav menu for small screens -->
<div class="nav-menu d-block d-md-none">
  <div class="menu-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
    <div class="menu-bar"></div>
  </div>
</div>

<!-- Offcanvas -->
<div class="offcanvas offcanvas-end d-md-none" tabindex="-1" id="offcanvasRight"
  aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title" id="offcanvasRightLabel">Sections</h3>
    <img src="../images/icons/app.png" class="" alt="" data-bs-dismiss="offcanvas">
  </div>
  <div class="offcanvas-body">
    <ul>
      <li><a href="index.html" >Home</a></li>
      <li><a href="documents.html">Government documents</a></li>
      <li><a href="passport.html">Passport</a></li>
      <li><a href="visa.html">Visas</a></li>
      <li><a href="hotel-reservation.html">Hotels reservation</a></li>
      <li><a href="flight-booking.html">Flights booking</a></li>
      <li><a href="embassy.html">Tasahel booking</a></li>
      <hr>
      <li><a href="contact-us.html">Contact us</a></li>
      <li><a href="about-us.html">About</a></li>
    </ul>
  </div>
</div>

<!-- Links -->
<ul class="d-none d-md-flex m-0">
  <li><a href="contact-us.html">Contact us</a></li>
  <li><a href="about-us.html">About</a></li>
  <li class="services">
    <a>Services</a>
    <ul class="dropdown">
      <li><a href="documents.html">Government documents</a></li>
      <li><a href="passport.html">Passports</a></li>
      <li><a href="visa.html">Visas</a></li>
      <li><a href="hotel-reservation.html">Hotels reservation</a></li>
      <li><a href="flight-booking.html">Flights booking</a></li>
      <li><a href="embassy.html">Tasahel booking</a></li>
    </ul>
  </li>
  <li><a href="index.html">Home</a></li>
</ul>

<!-- languages -->
<div class="langs">
  <a href="../ar/${path}"><img src="../images/icons/languages/egypt.png" alt="">العربيه</a>
</div>
</div>
`;

let services = document.querySelector(".services");
let dropdown = document.querySelector(".dropdown");
let documentClickHandler = (e) => {
  if (!services.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
    document.removeEventListener("click", documentClickHandler);
  }
};

services.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.style.display = "block";
  document.addEventListener("click", documentClickHandler);
});
// });

// Footer
let footer = document.querySelector("footer");
let currentYear = new Date().getFullYear();

footer.innerHTML = `
<!-- Info Section -->
<div class="info">
  <p> New Vista is a company specializing in hotel reservation, flight reservations and clearance of government documents
    And visas,
    In addition to
    Many other services. Let's help you achieve unwilling trips and unforgettable experiences.
  </p>
  <p>Tax Number : 760-426-686</p>
  <p>Contact: <a href="tel:+201032694122">01032694122</a>&nbsp;&nbsp;<a href="tel:+201001812806">01001812806</a></p>
  <a href="mailto:newvista65@gmail.com">newvista65@gmail.com</a>
</div>
<!-- Links Section -->
<div class="links">
  <h4>Sections :</h4>
  <ul>
    <li><a href="about-us.html">About</a></li>
    <li><a href="contact-us.html">Contact us</a></li>
  </ul>
</div>
<!-- Payment Section -->
<div class="payment">
  <h4>Payment methods :</h4>
  <div class="pay-companies">
    <img src="../images/payment/banque-misr.png" alt="">
    <img src="../images/payment/nbe-bank.png" alt="">
    <img src="../images/payment/etisalat-cash.png" alt="">
    <img src="../images/payment/instapay-egypt.png" alt="">
    <img src="../images/payment/visa.png" alt="">
    <img src="../images/payment/vodafone-cash.png" alt="">
  </div>

  <!-- Social Section -->
<div class="social">
  <ul>
  <!-- Facebook -->
  <li><a href="https://www.facebook.com/profile.php?id=61550599073674&mibextid=ZbWKwL" target="_blank"><img
        src="../images/icons/footer/facebook.png" alt=""></a></li>
  <!-- Tiktok -->
  <li><a href="https://www.tiktok.com/@new.vista0?is_from_webapp=1&sender_device=pc" target="_blank"><img
        src="../images/icons/footer/tiktok.png" alt=""></a></li>
  <!-- Youtube -->
  <li><a href="https://youtube.com/@NewVistaTour?si=dubi4pgNYXYYJpZ3" target="_blank"><img
        src="../images/icons/footer/youtube.png" alt=""></a></li>
  <!-- Whatsapp -->
  <li><a href="https://wa.me/+201001812806" target="_blank"><img src="../images/icons/footer/whatsapp.png"
        alt=""></a>
  </li>
  <!-- Instagram -->
  <li><a href="https://www.instagram.com/newvista8?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      target="_blank"><img src="../images/icons/footer/instagram.png" alt=""></a></li>
</ul>
  <h4>: Follow us on</h4>
</div>
</div>
<!-- Copyright -->
<div class="copyright">
  <p>All rights reserved to New Vista &copy; <span>${currentYear}</span></p>
</div>
`;
