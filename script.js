var hobbies = [
  "running",
  "swimming",
  "painting",
  "writing",
  "reading",
  "socializing"
];

//console.log(hobbies.length);

hobbies.push("puzzling");
console.log(hobbies.length);
console.log(hobbies[2]);
hobbies.pop();
console.log(hobbies);
hobbies.splice(3, 0, "traveling", "biking");
console.log(hobbies);
hobbies.shift();
hobbies.unshift("hiking");
console.log(hobbies);

var goals = [
  "Finish second project",
  "Finish Javascript Fundamentals class",
  "Apply for SELT job"
];

console.log(goals);

var allTheThings = hobbies.concat(goals);
console.log(allTheThings);

var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}`;
});

console.log(plans);
