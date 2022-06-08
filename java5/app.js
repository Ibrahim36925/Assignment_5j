// chapter 17 - 20

// Question 1

var mulArray = [[], [], []]
document.write("var mulArray = [ [ ],[ ],[ ] ]");
document.write("<br>")
// Question 2
var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

 for(var i = 0; i < arr.length; i++){
     for(var j = 0; j < arr[i].length; j++){
         document.write(arr[i][j])
     }
     document.write("<br />")
 }



// question 3 



for (i = 1; i <= 10; i++) {
    document.write(i + "<br>")

}

// question 4 



var table = +prompt("Enter a table name")
var length = +prompt("Enter a length")
for (var i = 1; i <= length; i++) {
    document.write(table + "x" +  i + "=" + table * i + "<br>")
}


// Question 5


fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>")
}

for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index  " + i + " is " + fruits[i], "<br>")
}


// Q6 a,b,c,d,e

document.write("<h1> Counting</h1>")
for (i = 1; i <= 15; i++) {

    document.write(i + " ")
}


document.write("<h1>Reverse Counting</h1>")

for (i = 10; i >= 0; i--) {
    document.write(i + " ")
}


document.write("<h1>Even Number</h1>")
for (i = 0; i <= 20; i++) {

    if (i % 2 == 0) {
        document.write(i)
    }
}


document.write("<h1>ODD Number</h1>")
for (i = 0; i <= 20; i++) {

    if (i % 3 == 0) {
        document.write(i)
    }
}


document.write("<h1>Series</h1>")
for (i = 2; i <= 20; i++) {

    if (i % 2 == 0) {
        document.write(i + "k" + "  ")
    }
}


// Q7 

A = ["cake", "apple pie", "cookie", "chips", "patties"];
userInput = prompt("Enter a snack :")
flag = false;
for (i = 0; i <= A.length; i++) {
    if (userInput == A[i]) {

        flag = true;

        userInput = A[i];
        index = i;
    }
}
if (flag == true) {
    document.write(userInput + " is available at index " + index + " in our bakery")
}
else {
    document.write(userInput + " is not available")
}


// Q8
function largestNumber(){
A = [24, 53, 78, 91, 12]
max=0;
for(var i=0;i<A.length;i++){
    if(max<A[i]){
        max = A[i];
    }
}
document.write("Array Items ")
for(var i=0;i<A.length;i++){
     document.write(A[i] , ",")
}
document.write("<br>The Largest number is " + max)
}


// Q9
function SmallestNumber(){
A = [24, 53, 78, 91, 12]
min=A[0];
for(var i=0;i<A.length;i++){
    if(min>A[i]){
        min = A[i];
    }
}
document.write("Array Items ")
for(var i=0;i<A.length;i++){
     document.write(A[i] , ",")
}
document.write("<br>The Smallest number is " + min)
}


// Q10
function rangeNumber(){

for(var i=1; i<=100;i++){
    if(i%5==0)
    {
        document.write(i + ",")
    }
}
}