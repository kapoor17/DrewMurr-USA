const pageScrollButton = document.querySelector(".page-scroll-button");
const timelineMarker=document.querySelector(".timeline-marker");
const timelineWrapper=document.querySelector(".timeline-wrapper");
const yearWrapper=document.querySelector(".year-wrapper");
const lottiePlayer=document.querySelector(".timeline-wrapper lottie-player");

const calculateTopMargin=()=>{
  var topMargin=(timelineWrapper.querySelector(".year-divider")).clientHeight;
  timelineMarker.style.marginTop=topMargin + 5 +"px"; //5px for added margin after the border
}

const moveMarker=(index)=>{
  var oneYearWapperHeight=yearWrapper.clientHeight;
  timelineMarker.style.top = (index*oneYearWapperHeight)+ 5 + "px" //5px for added margin after the border
}

const markerConfig=(source,n,width='80px')=>{
  var oneYearWapperHeight=yearWrapper.clientHeight;
  lottiePlayer.load(source);
  lottiePlayer.style.height=(oneYearWapperHeight)*n+"px";
  lottiePlayer.style.width=width;
}

calculateTopMargin();
window.onresize=calculateTopMargin;

new fullpage("#fullpage",{
  autoScrolling:true,
  scrollingSpeed:1250,
  //navigation:true,
  fitToSection:true,
  marginLeft:"auto",
  marginRight:"auto",
  
  onLeave: (origin, destination, direction) => {
    if(destination.index===0){
      pageScrollButton.style.backgroundColor = "#a0dcff";
      timelineWrapper.style.opacity="1";
      moveMarker(0);
    }
    else if(destination.index===1){
      pageScrollButton.style.backgroundColor = "#6cbff0";
      timelineWrapper.style.opacity="1";
      markerConfig("./Assets/animations/marker-4-animation.json",5);
      moveMarker(1);

    }
    else if(destination.index===2){
      pageScrollButton.style.backgroundColor = "#4ea2d3";
      markerConfig("./Assets/animations/marker-3-animation.json",4,'70px');
      moveMarker(7);
    }
    else if(destination.index===3){
      pageScrollButton.style.backgroundColor = "#3684b1";
      markerConfig("./Assets/animations/marker-2-animation.json",1,'55px');
      moveMarker(11);
    }
    else if(destination.index===4){
      pageScrollButton.style.backgroundColor = "#2d7097";
      markerConfig("./Assets/animations/marker-1-animation.json",1,'55px');
      moveMarker(12);
    }
    else if(destination.index===5){
      pageScrollButton.style.backgroundColor = "#105983";
      markerConfig("./Assets/animations/marker-2-animation.json",1,'55px');
      moveMarker(13);
    }
    else if(destination.index===6){
      pageScrollButton.style.backgroundColor = "#033653";
      markerConfig("./Assets/animations/marker-1-animation.json",1,'55px');
      moveMarker(14);
    }
  }
});

pageScrollButton.addEventListener("click",function(){
  fullpage_api.moveSectionDown();
})

