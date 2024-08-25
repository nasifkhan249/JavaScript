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



let arrs=[[100,2,10],[10,20,30]];

for(let i =0;i<arr.length;i++){
    let sum=0;
    for(let j =0;j<arr[i].length;j++){
        sum+=arr[i][j];
    };
    console.log(sum);
    
}



function generatePascalsTriangle(numRows) {
  // Initialize the triangle with the first row
  let triangle = [[1]];

  // Generate each row
  for (let i = 1; i < numRows; i++) {
      let prevRow = triangle[i - 1];
      let newRow = [1]; // Start each row with 1

      // Fill in the middle values
      for (let j = 1; j < i; j++) {
          newRow.push(prevRow[j - 1] + prevRow[j]);
      }

      // End each row with 1
      newRow.push(1);
      triangle.push(newRow);
  }

  // Print the triangle
  for (let row of triangle) {
      console.log(row.join(' '));
  }
}

// Example usage:
generatePascalsTriangle(5);




