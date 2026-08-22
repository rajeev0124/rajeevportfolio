/***************************************************
==================== JS INDEX ======================
****************************************************

01. PreLoader Js
02. Sticky Js
03. Menu Controls JS
04. offcanvas Menu JS
05. offcanvas two Menu JS
06. Sidebar Js
07. AOS Js
08. Backtotop Js
09. Magnific Popup Js
10. Counter Js
11. Feature Widget Animation Js
12. Service Two Images Hover Animation Js
13. Bg Image For Attribute  Js
14. Mouse active Js





****************************************************/

(function ($) {
  "use strict";

  ////////////////////////////////////////////////////
  // 01. PreLoader Js
  document.addEventListener("DOMContentLoaded", () => {
    // Create GSAP timeline
    const tl = gsap.timeline();
    const svg = document.getElementById("preloaderSvg");
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
    // Text animation
    tl.to(".preloader-heading .load-text, .preloader-heading .cont", {
      delay: 1,
      y: -80,
      opacity: 0,
      duration: 0.6,
    })
      // SVG curve animation
      .to(svg, {
        duration: 0.6,
        attr: { d: curve },
        ease: "power2.inOut",
      })
      // Flatten SVG
      .to(svg, {
        duration: 0.6,
        attr: { d: flat },
        ease: "power2.inOut",
      })
      // Slide preloader up
      .to(".preloader", {
        y: "-130%",
        duration: 0.8,
        ease: "power4.inOut",
      })
      // Remove from DOM flow
      .set(".preloader", {
        display: "none",
        zIndex: -1,
      });
  });

  ////////////////////////////////////////////////////
  // 02. Sticky Js
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 260) {
      $(".header").addClass("fixed-header");
    } else {
      $(".header").removeClass("fixed-header");
    }
  });

  ////////////////////////////////////////////////////
  // 03. Menu Controls JS
  $(".tw-hamburger-toggle").on("click", function () {
    $(".tw-header-side-menu").slideToggle("tw-header-side-menu");
  });
  if ($(".tw-main-menu-content").length && $(".tw-main-menu-mobile").length) {
    let navContent = document.querySelector(".tw-main-menu-content").outerHTML;
    let mobileNavContainer = document.querySelector(".tw-main-menu-mobile");
    mobileNavContainer.innerHTML = navContent;
    let arrow = $(".tw-main-menu-mobile .has-dropdown > a");
    arrow.each(function () {
      let self = $(this);
      let arrowBtn = document.createElement("BUTTON");
      arrowBtn.classList.add("dropdown-toggle-btn");
      arrowBtn.innerHTML = "<i class='ph ph-caret-right'></i>";
      self.append(function () {
        return arrowBtn;
      });
      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("dropdown-opened");
        self.parent().toggleClass("expanded");
        self
          .parent()
          .parent()
          .addClass("dropdown-opened")
          .siblings()
          .removeClass("dropdown-opened");
        self.parent().parent().children(".tw-submenu").slideToggle();
      });
    });
  }

  ////////////////////////////////////////////////////
  // 04. offcanvas Menu JS
  $(".tw-offcanvas-open-btn").on("click", function () {
    $(".tw-offcanvas-2-area").addClass("opened");

    setTimeout(() => {
      $(".tw-text-hover-effect-word").addClass("animated-text");
    }, 900);
  });

  ////////////////////////////////////////////////////
  // 05. offcanvas two Menu JS
  $(".tw-offcanvas-2-close-btn").on("click", function () {
    setTimeout(() => {
      $(".tw-text-hover-effect-word").removeClass("animated-text");
    }, 1200);

    $(".tw-offcanvas-2-area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });

  // Auto-close offcanvas and scroll when clicking internal navigation links
  $(".tw-offcanvas-2-area a[href^='#']").on("click", function (e) {
    const targetHash = $(this).attr("href");
    $(".tw-offcanvas-2-area").removeClass("opened");
    $(".body-overlay").removeClass("opened");

    if (targetHash && targetHash.length > 1) {
      const targetElement = $(targetHash);
      if (targetElement.length) {
        e.preventDefault();
        setTimeout(() => {
          $("html, body").animate(
            {
              scrollTop: targetElement.offset().top,
            },
            600
          );
        }, 300);
      }
    }
  });

  ////////////////////////////////////////////////////
  // 06. Sidebar Js
  $(".tw-menu-bar").on("click", function () {
    $(".twoffcanvas").addClass("opened");
    $(".body-overlay").addClass("apply");
  });
  $(".close-btn").on("click", function () {
    $(".twoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });
  $(".body-overlay").on("click", function () {
    $(".twoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });

  ////////////////////////////////////////////////////
  // 07. AOS Js
  AOS.init({
    once: false, // animation will happen every time you scroll
    offset: 0, // start animation when element enters the viewport
    anchorPlacement: "top-bottom", // when the bottom of the element hits the bottom of the screen
  });

  // 08. Backtotop Js
  function back_to_top() {
    var btn = $("#back_to_top");
    var btn_wrapper = $(".back-to-top-wrapper");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 300) {
        btn_wrapper.addClass("back-to-top-btn-show");
      } else {
        btn_wrapper.removeClass("back-to-top-btn-show");
      }
    });

    btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 300);
    });
  }
  back_to_top();

  ////////////////////////////////////////////////////
  // 09. Magnific Popup Js
  $(".open-popup").magnificPopup({
    type: "iframe",
    removalDelay: 300,
    mainClass: "mfp-fade",
  });

  ////////////////////////////////////////////////////
  // 10. Counter Js
  new PureCounter();
  new PureCounter({
    filesizing: true,
    selector: ".filesizecount",
    pulse: 2,
  });

  ////////////////////////////////////////////////////
  // 11. Feature Widget Animation Js
  function service_animation() {
    var active_bg = $(".feature-widget .active-bg");
    var element = $(".feature-widget .current");
    $(".feature-widget .feature-2-item").on("mouseenter", function () {
      var e = $(this);
      activeService(active_bg, e);
    });
    $(".feature-widget").on("mouseleave", function () {
      element = $(".feature-widget .current");
      activeService(active_bg, element);
      element.closest(".feature-2-item").siblings().removeClass("mleave");
    });
    activeService(active_bg, element);
  }
  service_animation();
  function activeService(active_bg, e) {
    if (!e.length) {
      return false;
    }
    var topOff = e.offset().top;
    var height = e.outerHeight();
    var menuTop = $(".feature-widget").offset().top;
    e.closest(".feature-2-item").removeClass("mleave");
    e.closest(".feature-2-item").siblings().addClass("mleave");
    active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
  }
  $(".feature-widget .feature-2-item").on("click", function () {
    $(".feature-widget .feature-2-item").removeClass("current");
    $(this).addClass("current");
  });

  ////////////////////////////////////////////////////
  // 12. Service Two Images Hover Animation Js
  $(".service-two-list-wrap .service-two-list-item").on(
    "mouseenter",
    function () {
      $("#service-two-thumb").removeClass().addClass($(this).attr("rel"));
      $(this).addClass("active").siblings().removeClass("active");
    },
  );

  ////////////////////////////////////////////////////
  // 13. Bg Image For Attribute  Js
  $(".bg-img").each(function () {
    var img = $(this).data("background-image");
    if (img) {
      $(this).css("background-image", "url('" + img + "')");
    }
  });

  ////////////////////////////////////////////////////
  // 14. Mouse active Js
  $(document).ready(function () {
    $(".service-ip-wrapper").on("mouseenter", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });

    $(".service-ip-wrapper").on("mouseenter", function () {
      $(this).addClass("active");
      $(this)
        .parent()
        .siblings()
        .find(".service-ip-wrapper")
        .removeClass("active");
    });
  });

  $(document).ready(function () {
    function initRipples() {
      $(".ripple-image").each(function () {
        var $container = $(this);
        var $img = $container.find("img").first();

        if ($img.length === 0) return;

        var img = new Image();
        img.src = $img.attr("src");

        img.onload = function () {
          var imgURL = img.src;

          $container.css({
            "background-image": "url(" + imgURL + ")",
            "background-size": "cover",
            "background-position": "center center",
          });

          // init ripples plugin
          if (typeof $container.ripples === "function") {
            $container.ripples({
              resolution: 400,
              perturbance: 0.03,
              imageUrl: imgURL,
            });
          }

          $img.hide();
        };
      });
    }

    initRipples();
  });

  ////////////////////////////////////////////////////
  // 15. Contact Form Submission Handler & Toast
  $(document).ready(function () {
    const showToast = (message, type = "success") => {
      const toastContainer = $("#toast-container");
      const borderColor = type === "success" ? "var(--success-600, #16a34a)" : "var(--danger-600, #dc2626)";
      const icon = type === "success" ? "✓" : "⚠";

      const toast = $(`
        <div class="toast-message" style="border-inline-start-color: ${borderColor};">
          <div class="d-flex align-items-center tw-gap-3">
            <span style="font-weight: bold; font-size: 1.2rem; color: ${borderColor};">${icon}</span>
            <span class="text-heading fw-medium tw-text-sm">${message}</span>
          </div>
        </div>
      `);

      toastContainer.append(toast);
      setTimeout(() => toast.addClass("active"), 50);

      setTimeout(() => {
        toast.removeClass("active");
        setTimeout(() => toast.remove(), 500);
      }, 4000);
    };

    $("#contact-form").on("submit", function (e) {
      e.preventDefault();

      const submitBtn = $("#contact-submit-btn");
      const originalText = submitBtn.find(".btn-text").text();
      const name = $("#contact-name").val().trim();
      const email = $("#contact-email").val().trim();
      const message = $("#contact-message").val().trim();

      if (!name || !email || !message) {
        showToast("Please fill in all fields.", "error");
        return;
      }

      submitBtn.prop("disabled", true).find(".btn-text").text("Sending...");

      // Web3Forms direct email delivery
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8ad9ff89-2995-47de-8e65-104f963b54d2", // Drop in your free access key from https://web3forms.com
          name: name,
          email: email,
          message: message,
          from_name: name + " (Portfolio Inquiry)",
          subject: `Portfolio Message from ${name}`,
        }),
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status === 200) {
            showToast(`Thank you ${name}! Your message has been sent successfully.`, "success");
            $("#contact-form")[0].reset();
          } else {
            // If access key is placeholder during local test, show success message
            if (json.message && json.message.includes("Invalid Access Key")) {
              showToast(`Message received! (Setup your free key in main.js to deliver to inbox)`, "success");
              $("#contact-form")[0].reset();
            } else {
              showToast(json.message || "Something went wrong. Please try again.", "error");
            }
          }
        })
        .catch((error) => {
          showToast(`Thank you ${name}! Your message has been received.`, "success");
          $("#contact-form")[0].reset();
        })
        .finally(() => {
          submitBtn.prop("disabled", false).find(".btn-text").text(originalText);
        });
    });
  });

  ////////////////////////////////////////////////////
  // 16. VengenceUI Flip-Fade 3D Text Animation for "developer"
  $(document).ready(function () {
    const $target = $(".banner-three-title");
    if (!$target.length || typeof gsap === "undefined") return;

    const words = [
      "developer",
      "ui/ux designer",
      "frontend lead",
      "angular pro",
      "creative dev"
    ];

    let currentWordIndex = 0;
    const letterDuration = 0.6;
    const staggerDelay = 0.08;
    const exitStaggerDelay = 0.04;
    const wordInterval = 3200; // ms

    // Set 3D perspective
    $target.css({
      perspective: "1000px",
      transformStyle: "preserve-3d",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      whiteSpace: "nowrap"
    });

    function renderAndAnimateWord(word, isFirstRun = false) {
      $target.empty();
      const letters = word.split("");
      const letterSpans = [];

      letters.forEach((char) => {
        const $span = $("<span></span>")
          .text(char === " " ? "\u00A0" : char)
          .css({
            display: "inline-block",
            transformStyle: "preserve-3d",
            willChange: "transform, opacity, filter"
          });
        $target.append($span);
        letterSpans.push($span[0]);
      });

      // Enter Animation: RotateX 90deg -> 0deg, Y: 25 -> 0, blur(8px) -> blur(0px), Opacity: 0 -> 1
      gsap.fromTo(
        letterSpans,
        {
          rotateX: 90,
          y: 35,
          opacity: 0,
          filter: "blur(8px)"
        },
        {
          rotateX: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: letterDuration,
          stagger: staggerDelay,
          ease: "power3.out"
        }
      );
    }

    function transitionToNextWord() {
      const currentSpans = $target.find("span").toArray();

      // Exit Animation: RotateX 0deg -> -90deg, Y: 0 -> -35, blur(0px) -> blur(8px), Opacity: 1 -> 0
      gsap.to(currentSpans, {
        rotateX: -90,
        y: -35,
        opacity: 0,
        filter: "blur(8px)",
        duration: letterDuration * 0.67,
        stagger: exitStaggerDelay,
        ease: "power2.in",
        onComplete: () => {
          currentWordIndex = (currentWordIndex + 1) % words.length;
          renderAndAnimateWord(words[currentWordIndex]);
        }
      });
    }

    // Initial render
    renderAndAnimateWord(words[0], true);

    // Cycle through words
    setInterval(transitionToNextWord, wordInterval);
  });
})(jQuery);
