
function generate(){
    console.log( Math.floor(Math.random()*16));
}

var delay = setInterval(generate,3000);

function msg() {
    console.log("Generating......");
}
setInterval(msg, 1000);