// Header
let header = document.querySelector("header");

let path = window.location.pathname.slice(4);

header.innerHTML = `
<div class="container-xxl">
<a href="../index.html" class="logo d-flex flex-row-reverse">
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
    <h3 class="offcanvas-title" id="offcanvasRightLabel">الأقســــام</h3>
    <img src="../images/icons/app.png" class="" alt="" data-bs-dismiss="offcanvas">
  </div>
  <div class="offcanvas-body">
    <ul>
      <li><a href="../index.html" >الصفحه الرئيسيه</a></li>
      <li><a href="documents.html">مستندات حكوميه</a></li>
      <li><a href="passport.html">جواز سفر</a></li>
      <li><a href="visa.html">تأشيرات</a></li>
      <li><a href="hotel-reservation.html">حجز فنادق</a></li>
      <li><a href="flight-booking.html">حجز طيران</a></li>
      <li><a href="embassy.html">حجز موعد تساهيل</a></li>
      <hr>
      <li><a href="about-us.html">من نحن</a></li>
      <li><a href="contact-us.html">تواصل معنا</a></li>
    </ul>
  </div>
</div>

<!-- Links -->
<ul class="d-none d-md-flex m-0">
  <li><a href="../index.html">الصفحه الرئيسيه</a></li>
  <li class="services">
    <a>الخدمات</a>
    <ul class="dropdown">
      <li><a href="documents.html">مستندات حكوميه</a></li>
      <li><a href="passport.html">جواز سفر</a></li>
      <li><a href="visa.html">تأشيرات</a></li>
      <li><a href="hotel-reservation.html">حجز فنادق</a></li>
      <li><a href="flight-booking.html">حجز طيران</a></li>
      <li><a href="embassy.html">حجز موعد تساهيل</a></li>
    </ul>
    </li>
  <li><a href="about-us.html">من نحن</a></li>
  <li><a href="contact-us.html">تواصل معنا</a></li>
</ul>

<!-- languages -->
<div class="langs">
  <a href="../en/${path}"><img src="../images/icons/languages/usa.png" alt="">English</a>
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

// Footer
let footer = document.querySelector("footer");
let currentYear = new Date().getFullYear();

footer.innerHTML = `
<!-- Info Section -->
<div class="info">
  <p> "نيو فيستا" هى شركة متخصصة في حجز الفنادق وحجوزات الطيران وتخليص المستندات الحكومية
    والتأشيرات،
    بالإضافة إلى
    العديد من الخدمات الأخرى. دعنا نساعدك في تحقيق رحلات مميزة وتجارب لا تُنسى.
  </p>
  <p>الرقم الضريبي: 686-426-760</p>
  <p>للتواصل: <a href="tel:+201032694122">01032694122</a>&nbsp;&nbsp;<a href="tel:+201001812806">01001812806</a></p>
  <a href="mailto:newvista65@gmail.com">newvista65@gmail.com</a>
</div>
<!-- Links Section -->
<div class="links">
  <h4>الأقسام :</h4>
  <ul>
    <li><a href="about-us.html">من نحن</a></li>
    <li><a href="contact-us.html">تواصل معنا</a></li>
  </ul>
</div>
<!-- Payment Section -->
<div class="payment">
  <h4>طرق الدفع :</h4>
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
  <h4>تابعنا على :</h4>
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
</div>
</div>
<!-- Copyright -->
<div class="copyright">
  <p>جميع الحقوق محفوظة لشركة نيو فيستا &copy; <span>${currentYear}</span></p>
</div>
`;
