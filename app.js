const pageScrollButton = document.querySelector(".page-scroll-button");
const timelineMarker=document.querySelector(".timeline-marker");
const timelineWrapper=document.querySelector(".timeline-wrapper");
const yearWrapper=document.querySelector(".year-wrapper");
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

const calculateTopMargin=()=>{
  var topMargin=(yearWrapper.clientHeight)/2;
  timelineMarker.style.marginTop=topMargin+"px";
}

const moveMarker=(index)=>{
  var oneYearWapperHeight=yearWrapper.clientHeight;
  timelineMarker.style.top = index*oneYearWapperHeight + "px"
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
      pageScrollButton.style.color = "#a0dcff";
      timelineWrapper.style.opacity="0";
      moveMarker(1);
    }
    else if(destination.index===1){
      pageScrollButton.style.color = "#6cbff0";
      timelineWrapper.style.opacity="0.75";
      canvas.height=(yearWrapper.clientHeight)*5.5;
      markerHeight();
      moveMarker(1);

    }
    else if(destination.index===2){
      pageScrollButton.style.color = "#4ea2d3";
      canvas.height=(yearWrapper.clientHeight)*4.5;
      markerHeight();
      moveMarker(7);

    }
    else if(destination.index===3){
      pageScrollButton.style.color = "#3684b1";
      canvas.height=(yearWrapper.clientHeight)*1.5;
      markerHeight();
      moveMarker(11);

    }
    else if(destination.index===4){
      pageScrollButton.style.color = "#2d7097";
      canvas.height=(yearWrapper.clientHeight)*1.5;
      markerHeight();
      moveMarker(12);

    }
    else if(destination.index===5){
      pageScrollButton.style.color = "#105983";
      canvas.height=(yearWrapper.clientHeight)*1.5;
      markerHeight();
      moveMarker(13);

    }
    else if(destination.index===6){
      pageScrollButton.style.color = "#033653";
      canvas.height=(yearWrapper.clientHeight)*1.5;
      markerHeight();
      moveMarker(14);

    }
  }
});

pageScrollButton.addEventListener("click",function(){
  fullpage_api.moveSectionDown();
})

const markerHeight=()=>{
  var y = canvas.height;
  var linelength = (y - 60) / 2;
  
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(27, 10);
  context.arcTo(20, 10, 20, 20, 7);
  
  context.strokeStyle="rgb(245, 164, 13)"
  
  context.lineTo(20, 20 + linelength);
  context.arcTo(20, 30 + linelength, 0, 30 + linelength, 7);
  context.arcTo(20, 30 + linelength, 20, 40 + linelength, 7);
  context.lineTo(20, y - 20);
  context.arcTo(20, y - 10, 30, y - 10, 7);
  
  context.stroke();
}
