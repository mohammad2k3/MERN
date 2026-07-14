// let  BLOCKED SCOPED & REDEFINE VARIABLE NOT ALLOWED
// var  FUNCTION SCOPED & GLOBAL SCOPED & REDEFINE OR UPDATE ALLOWED
// const    FIXED CAN'T UPDATE NOR REDIFINE


// var age = 25;
// if(true)
// {
//     console.log(age);
// }

function solve()
{
    var age = 25;
    console.log(age);
}
solve();

{
    let a = 10;
    a = "AHMAD"
    console.log(a);
}

const b = 30;
// b = 40;  NOT ALLOWED
console.log(b);