var DnaTranscriber = function(dna) {
  this.dna = dna;
};

DnaTranscriber.prototype.toRna = function() {
  
  for (var i = 0; i < this.dna.length; i++) {
    console.log(this.dna.charAt[i]);
    // switch ()
    // this.dna.length
  }
};

var dna = new DnaTranscriber('RNKL');
console.log(dna);
dna.toRna();
