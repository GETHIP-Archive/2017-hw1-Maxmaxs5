function problemOne()
{
  //Get all the numbers from the form.
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let num3 = parseFloat(document.getElementById('num3').value);
  let num4 = parseFloat(document.getElementById('num4').value);
  let num5 = parseFloat(document.getElementById('num5').value);
  let num6 = parseFloat(document.getElementById('num6').value);

/*
attempt at bonus #1

let num1 = parseFloat(document.getElementById('num1').value.split(","));

  var count = 0;
  for(var i = 0; i < num1.length; ++i) {
        count++;
  }
  if(count == 1) {
    let num1 = parseFloat(document.getElementById('num1').value);
  }

  for(var i = 0; i < count; ++i) {
    num11 = num1[i];
  }
*/

  //Find the average, not including the lowest score.
  let lowest = findMin(num1, num2, num3, num4, num5, num6);
  let average = ((num1 + num2 + num3 + num4 + num5 + num6) - lowest);
  average /= 5;

  //Print it to the console.
  console.log(average);
}

function problemTwo()
{
  //Get all the letter grades from the form.
  let grade1 = document.getElementById('grade1').value;
  let grade2 = document.getElementById('grade2').value;
  let grade3 = document.getElementById('grade3').value;
  let grade4 = document.getElementById('grade4').value;
  let grade5 = document.getElementById('grade5').value;
  let grade6 = document.getElementById('grade6').value;

  //If Honors class, add a 1
  let honorsclass1 = document.getElementById('honorsclass1').checked;
  let honorsclass2 = document.getElementById('honorsclass2').checked;
  let honorsclass3 = document.getElementById('honorsclass3').checked;
  let honorsclass4 = document.getElementById('honorsclass4').checked;
  let honorsclass5 = document.getElementById('honorsclass5').checked;
  let honorsclass6 = document.getElementById('honorsclass6').checked;

  //Compute the GPA
  let GPA = findGPA(grade1, grade2, grade3, grade4, grade5, grade6, honorsclass1, honorsclass2, honorsclass3, honorsclass4, honorsclass5, honorsclass6);

  //Print it to the console.
  console.log(GPA);

  //If it is 3.0 or above, turn the div with id="box" green. Otherwise, turn it red.
  if(GPA >= 3.0)
  {
    document.getElementById("box").style.backgroundColor = "green";
  }
  else
  {
    document.getElementById("box").style.backgroundColor = "red";
  }
}

function findMin(num1, num2, num3, num4, num5, num6)
{
  let list = [num1, num2, num3, num4, num5, num6];
  let minimum = 0;

  for (let i = 1; i < 6; i++) {
    if(list[i] < list[minimum]) {
      minimum = i;
    }
  }

  return list[minimum];
}

function findGPA(grade1, grade2, grade3, grade4, grade5, grade6, honorsclass1, honorsclass2, honorsclass3, honorsclass4, honorsclass5, honorsclass6)
{
  let list = [grade1, grade2, grade3, grade4, grade5, grade6];
  let listhonors = [honorsclass1, honorsclass2, honorsclass3, honorsclass4, honorsclass5, honorsclass6];

  let sum = 0;

  for(let i = 0; i < 6; i++) {
    /*
    Other way to do it

    if(list[i] == 'a' || list[i] == 'A') {
      sum += 4;
      if(listhonors[i] == true) {
        sum += 1;
      }
    }
    else if(list[i] == 'b' || list[i] == 'B') {
      sum += 3;
      if(listhonors[i] == true) {
        sum += 1;
      }
    }
    else if(list[i] == 'c' || list[i] == 'C') {
      sum += 2;
    }
    else if(list[i] == 'd' || list[i] == 'D') {
      sum += 1;
    }
    */
    switch(list[i]) {
      case 'a':
      case 'A':
        sum += 4;
        if(listhonors[i] == true) {
        sum += 1;
        }
        break;
      case 'b':
      case 'B':
        sum += 3;
        if(listhonors[i] == true) {
        sum += 1;
        }
        break;
      case 'c':
      case 'C':
        sum += 2;
        break;
      case 'd':
      case 'D':
        sum += 1;
        break;
    }
  }

  return sum / 6;
}
