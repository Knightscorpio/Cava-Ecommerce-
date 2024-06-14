var images = [
    "https://i.pinimg.com/736x/f0/0b/1e/f00b1e1418af0475866d10b2eb13d14b.jpg",
    "https://i.pinimg.com/564x/bd/b2/43/bdb2430fe928d96d98c5d352efe59545.jpg",
    "https://i.pinimg.com/736x/21/f0/9c/21f09c41dc6c7fb24c4fb63a315e75dc.jpg",
    "https://i.pinimg.com/736x/d3/75/fa/d375fa1c27b8fbd5efc89f2a9d67fbc5.jpg"
];
var num = 0;

function next(){
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length){
        num = 0;
    }
    slider.src = images[num];
}
function prev(){
    var slider = document.getElementById('slider');
    num--;
    if(num < 0){
        num = images.length-1;
    }
    slider.src = images[num];
}

