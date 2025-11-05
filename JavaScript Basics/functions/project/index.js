


// Find the average score and return it
const getAverageScore = (s1, s2, s3, s4, s5) => {
  // Variable for storing total sum
  let total = s1 + s2 + s3 + s4 + s5;

  // Compute average score
  let averageScore = total / 5;

  return averageScore;
};

// Returns the grade based on the average score
const computeGrade = (averageScore) => {
  let grade;

  if (averageScore >= 80) {
    grade = "A";
  } else if (averageScore >= 60) {
    grade = "B";
  } else if (averageScore >= 50) {
    grade = "C";
  } else {
    grade = "F";
  }

  return grade;
};

// Call function and store result
let averageScore = getAverageScore(55, 64, 75, 80, 65);
console.log(`Average Score: ${averageScore}`);

let grade = computeGrade(averageScore);
console.log(`Grade: ${grade}`);
