function shout(string) {
  return string.toUpperCase();
};

function whisper(string) {
  return string.toLowerCase();
};

function logShout(string) {
  console.log(string.toUpperCase());
};

function logWhisper(string) {
  console.log(string.toLowerCase());
};

function sayHiToGrandma(string) {
  var test = string
  if (test.toLowerCase() === test) {
    return console.log("I can't hear you!");
  }
  else if (test.toUpperCase() === test) {
    return console.log("YES INDEED!");
  }
  else if (test === "I love you, Grandma.") {
    return console.log("I love you, too.");
  }
};
