/* Use object destructuring to capture the twitter link of the profile object
 * */

var profile = {
  fname: 'Ryan',
  lname: 'Cromwell',
  social: {
    twitter: "https://twitter.com/hearsparkbox",
    facebook: "https://www.facebook.com/seesparkbox"
  }
}

var twitter = profile.social.twitter;
var facebook = profile.social.facebook;

console.log(twitter); // https://twitter.com/hearsparkbox
console.log(facebook); // https://www.facebook.com/seesparkbox
