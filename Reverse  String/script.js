
var input ="HELLOWORLD";
console.log(input);
let n=input.length;
for(i=n-1;i>=0;i--);

let st=input.split('');
let rev=(st.reverse().join(''));

function Myrev() {
    console.log(rev);
}

setTimeout(Myrev,2000);