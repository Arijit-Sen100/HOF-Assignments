
let validateurl =/[(http:\/\/).|https:\/\/.)a-zA-Z0-9\0\!\#\$\%\&\*]+\.[a-zA-Z]{1,3}/gi


let pattern1 = "http://.www.google.com";
let pattern2 = "https://GOOGLE.com";
let pattern3 = "https://yahoo.com";
let pattern4 = "http://someonegetsin540#$%^.net";
let pattern5 = "https://ssc.gov.in";
let pattern6 = "http://findmehere.w3233.!3.com"


const result1 = validateurl.test(pattern1);
const result2 = validateurl.test(pattern2);
const result3 = validateurl.test(pattern3);
const result4 = validateurl.test(pattern4);
const result5 = validateurl.test(pattern5);
const result6 = validateurl.test(pattern6);

console.log(
    result1,
    result2,
    result3,
    result4,
    result5,
    result6);