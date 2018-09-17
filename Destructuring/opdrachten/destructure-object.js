/* Use profile destructuring to capture the first and last name of the profile
 * */
var profile = {
  fname: 'Ryan',
  lname: 'Cromwell',
  bday: new Date('1979-01-02')
}

// next two lines should be removed
var fname = profile.fname;
var lname = profile.lname;

console.log(fname, lname); // Ryan Cromwell
