

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

document.addEventListener("DOMContentLoaded", () => {

  const section =
    document.querySelector(".testimonial-sec");

  const track =
    document.querySelector(".testimonial-track");

  const cards =
    document.querySelectorAll(".testimonial-card");

  const prevBtn =
    document.querySelector(".testimonial-prev");

  const nextBtn =
    document.querySelector(".testimonial-next");

  const dotsContainer =
    document.querySelector(".testimonial-dots");


  if (
    !track ||
    !cards.length ||
    !prevBtn ||
    !nextBtn
  ) {
    return;
  }


  let currentIndex = 0;


  /* ===============================
     CARDS PER VIEW
  =============================== */

  function getCardsPerView() {

    if (window.innerWidth <= 700) {
      return 1;
    }

    if (window.innerWidth <= 1050) {
      return 2;
    }

    return 3;
  }


  /* ===============================
     MAX INDEX
  =============================== */

  function getMaxIndex() {

    return Math.max(
      0,
      cards.length - getCardsPerView()
    );

  }


  /* ===============================
     CREATE DOTS
  =============================== */

  function createDots() {

    dotsContainer.innerHTML = "";

    const total =
      getMaxIndex() + 1;


    for (
      let i = 0;
      i < total;
      i++
    ) {

      const dot =
        document.createElement("button");

      dot.className =
        "testimonial-dot";

      dot.setAttribute(
        "aria-label",
        `Go to testimonial ${i + 1}`
      );


      dot.addEventListener(
        "click",
        () => {

          currentIndex = i;

          updateSlider();

        }
      );


      dotsContainer.appendChild(dot);

    }

  }


  /* ===============================
     UPDATE SLIDER
  =============================== */

  function updateSlider() {

    const maxIndex =
      getMaxIndex();


    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }


    const firstCard =
      cards[0];

    const cardWidth =
      firstCard.getBoundingClientRect().width;


    const styles =
      getComputedStyle(track);

    const gap =
      parseFloat(styles.gap) || 0;


    const move =
      currentIndex *
      (cardWidth + gap);


    track.style.transform =
      `translateX(-${move}px)`;


    /* dots */

    const dots =
      dotsContainer
        .querySelectorAll(
          ".testimonial-dot"
        );


    dots.forEach(
      (dot, index) => {

        dot.classList.toggle(
          "active",
          index === currentIndex
        );

      }
    );


    /* arrows */

    prevBtn.disabled =
      currentIndex === 0;

    nextBtn.disabled =
      currentIndex === maxIndex;

  }


  /* ===============================
     PREVIOUS
  =============================== */

  prevBtn.addEventListener(
    "click",
    () => {

      if (currentIndex > 0) {

        currentIndex--;

        updateSlider();

      }

    }
  );


  /* ===============================
     NEXT
  =============================== */

  nextBtn.addEventListener(
    "click",
    () => {

      const maxIndex =
        getMaxIndex();


      if (currentIndex < maxIndex) {

        currentIndex++;

        updateSlider();

      }

    }
  );


  /* ===============================
     WINDOW RESIZE
  =============================== */

  window.addEventListener(
    "resize",
    () => {

      currentIndex = 0;

      createDots();

      updateSlider();

    }
  );


  /* ===============================
     INITIALIZE
  =============================== */

  createDots();

  updateSlider();


  /* ===============================
     SCROLL ANIMATION
  =============================== */

  if (section) {

    const observer =
      new IntersectionObserver(

        (entries, obs) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                section
                  .classList
                  .add("animate");

                obs.unobserve(
                  section
                );

              }

            }
          );

        },

        {
          threshold: 0.12
        }

      );


    observer.observe(
      section
    );

  }

});


document.addEventListener("DOMContentLoaded", () => {

  const ctaSection =
    document.querySelector(".parallax-cta");


  if (!ctaSection) {
    return;
  }


  /* =====================================
     SCROLL REVEAL
  ===================================== */

  const ctaObserver =
    new IntersectionObserver(

      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target
              .classList
              .add("active");

            observer.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: 0.18
      }

    );


  ctaObserver.observe(
    ctaSection
  );


  /* =====================================
     CUSTOM PARALLAX MOVEMENT
  ===================================== */

  function updateCTAParallax() {

    if (window.innerWidth <= 900) {
      ctaSection.style.backgroundPosition =
        "65% center";

      return;
    }


    const rect =
      ctaSection.getBoundingClientRect();

    const windowHeight =
      window.innerHeight;


    if (
      rect.bottom > 0 &&
      rect.top < windowHeight
    ) {

      const sectionCenter =
        rect.top +
        rect.height / 2;


      const viewportCenter =
        windowHeight / 2;


      const distance =
        sectionCenter -
        viewportCenter;


      const movement =
        distance * 0.08;


      ctaSection.style.backgroundPosition =
        `center calc(50% + ${movement}px)`;

    }

  }


  window.addEventListener(
    "scroll",
    updateCTAParallax,
    {
      passive: true
    }
  );


  window.addEventListener(
    "resize",
    updateCTAParallax
  );


  updateCTAParallax();

});


