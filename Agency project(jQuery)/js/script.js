$(document).ready(function() {
  // preloader
  $(".preloader").fadeOut();
  // navBtn
  $(".navBtn").click(function() {
    $("nav").toggleClass("nav__show");
  });
  // video switch
  $(".video__switch-container").click(function() {
    const value = $(".video__switch-btn").hasClass("btnSlide");
    if (value) {
      $(".video__switch-btn").removeClass("btnSlide");
      $("#video")
        .get(0)
        .play();
    } else {
      $(".video__switch-btn").addClass("btnSlide");
      $("#video")
        .get(0)
        .pause();
    }
  });

  // magnific popup
  $("#projects__modal").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      // options for gallery
      enabled: true
    }
    // other options
  });
});

// accordion
$(".accordion__btn").click(function() {
  $(".accordion__btn")
    .not(this)
    .removeClass("rotate");
  $(this).toggleClass("rotate");
  $(".accordion__btn")
    .not(this)
    .parent()
    .next()
    .slideUp();
  $(this)
    .parent()
    .next()
    .slideToggle();
});

// team member
(function() {
  let data = [
    {
      id: 0,
      name: "sophia",
      job: "developer",
      text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
      favorites: ["eat", "drink", "sleep"],
      img: "images/team-1.jpeg"
    },
    {
      id: 1,
      name: "tom orange",
      job: "designer",
      text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
      favorites: ["paint", "draw", "run"],
      img: "images/team-2.jpeg"
    },
    {
      id: 2,
      name: "andersson",
      job: "accountant",
      text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
      favorites: ["math", "physics", "more math"],
      img: "images/team-3.jpeg"
    },
    {
      id: 3,
      name: "dog hugo",
      job: "intern",
      text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
      favorites: ["bark", "run", "bite"],
      img: "images/team-4.jpeg"
    }
  ];
  $(".team-img__item").click(function() {
    // adding/removing active class
    $(".team-img__item")
      .not(this)
      .removeClass("active");
    $(this).addClass("active");
    // change data
    let id = $(this).attr("data-id");
    $(".team-info__member-name").text(data[id].name);

    $(".team-info__member-job").text(data[id].job);
    $(".team-info__member-text").text(data[id].text);
    $(".team-info__member-single-favourite-text").each(function(index) {
      $(this).text(data[id].favorites[index]);
    });
    $(".team-info__img").attr("src", data[id].img);
  });
})();

// owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  smartSpeed: 2000,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
$(".owl-prev").html('<div><i class="fa fa-chevron-left"></i></div>');
$(".owl-next").html('<div><i class="fa fa-chevron-right"></i></div>');
