class SiteLoader {

  /**
   * SiteLoader constructor
   */
  constructor() {
    this.offset = header.offsetTop;
    // this.loadProjects();
  }

  loadProjects() {
    let projectList = projects["projects"];
    let selectedProject = projectList[projects["default-project"]];
    this.loadToElement($("#test"), selectedProject["content"]);
  }

  /**
   *
   * @param element
   * @param jsonObj a json object with fields 'text', 'img', 'pos'
   */
  loadToElement(element, jsonObj) {
    element.html("<p>" + jsonObj.text + "</p>");

    // image loading currently broken

    //   if (jsonObj.image != null) {
    //     let jsonImg = jsonObj.image;
    //     let img = $("<img>", {
    //       src: jsonImg.src,
    //       alt: jsonImg.alt,
    //       width: jsonImg.w,
    //     });
    //     if (jsonImg.align === "right" || jsonImg.align === "left") {
    //
    //     } else {
    //
    //     }
    //     element.append(img);
    //   }
    // }
  }

  // for 'sticky' header. Code adapted from w3schools
  // https://www.w3schools.com/howto/howto_js_sticky_header.asp
  onScroll() {
    if (window.pageYOffset > this.offset) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  }

}

// instantiating SiteLoader loads the page's content
let siteLoader = new SiteLoader();

// for 'sticky' header
window.onscroll = function () { siteLoader.onScroll() };

$.extend($.scrollTo.defaults, {
  axis: "y",
  duration: 500,
})

// make nav buttons scroll to section
$(".nav-button-about").click(function() {
  $.scrollTo($(".about-section").offset().top-$(".header").height() - 25)
});

$(".nav-button-skills").click(function() {
  $.scrollTo($(".skills-section").offset().top-$(".header").height() - 25)
});

$(".nav-button-projects").click(function() {
  $.scrollTo($(".projects-section").offset().top-$(".header").height() - 25)
});

$(".nav-button-courses").click(function() {
  $.scrollTo($(".courses-section").offset().top-$(".header").height() - 25)
});

$(".email-icon").click(function () {
  $.scrollTo($("footer"));
})

$(".nav-button-contact").click(function () {
  $.scrollTo($("footer"));
})

// set footer height
$("footer").height(window.innerHeight - $(".header").height());


