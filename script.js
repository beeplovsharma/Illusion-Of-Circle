gsap.to("#illusion",{
    fontStretch : "500%",
    fontWeight:300,
    delay:1,
    duration:0.5,
    repeat:-1,
    yoyo:true
})

const circle1 = document.querySelector("#circle-1");
const circle2 = document.querySelector("#circle-2");
const circle3 = document.querySelector("#circle-3");
const circle4 = document.querySelector("#circle-4");

const content = document.querySelector("#content");
content.addEventListener("mouseenter",move())

const totalWidth = content.getBoundingClientRect().width; //1029
const totalHeight = content.getBoundingClientRect().height; //511

function move(){
    content.addEventListener("mousemove",function(dets){
        // console.log((dets.x - totalWidth/2)/(totalWidth/100));
        // console.log(((dets.y - totalHeight/2) - 30)/2.84/2);
        circle1.style.transform = `translate(${(dets.x - totalWidth/2)/(totalWidth/100)}%,${((dets.y - totalHeight/2) - 30)/2.84/2}%)`;
        circle2.style.transform = `translate(${-(dets.x - totalWidth/2)/(totalWidth/100)}%,${((dets.y - totalHeight/2) - 30)/2.84/2}%)`;
        circle3.style.transform = `translate(${(dets.x - totalWidth/2)/(totalWidth/100)}%,${-((dets.y - totalHeight/2) - 30)/2.84/2}%)`;
        circle4.style.transform = `translate(${-(dets.x - totalWidth/2)/(totalWidth/100)}%,${-((dets.y - totalHeight/2) - 30)/2.84/2}%)`;
    })
}

content.addEventListener("mouseleave",function(){
    circle1.style.transform = `translate(0,0)`;
        circle2.style.transform = `translate(0,0)`;
        circle3.style.transform = `translate(0,0)`;
        circle4.style.transform = `translate(0,0)`;
})