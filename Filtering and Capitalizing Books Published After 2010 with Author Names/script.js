
var list = [2008,2006,2002,2004,2010,2020,2001,2022,2015,2012,2000];
var author = [" Khwaja Ahmad Abbas","Maghfoor Ahmad Ajazi","Syed Mujtaba Ali","Aga Shahid Ali"," Chetan Bhagat","Jagadish Bhagwati","Mannu Bhandari","Thoppil Bhasi"," Jagadish Chandra Bose"," Khushwant Singh"," R. K. Narayan"];

console.log(list);
console.log(author);

var bookspublishbefore2010 = list.filter((el)=> {
    return el<2010;
});
var fltauthor = author.filter((el)=> {
    return el.endsWith('i');
});
console.log(bookspublishbefore2010.concat(fltauthor));

var bookspublishafter2010 = list.filter((el)=> {
    return el>=2010;
})
var remauthor = author.filter((el)=> {
    return el.startsWith(' ');
});

console.log(bookspublishafter2010.concat(remauthor));
