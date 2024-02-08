let song = new Audio("./public/song.mp3");
let c1 = document.querySelector('.c1')
let mm = gsap.matchMedia();
let tl = gsap.timeline({
  paused: true,
  onStart: () => {
    song.play();
  },
  onComplete: () => {
    c1.style.display='none';
    gsap.to(".last-img", {
      scale: 14,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "power1.inOut",
    });
    gsap.to(".card", {
      rotate: 10,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "power1.inOut",
    });
  },
  defaults: {
    duration: 2,
    ease: "power3.inOut",
  },
  // scrollTrigger: {
  //   scroller: "body",
  //   trigger: "section",
  //   // scrub: 2,
  //   // markers: true,
  //   // pin: true,
  //   // start: "50% 50%",
  //   // end: "bottom -400%",
  // },
});

mm.add("(min-width: 800px)", () => {
  //  c1
  tl.to(
    ".c1",
    {
      scale: 0
    },
    "c1"
  );
  tl.to(
    ".c2",
    {
      rotate: 0,
    },
    "c1"
  );

  //  c2
  tl.to(
    ".c2",
    {
      y: "-=120",
      x: "+=110%",
      scale: 0.35,
    },
    "c2"
  );
  tl.to(
    ".c3",
    {
      rotate: 0,
    },
    "c2"
  );

  //  c3
  tl.to(
    ".c3",
    {
      y: "+=20",
      x: "+=155%",
      scale: 0.35,
    },
    "c3"
  );
  tl.to(
    ".c4",
    {
      rotate: 0,
    },
    "c3"
  );

  //  c4
  tl.to(
    ".c4",
    {
      y: "+=160",
      x: "+=130%",
      scale: 0.35,
    },
    "c4"
  );
  tl.to(
    ".c5",
    {
      rotate: 0,
    },
    "c4"
  );

  //  c5
  tl.to(
    ".c5",
    {
      y: "+=350",
      x: "+=40%",
      scale: 0.35,
    },
    "c5"
  );
  tl.to(
    ".c6",
    {
      rotate: 0,
    },
    "c5"
  );

  //  c6
  tl.to(
    ".c6",
    {
      y: "+=180",
      x: "-=30%",
      scale: 0.35,
    },
    "c6"
  );
  tl.to(
    ".c7",
    {
      rotate: 0,
    },
    "c6"
  );

  //  c7
  tl.to(
    ".c7",
    {
      //   y: "-=10",
      x: "-=100%",
      scale: 0.35,
    },
    "c7"
  );
  tl.to(
    ".c8",
    {
      rotate: 0,
    },
    "c7"
  );

  //  c8
  tl.to(
    ".c8",
    {
      y: "-=130",
      x: "-=20%",
      scale: 0.35,
    },
    "c8"
  );
  tl.to(
    ".c9",
    {
      rotate: 0,
    },
    "c8"
  );

  //  c8
  tl.to(
    ".c9",
    {
      y: "-=65",
      x: "+=25%",
      scale: 0.35,
    },
    "c9"
  );
  tl.to(
    ".c1",
    {
      opacity: 0,
    },
    "c9"
  );
  tl.to(".last-img", {
    scale: 20,
    // display:none,
  });
});

mm.add("(max-width: 799px)", () => {
  //  c1
  tl.to(
    ".c1",
    {
      scale: 0
    },
    "c1"
  );
  tl.to(
    ".c2",
    {
      rotate: 0,
    },
    "c1"
  );

  //  c2
  tl.to(
    ".c2",
    {
      y: "-=100",
      x: "+=100%",
      scale: 0.35,
    },
    "c2"
  );
  tl.to(
    ".c3",
    {
      rotate: 0,
    },
    "c2"
  );

  //  c3
  tl.to(
    ".c3",
    {
      y: "+=10",
      x: "+=140%",
      scale: 0.35,
    },
    "c3"
  );
  tl.to(
    ".c4",
    {
      rotate: 0,
    },
    "c3"
  );

  //  c4
  tl.to(
    ".c4",
    {
      y: "+=140",
      x: "+=120%",
      scale: 0.35,
    },
    "c4"
  );
  tl.to(
    ".c5",
    {
      rotate: 0,
    },
    "c4"
  );

  //  c5
  tl.to(
    ".c5",
    {
      y: "+=280",
      x: "+=40%",
      scale: 0.35,
    },
    "c5"
  );
  tl.to(
    ".c6",
    {
      rotate: 0,
    },
    "c5"
  );

  //  c6
  tl.to(
    ".c6",
    {
      y: "+=150",
      x: "-=40%",
      scale: 0.35,
    },
    "c6"
  );
  tl.to(
    ".c7",
    {
      rotate: 0,
    },
    "c6"
  );

  //  c7
  tl.to(
    ".c7",
    {
      //   y: "-=10",
      x: "-=90%",
      scale: 0.35,
    },
    "c7"
  );
  tl.to(
    ".c8",
    {
      rotate: 0,
    },
    "c7"
  );

  //  c8
  tl.to(
    ".c8",
    {
      y: "-=110",
      x: "-=20%",
      scale: 0.35,
    },
    "c8"
  );
  tl.to(
    ".c9",
    {
      rotate: 0,
    },
    "c8"
  );

  //  c9
  tl.to(
    ".c9",
    {
      y: "-=30",
      x: "+=25%",
      scale: 0.35,
    },
    "c9"
  );
  tl.to(
    ".c1",
    {
      opacity: 0,
    },
    "c9"
  );
  tl.to(".last-img", {
    scale: 15,
  });
});

document.querySelector("section").addEventListener("click", () => {
  tl.play();
  song.play();
});
document.querySelector("button").addEventListener("click", () => {
  tl.restart();
});
