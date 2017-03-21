var pigTranslator = function() {
  var firstLetter;
  var loadedWord;
  var pigWord;
  var isVowel;

  function loadWord(w) {
    loadedWord = w;
    return loadedWord;
  }

  function findFirstLetter(w) {
    var word = loadWord(w);
    var firstLetter = word.charAt(0);
    return firstLetter;
  }

  function loopThru(w){

  }
  function findVowel(w) {
    for(var i = 0; i < w.length; i++) {
      console.log(w.[i]);
    if (( [i].toUpperCase === 'A') ||
        ( [i].toUpperCase === 'E')  ||
        ( [i].toUpperCase === 'I')  ||
        ( [i].toUpperCase === 'O')  ||
        ( [i].toUpperCase === 'U')) {
          isVowel = isItVowel;
          console.log('yes there is a vowel ' + isVowel);
          return isVowel;
        }
    }
  }

  function addAy() {

  }

  function conCat() {

  }
  return {
    loadWord: loadWord,
    findFirstLetter: findFirstLetter,
    addAy: addAy,
    conCat: conCat,
    findVowel: findVowel
  };
};

var something = pigTranslator().findVowel('glove');
console.log(something);


