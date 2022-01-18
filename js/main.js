//+++++ Lev1_1 +++++
function intro() {
    let a = 1 + 3;
    let mytext = "Hello World ";
    console.log(mytext + '1+3 = ' + a);
}
intro();

//+++++ lev1_2 ++++++
function intro2(paramName) {
    let varName = "SuperCode";
    console.log("Hi, " + varName + ". Mein Name ist " + paramName + ".");
}
intro2("Sara");
//+++++ lev1_3 ++++++
function intro3(name, stadt, alter) {
    console.log("Hallo, mein Name ist " + name + " Ich bin " + alter + " Jahre alt. Ich komme aus " + stadt);
}
intro3("SuperCod", "Düsseldorf", 27);

//+++++ lev1_5 ++++++
function math(num1, num2) {
    let multi = num1 * num2;
    console.log(multi);
    let division = num1 / num2;
    console.log(division);
}
math(10, 2);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);
