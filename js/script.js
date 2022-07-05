const slides = [
  {
    image: "img/01.jpg",
    title: "Svezia",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  },
  {
    image: "img/02.jpg",
    title: "Svizzera",
    text: "Lorem ipsum.",
  },
  {
    image: "img/03.jpg",
    title: "Gran Bretagna",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: "img/04.jpg",
    title: "Germania",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
  },
  {
    image: "img/05.jpg",
    title: "Paradise",
    text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.",
  },
];

console.log(slides);

const app = new Vue({
  el: "#app",
  data: {
    slides: [
      "img/01.jpg",
      "img/02.jpg",
      "img/03.jpg",
      "img/04.jpg",
      "img/05.jpg",
    ],
    current: 0,
    timer: 0,
  },

  methods: {
    nextSlide: function () {
      this.current++;
      if (this.current > this.slides.length) this.current = 0;
      this.resetPlay();
    },
    prevSlide: function () {
      this.current--;
      if (this.current < 0) this.current = this.slides.length - 1;
      this.resetPlay();
    },
    selectSlide: function (i) {
      this.current = i;
      this.resetPlay();
    },
    resetPlay: function () {
      clearInterval(this.timer);
      this.play();
    },
    play: function () {
      let app = this;
      this.timer = setInterval(function () {
        app.nextSlide();
      }, 3000);
    },
  },
  created: function () {
    this.play();
  },
});
