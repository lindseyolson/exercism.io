class Transcriptor {

  toRna(dnaStrand) {
    let dna = dnaStrand.split('');
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
          throw Error('Invalid input DNA.');
      } // end switch
    } // end loop
    return dna.join('');
  } // end toRNA method

} // end Transcriptor class

export default Transcriptor;
