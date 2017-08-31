var DnaTranscriber = function(dna) {
  this.dna = dna;
};

DnaTranscriber.prototype.toRna = function() {
  let dna = this.dna.split('');
  for (var i = 0; i < dna.length; i++) {
    switch(dna[i]) {
      case 'G':
        dna[i] = 'C';
        break;
      case 'C':
        dna[i] = 'G';
        break;
      case 'T':
        dna[i] = 'A';
        break;
      case 'A':
        dna[i] = 'U';
        break;
    }
  }
  return dna.join('');
};

var dna = new DnaTranscriber('GCTA');
dna.toRna();
