class Year {
  constructor(year) {
    this.year = year;
  } // end constructor

  isLeap() {
    if (this.year % 400 === 0) {
      return true;
    } // end check if divisible by 400
    else if (this.year % 100 === 0) {
      return false;
    } // end check if divisible by 100
    else if (this.year % 4 === 0) {
      return true;
    } // end check if divisible by 4
    else {
      return false;
    } // end default
  } // end isLeap method
} // end Year class

export default Year;
