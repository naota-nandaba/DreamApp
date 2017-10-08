el2 = el.charAt(0).toUpperCase() + (el.slice(1, el.length));

$doc = $('td[width=750]');

for (var j = 0; j < $doc.children().length; j++) {
  if ($doc.children().eq(j).text().includes(el2)) {
    console.log($doc.children().eq(j).text())
  }
}

/*

*/

// var titlesArr = [];
//
// titlesArr.push($('font[size=4]').filter(function(i, el) {
//   return $(this).attr('color') === '#000000';
// }).text().replace(/\s{2}/g, '.'));
//
// titlesArr[0].split(",")

el = el.charAt(0).toUpperCase() + (el.slice(1, el.length));

// var title = titlesArr[0].match(el);

$doc = $('td[width=750]');

for (var j = 0; j < $doc.children().length; j++) {
  if ($doc.children().eq(j).text().includes(el)) {
    console.log($doc.children().eq(j).text())
