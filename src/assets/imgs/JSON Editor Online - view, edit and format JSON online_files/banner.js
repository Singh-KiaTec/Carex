var dom = {};
var devDynamicContent;
var playCount = 0;
var playLimit = 2;
var animationTimeline;
var imagesTimeline;
var headline_tl;

function init() {
 
  if (Enabler.isVisible()) {
    onEnablerVisible();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, onEnablerVisible);
  }
}

function onEnablerVisible () {
   preload();
}

function setUp() {
    console.log("----- setUp");
    setupDom();
    eventListeners();
    reset();
    createAnimations();
    dom.mainContainer.style.visibility = 'visible';  
    play();
}

function setupDom() {
    console.log("----- setupDom");
    dom.mainContainer           = document.getElementById('main_container');
    dom.mainContent             = document.getElementById('main_content');
    dom.bgExit                  = document.getElementById('background_exit');
    dom.intro                   = document.getElementById('intro');
    dom.intro_imgs              = document.getElementById('intro_imgs');
    dom.img_01                  = document.getElementById('img_01');
    dom.img_02                  = document.getElementById('img_02');
    dom.img_03                  = document.getElementById('img_03');
    dom.white_panel            = document.getElementById('white_panel');
    dom.copy_01                 = document.getElementById('copy_01');
    dom.copy_02                 = document.getElementById('copy_02');
    dom.copy_03                 = document.getElementById('copy_03');
    dom.headlines               = document.getElementById('headlines');
    dom.headline_01             = document.getElementById('headline_01');
    dom.headline_02             = document.getElementById('headline_02');
    dom.resolve                 = document.getElementById('resolve');
    dom.resolve_headline_1      = document.getElementById('resolve_headline_1');
    dom.resolve_headline_2      = document.getElementById('resolve_headline_2');
    dom.resolve_logo            = document.getElementById('resolve_logo');
    dom.resolve_tagline_01      = document.getElementById('resolve_tagline_01');
    dom.resolve_tagline_02      = document.getElementById('resolve_tagline_02');
    dom.cta                     = document.getElementById('cta');

    dom.colour_logo             = document.getElementById('colour_logo');
    dom.intro_logo              = document.getElementById('intro_logo');
    dom.ctatext              = document.getElementById('ctatext');


    

}

function eventListeners() {
    console.log("----- eventListeners");
    dom.bgExit.addEventListener('click', exitHandler, false);
    dom.bgExit.addEventListener('mouseover', btnOver, false);
    dom.bgExit.addEventListener('mouseout',  btnOut, false); 
}


function reset() {
    console.log("----- resetAnimations"); 
    killtimeline(animationTimeline);
    killtimeline(imagesTimeline);
    killtimeline(headline_tl);


    TweenMax.set(headlines, {y:100});
    
    TweenMax.set(dom.intro_logo, {opacity:1});
    TweenMax.set(dom.colour_logo, {opacity:0});

    TweenMax.set(dom.headline_01, {opacity:0});
    TweenMax.set(dom.headline_02, {opacity:1});
    TweenMax.set([dom.copy_01, dom.copy_02, dom.copy_03], {opacity:0, y:0});
    TweenMax.set(white_panel, {y:175});
    TweenMax.set(headlines, {y:100});

 

    TweenMax.set(dom.resolve_headline_1, {opacity:1});
    TweenMax.set(dom.resolve_headline_2, {opacity:1});
    TweenMax.set(dom.resolve_logo, {opacity:1});
    TweenMax.set(dom.resolve_tagline_01, {opacity:1, y:0});
    TweenMax.set(dom.resolve_tagline_02, {opacity:1, y:0});
    TweenMax.set(dom.cta, {scale:0});
    TweenMax.set(dom.ctatext, {opacity:0});


    TweenMax.set(dom.intro_imgs, {opacity:1});
    

    TweenMax.set(dom.img_01, {opacity:0, scale:1, rotationZ:0.001});
    TweenMax.set(dom.img_02, {opacity:0, scale:1, rotationZ:0.001});
    TweenMax.set(dom.img_03, {opacity:0, scale:1, rotationZ:0.001});

}



 function createAnimations() {
    console.log("----- createAnimations");
    

    
    imagesTimeline = new TimelineMax({paused:true});
    imagesTimeline.to(dom.img_01, 1 , {opacity: 1, ease:Power1.easeOut});
    imagesTimeline.to(dom.img_01, 2.7 , {delay:-1, scale: 1.1, ease: Power0.easeNone});
    imagesTimeline.to(dom.img_02, 1 , {delay:-0.5, opacity: 1, ease:Power1.easeOut});
    imagesTimeline.to(dom.img_02, 2.5 , {delay:-1, scale: 1.1, ease: Power0.easeNone});

    imagesTimeline.to(dom.img_03, 1 , {delay:-0.5, opacity: 1, ease:Power1.easeOut});
    imagesTimeline.to(dom.img_03, 2.5 , {delay:-1, scale: 1.1, ease: Power0.easeNone});
    imagesTimeline.to(dom.intro_imgs, 0.5 , {delay:-0.5, opacity: 0, ease: Sine.easeInOut});



    // 1
    animationTimeline = new TimelineMax({paused:true});


    ///// intro frame
    animationTimeline.to(dom.resolve_headline_1, 0.5, {delay:1, opacity:0});
    animationTimeline.to(dom.resolve_headline_2, 0.5,{delay:-0.5, opacity:0});
    animationTimeline.to(dom.resolve_logo, 0.5, {delay:-0.5, opacity:0});
    animationTimeline.to(dom.resolve_tagline_01, 0.5, {delay:-0.5, opacity:0});
    animationTimeline.to(dom.resolve_tagline_02, 0.5, {delay:-0.5, opacity:0, onComplete:setAssetsForEndFrame});
    ///// intro frame
    
    
    animationTimeline.addLabel("images");
    animationTimeline.to(dom.copy_01, 1 , {opacity: 1, y:0, ease: Sine.easeInOut, onStart:playImages});
    animationTimeline.to(dom.copy_01, 0.5 , {delay:1, opacity: 0, y:0, ease: Sine.easeInOut});
    
    animationTimeline.to(dom.copy_02, 1 , {delay:-0.5, opacity: 1, y:0, ease: Sine.easeInOut});
    animationTimeline.to(dom.copy_02, 0.5 , {delay:1.2, opacity: 0, y:0, ease: Sine.easeInOut});
    
    animationTimeline.to(dom.copy_03, 1 , {delay:-0.5, opacity: 1, y:0, ease: Sine.easeInOut});
    animationTimeline.to(dom.copy_03, 0.5 , {delay:1, opacity: 0, y:0, ease: Sine.easeInOut});

    
    /////// 2
    animationTimeline.to(dom.white_panel, 1 , {delay:-0.5, ease: Sine.easeInOut});
    animationTimeline.to(dom.headlines, 1 , {delay:-0.8, y:0, ease: Sine.easeInOut});
    animationTimeline.to(dom.colour_logo, 0.5 , {delay:-1, opacity:1, ease: Sine.easeInOut});
    animationTimeline.to(dom.intro_logo, 0.5 , {delay:-1, opacity:0, ease: Sine.easeInOut});
    animationTimeline.to(dom.headline_01, 1 , {delay:-1, opacity: 1, ease: Sine.easeInOut, onComplete:animateHeadline});
    

    //// 2 out
    animationTimeline.to(dom.headline_01, 0.5 , {delay:1.5, opacity: 0, ease: Power1.easeIn});
    animationTimeline.to(dom.headline_02, 0.5 , {delay:-0.4, opacity: 0, ease: Power1.easeIn});
    animationTimeline.to(dom.colour_logo, 0.5 , {delay:-0.4, opacity: 0, ease: Power1.easeIn});

    ////// 3 in
    animationTimeline.to(dom.resolve_headline_1, 1 , {delay:0.2, opacity: 1, ease: Power1.easeOut});
    animationTimeline.to(dom.resolve_headline_2, 1 , {delay:-0.8, opacity: 1, ease: Power1.easeOut});
    animationTimeline.to(dom.resolve_logo, 1 , {delay:-0.8, opacity: 1, ease: Power1.easeOut});
    animationTimeline.to(dom.resolve_tagline_01, 1 , {delay:-0.8, opacity: 1, y:0, ease: Power1.easeOut});
    animationTimeline.to(dom.resolve_tagline_02, 1 , {delay:-0.8, opacity: 1, y:0, ease: Power1.easeOut, onComplete:loopCheck});
    
    // cta

    // Split Text Timeline - Headlines
    headline_tl = new TimelineMax({paused:true, onComplete:resumeAnimaiton});
    headline_SplitText = new SplitText(dom.headline_02, {type:"words, chars"}), 
    headline_chars = headline_SplitText.chars;
    headline_tl.staggerFrom(headline_chars, 0.01, {delay:0, opacity:0}, 0.04, "+=0");
    headline_tl.to(dom.cta, 0.5 , {delay:0, scale:1, ease: Back.easeOut.config(1.7)});
    headline_tl.to(dom.ctatext, 0.5 , {delay:-0.1, opacity: 1, ease: Power1.easeOut});
     

}

function setAssetsForEndFrame () {
    TweenMax.set(dom.resolve_headline_1, {opacity:0});
    TweenMax.set(dom.resolve_headline_2, {opacity:0});
    TweenMax.set(dom.resolve_logo, {opacity:0});
    TweenMax.set(dom.resolve_tagline_01, {opacity:0, y:20});
    TweenMax.set(dom.resolve_tagline_02, {opacity:0, y:20});
    TweenMax.set(dom.cta, {scale:0});
}


function animateHeadline () {
  pauseAnimaiton ()
  headline_tl.gotoAndPlay(0);
}

function pauseAnimaiton () {
  animationTimeline.pause();
}

function resumeAnimaiton () {
  animationTimeline.resume();
}


 function killtimeline(timeline) {
  if (timeline) {
    timeline.kill();
    timeline.gotoAndStop(0);
  }
}



function play() {
    console.log("----- play");
    playCount ++;
    animationTimeline.gotoAndPlay(0);
    //imagesTimeline.gotoAndPlay(0);
}

function playImages () {
  imagesTimeline.gotoAndPlay(0);
}


function loopCheck() {

  if (playCount < playLimit) {
    setTimeout(function(){ loop() }, 3000);
  } 

}

function loop() {
  playCount ++;
  reset();
  animationTimeline.gotoAndPlay("images");
}


function exitHandler(e) {
    console.log("----- exitHandler");
    Enabler.exit("exit");
    //playCount = 0;
    //reset();
    //play() 
}

// CTA Button
function btnOver(){
	//TweenMax.to(dom.cta, 0.5, { boxShadow: "0px 2px 8px 1px rgba(0, 0, 0, 0.4)", ease:Power1.easeInOut}); 
}
function btnOut(){
    //TweenMax.to(dom.cta, 0.3, { boxShadow: "0px 1px 6px 1px rgba(0, 0, 0, 0.2)", ease:Power1.easeInOut});
}


function preload () {
  console.log("------- politeInit()")
  preload = new createjs.LoadQueue(false);
      
  manifest = [
    
    
    {src:Enabler.getUrl('images/img_01.jpg'), id:"img_01"},
    {src:Enabler.getUrl('images/img_02.jpg'), id:"img_02"},
    {src:Enabler.getUrl('images/img_03.jpg'), id:"img_03"},
      
    
    {src:"js/SplitText.min.js", id:"style"}

  ];

  preload.addEventListener("complete", handleManifastLoadComplete);
  preload.addEventListener("fileload", handleFileLoaded);
  preload.loadManifest(manifest);
}


function handleFileLoaded(event) {
      console.log("------- handleFileLoaded()")
      var item = event.item;
      var id = item.id;
      var result = event.result;
      console.log("id = " + item.id);
      
      switch (item.type){
          case createjs.LoadQueue.JAVASCRIPT:
          document.body.appendChild(result);
          break;
      }
    }

function handleManifastLoadComplete(event) {
    console.log("----- handleManifastLoadComplete()")
    setUp();
}


window.addEventListener('load', preInit);

function preInit() {
  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
}