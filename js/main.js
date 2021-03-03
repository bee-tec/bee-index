$(function () {
  //判断屏幕宽度
  let width = window.innerWidth; //获取当前浏览器视口分辨率
  if (width < 768) {
    let myFullpage = new fullpage("#fullpage", {
      menu: "#myMenu",
      anchors: ["index", "summary", "achievement", "cooperate", "about"],
      scrollingSpeed: 700,
      keyboardScrolling: true,
      recordHistory: false,
      autoScrolling: false, //为true适用于pc端，为false适用于移动端
    });
  } else {
    let myFullpage = new fullpage("#fullpage", {
      menu: "#myMenu",
      anchors: ["index", "summary", "achievement", "cooperate", "about"],
      scrollingSpeed: 700,
      keyboardScrolling: true,
      recordHistory: false,
      autoScrolling: true, //为true适用于pc端，为false适用于移动端
      // onLeave: function (origin, destination, direction) {
      //   let active = $(".menu").find(".link").eq(destination.index);
      //   active.addClass("active");
      //   let siblings = $(".menu").find(".link").siblings();
      //   console.log(siblings);
      //   //离开第二个section后
      //   // if (origin.index == 1 && direction == "down") {
      //   //   alert("前往第3个section！");
      //   // } else if (origin.index == 1 && direction == "up") {
      //   //   alert("前往第1个section！");
      //   // }
      // },
    });
  }
});