const pageScrollButton = document.querySelector(".page-scroll-button");

new fullpage("#fullpage",{
  autoScrolling:true,
  //navigation:true,
  fitToSection:true,
  marginLeft:"auto",
  marginRight:"auto",
  
  onLeave: (origin, destination, direction) => {
    if(destination.index===0){
      pageScrollButton.style.color = "#87e5ff";
    }
    if(destination.index===1){
      pageScrollButton.style.color = "#8DC8D9";
    }
    if(destination.index===2){
      pageScrollButton.style.color = "#43A3BD";
    }
    if(destination.index===3){
      pageScrollButton.style.color = "#6A97A3";
    }
  }
});

pageScrollButton.addEventListener("click",function(){
  fullpage_api.moveSectionDown();
})