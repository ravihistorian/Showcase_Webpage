// *********** LOCOMOTIVE SECTION *************
loco = ()=>{
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true,

// for tablet smooth
tablet: { smooth: true },

// for mobile
smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length
    ? locoScroll.scrollTo(value, 0, 0)
    : locoScroll.scroll.instance.scroll.y;
},
getBoundingClientRect() {
  return {
    top: 0,
    left: 0,
    width: window.innerWidth,
    height: window.innerHeight
  };
}

});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
loco();


document.querySelector("#nav")
.addEventListener("mouseenter",function(){
   gsap.to(".cover",1,{
    ease:Expo.easeInOut,
    duration:.5,
    height:"100%"
   })

   gsap.to(".cover span",1,{
    ease:Expo.easeInOut,
    duration:.5,
    opacity:1,
   })
})

document.querySelector("#nav")
.addEventListener("mouseleave",function(){

   gsap.to(".cover",1,{
    ease:Expo.easeInOut,
    duration:.5,
    height:"5%"
   })

   gsap.to(".cover span",1,{
    ease:Expo.easeInOut,
    duration:.5,
    opacity:0
   })

})

document.querySelectorAll(".text")
.forEach(function(text){
   text.addEventListener("mouseenter",function(dets){
    gsap.to(dets.target.children[0], {
      width:"100%",
      ease:Expo.easeInOut,
      duration:1
    })
   })

   text.addEventListener("mouseleave",function(dets){
    gsap.to(dets.target.children[0], {
      width:"0%",
      left:"100%",
      ease:Expo.easeInOut,
      duration:1,
      onComplete:function(){
         dets.target.children[0].style.left=0;
      }
     })
   })
});

// https://ravihistorian.github.io/Showcase-Webpage/