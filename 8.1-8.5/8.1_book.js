
function book (){
   const buch={
   "book name": 'win the race',
   author: 'taufiq zayyad',
   'publish year': '2022',
   genre : 'Sci-Fi',
   'pages number': 1029
}
console.log(`the Book '${buch['book name']}'  was written by ${buch.author} and published in ${buch['publish year']}`);
}
console.log(book());