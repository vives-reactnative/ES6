// exercise 1
// Use object destructuring to capture the twitter link of the profile object
const profile = {
  fname: "Ryan",
  lname: "Cromwell",
  social: {
    twitter: "https://twitter.com/hearsparkbox",
    facebook: "https://www.facebook.com/seesparkbox"
  }
};

// write next 2 lines in one line
const twitter = profile.social.twitter;
const facebook = profile.social.facebook;

console.log(twitter); // https://twitter.com/hearsparkbox
console.log(facebook); // https://www.facebook.com/seesparkbox

// exercise 2
// refactor with nested destructuring
function getAvgTemp() {
  const weather = {
    location: "Toronto",
    unit: "Celsius",
    today: { max: 2.6, min: -6.3 },
    tomorrow: { max: 3.2, min: -5.8 }
  };

  // write next 4 lines in one line
  const maxToday = weather.today.max;
  const minToday = weather.today.min;
  const maxTomorrow = weather.tomorrow.max;
  const minTomorrow = weather.tomorrow.min;

  return {
    max: (maxToday + maxTomorrow) / 2.0,
    min: (minToday + minTomorrow) / 2.0,
    unit: weather.unit
  };
}
console.log(getAvgTemp());
