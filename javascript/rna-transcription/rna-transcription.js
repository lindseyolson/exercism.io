var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna_string) {
  let dna = dna_string.split('');
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
        default:
          throw Error('Invalid input');
      }
    }
  return dna.join('');
};


module.exports = DnaTranscriber;
