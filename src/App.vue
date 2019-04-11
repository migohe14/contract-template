<template>
  <div id="app">
    <main-header></main-header>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader";
export default {
  name: "App",
  components: {
    MainHeader
  }
};

$(".navigation_icon").click(function() {
  $(".navigation").toggleClass("navigation-open");
});

$(function() {
  $(".navigation_ul a").click(function() {
    $(".navigation").toggleClass("navigation-open");
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});
</script>

<style>
html,
body {
  background: #ecf0f1 !important;
}
body {
  overflow: hidden;
  overflow-y: scroll;
  overflow: -moz-scrollbars-vertica;
}
#app {
  background: #ecf0f1 !important;
  text-align: center;
}
section {
  /* background: #ecf0f1 !important; */
}
h1,
h2,
h3,
h4,
h5 {
  font-family: "Vidaloka", serif;
  color: #ecf0f1;
}
p {
  font-family: "Oswald", sans-serif;
  color: #ecf0f1;
}
</style>


