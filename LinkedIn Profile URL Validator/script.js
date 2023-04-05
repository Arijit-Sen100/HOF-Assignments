
let validateurl = /[(https:\/\/www\.linkedin.com\/in\/)\w\d\=&%_?~-]{5,30}[a-zA-z0-9]?/g;

let pattern1 = "https://www.linkedin.com/in/arijit-sen-4a64661b1/AS100"; 
let pattern2 = "https://www.linkedin.com/in/pratibha-kumari-jha/pK3"; 
let pattern3 = "https://www.linkedin.com/in/anish-sinha-307094207/re4@";
let pattern4 = "https://www.linkedin.com/in/ramnarayanjha/1";

let result1 = validateurl.test(pattern1);
let result2 = validateurl.test(pattern2);
let result3 = validateurl.test(pattern3);
let result4 = validateurl.test(pattern4);

console.log(
    result1,
    result2,
    result3,
    result4
);
