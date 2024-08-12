// let grade=-1;
// let y = gradeConverter(grade);
// console.log(y);




function getLetterGrade(grade) {
    let letterGrade;
  
    switch (true) {
      case (grade >= 90 && grade <= 100):
        letterGrade = 'A';
        break;
      case (grade >= 80 && grade < 90):
        letterGrade = 'B';
        break;
      case (grade >= 70 && grade < 80):
        letterGrade = 'C';
        break;
      case (grade >= 60 && grade < 70):
        letterGrade = 'D';
        break;
      case (grade >= 0 && grade < 60):
        letterGrade = 'F';
        break;
      default:
        letterGrade = 'Invalid grade';
    }
  
    return letterGrade; // Return the letter grade
  }


  function season(month) {
    let result;

    switch (month) {
        case 11:
        case 0:
        case 1:
            result = 'Winter';
            break;
        case 2:
        case 3:
        case 4:
            result = 'Spring';
            break;
        case 5:
        case 6:
        case 7:
            result = 'Summer';
            break;
        case 8:
        case 9:
        case 10:
            result = 'Fall';
            break;
        default:
            result = 'Invalid month';
    }
    return result;
}

let currentMonth = new Date().getMonth();
let seasonResult = season(currentMonth);
console.log(seasonResult); // Output will depend on the current month





let arr = [[1, 2, 3, 4, 5]];
for (let i = 0; i < arr.length; i++) { // Outer loop for rows
    for (let j = 0; j < arr[i].length; j++) { // Inner loop for columns
        console.log(arr[i][j]); // Print each element
    }
}

