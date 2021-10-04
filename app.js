const pageScrollButton = document.querySelector(".page-scroll-button");
const timelineMarker=document.querySelector(".timeline-marker");

const calculateTopMargin=()=>{
  var topMargin=(document.querySelector(".year-wrapper").clientHeight)/2;
  timelineMarker.style.marginTop=topMargin+"px";
}

const moveMarker=(index)=>{
  var oneYearWapperHeight=(document.querySelector(".year-wrapper").clientHeight);
  timelineMarker.style.top=index*oneYearWapperHeight + "px"
}
calculateTopMargin();
window.onresize=calculateTopMargin;

new fullpage("#fullpage",{
  autoScrolling:true,
  //navigation:true,
  fitToSection:true,
  marginLeft:"auto",
  marginRight:"auto",
  
  onLeave: (origin, destination, direction) => {
    if(destination.index===0){
      pageScrollButton.style.color = "#87e5ff";
      moveMarker(destination.index);
    }
    else if(destination.index===1){
      pageScrollButton.style.color = "#8DC8D9";
      moveMarker(destination.index);

    }
    else if(destination.index===2){
      pageScrollButton.style.color = "#43A3BD";
      moveMarker(destination.index);

    }
    else if(destination.index===3){
      pageScrollButton.style.color = "#6A97A3";
      moveMarker(destination.index);

    }
  }
});

pageScrollButton.addEventListener("click",function(){
  fullpage_api.moveSectionDown();
})