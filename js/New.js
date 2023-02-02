

/*      Խնդիր 1 
Բեռնատարը 76 կմ/ժ արագությամբ շարժվելով անցավ 1064 կմ:
Քանի՞ ժամ ծախսեց բեռնատարը այդ ճանապարհի վրա:*/

function truckMovingTime(speed = 76, distance = 1064) {
    return distance / speed
}
let truckTime = truckMovingTime();
console.log(truckTime)

/*      Խնդիր 2
Ստուգել արդյոք մուտքագրված թիվը հանդիսանում է և_ի բաժանարար թե ոչ*/



/*function checkNumber(x= +prompt("Մուտքագրեքթիվը")){
    if(x%7==0){
        alert(x/7)
    }
    else{
        alert("Ձեր մուտքագրաց թիվը չի հանդիսանում 7-ի բաժանարար");
    }
}
checkNumber();*/

/*      Խնդիր 3
Մի դասասենյակում կա 14 նստարան, իսկ երկրորդում 3-ով քիչ:
Քանի՞ նստարան կա երկու դասասենյակներում միասին:*/

function classRoomChair(class1, class2 = class1 - 3) {
    let allChaircoun = class1 + class2
    console.log(`Ընդհանուր նստարանների թիվն  է ${allChaircoun}`);
}
classRoomChair(14);

/*     Խնդիիր 4 
Գտնել մուտքագրած 2 արժեքների ամենափոքր ընդհանուր բաժանարարը*/

function commonDivider(a, b) {
    if (a < b) {
        for (let i = a; i > 0; i--) {
            if (a / i == parseInt(a / i) && b / i == parseInt(b / i)) {
                console.log(i);
                break
            }
        }
    }
    else if (a > b) {
        for (i = b; i > 0; i--) {
            if (a / i == parseInt(a / i) && b / i == parseInt(b / i)) {
                console.log(i);
                break
            }
        }

    }
}
commonDivider(35, 105)


/*         Խնդիր 5
Արմենը Աննայից մեծ է 5 տարով։
Քանի տարեկան կլինի Աննան երբ Արմենը 38 տարեկան է*/

function ageDifference(armen,anna = armen - 5){
    console.log(anna)
}
ageDifference(38)



let arr = [4,3,9,2,5,15,16,2,17,20];
let count = 0;
for ( let i = 0; i < arr.length;i++){
    count+=arr[i]
}console.log(count);
