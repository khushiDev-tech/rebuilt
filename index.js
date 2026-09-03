

    /* =========================
       AUTOMATIC HERO SLIDER
       No dots / No arrows
    ========================== */

    const slides = document.querySelectorAll(".hero-slide");

    let currentSlide = 0;

    function showNextSlide() {

      slides[currentSlide].classList.remove("active");

      currentSlide++;

      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }

      slides[currentSlide].classList.add("active");

    }

    setInterval(showNextSlide, 5000);


    /* =========================
       MOBILE MENU
    ========================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {

      navLinks.classList.toggle("open");

      const icon = menuToggle.querySelector("i");

      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-xmark");

    });


    const aboutMainImg =
  document.getElementById("aboutMainImg");

const aboutThumbs =
  document.querySelectorAll(".about-thumb");


aboutThumbs.forEach((thumb) => {

  thumb.addEventListener("click", () => {

    const newImage =
      thumb.getAttribute("data-img");


    /* ACTIVE THUMB */

    aboutThumbs.forEach((item) => {
      item.classList.remove("active");
    });

    thumb.classList.add("active");


    /* IMAGE FADE */

    aboutMainImg.classList.add("changing");


    setTimeout(() => {

      aboutMainImg.src = newImage;

      aboutMainImg.classList.remove("changing");

    }, 250);

  });

});



const aboutSection = document.querySelector(".about-sec");

if (aboutSection) {

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          aboutSection.classList.add("animate");

          observer.unobserve(aboutSection);
        }

      });

    },
    {
      threshold: 0.15
    }
  );

  observer.observe(aboutSection);
}






document.addEventListener(
  "DOMContentLoaded",
  () => {

    const servicesSection =
      document.querySelector(
        ".services-sec"
      );


    if (!servicesSection) return;


    const servicesObserver =
      new IntersectionObserver(

        (entries, observer) => {

          entries.forEach((entry) => {

            if (
              entry.isIntersecting
            ) {

              servicesSection
                .classList
                .add("animate");


              observer.unobserve(
                servicesSection
              );

            }

          });

        },

        {
          threshold: 0.12
        }

      );


    servicesObserver.observe(
      servicesSection
    );

  }
);

document.addEventListener("DOMContentLoaded", () => {

  const processSection =
    document.querySelector(".process-sec");

  if (!processSection) return;


  const processObserver =
    new IntersectionObserver(

      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            processSection
              .classList
              .add("animate");

            observer.unobserve(
              processSection
            );

          }

        });

      },

      {
        threshold: 0.12
      }

    );


  processObserver.observe(
    processSection
  );

});


const whySection =
  document.querySelector(".why-sec");

if (whySection) {

  const whyObserver =
    new IntersectionObserver(

      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            whySection
              .classList
              .add("animate");

            observer.unobserve(
              whySection
            );

          }

        });

      },

      {
        threshold: 0.12
      }

    );

  whyObserver.observe(
    whySection
  );

}