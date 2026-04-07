import {in_} from "./input.js"

function coteZ(average,group_average,standrad_deviation){
    return (average - group_average)/standrad_deviation;
}

//temporary, only for test
function ifg(group_strength){
    return (group_strength - 75) / 14;
}

/*function ifgz(){

}

function idgz(){

}*/

export function coteR(average, group_average, standard_deviation,group_strength){
    var data = [average,group_average,standard_deviation,group_strength];
    var doms = ["m1","m2","m3","m4"]
    var averages = [0,1,3]

    for(var i = 0; i < 4; i++){
        if(data[i] == "") return NaN;
        data[i] = Number(data[i]);
        if(data[i] == 0) return NaN;
        if(in_(i,averages)){
            console.log(data[i]);
            if(data[i] > 100) document.getElementById(doms[i]).value = 100;
        }
    }

    var Z = coteZ(average,group_average,standard_deviation)
    var IFG = ifg(group_strength)

    return (Z + IFG + 5) * 5;
}

export function showRScore(rScore){
    var dom = document.getElementById("m5");
    
    if(isNaN(rScore)) dom.value = "";
    else{
      dom.value = rScore;
    }

    

    //console.log(dom.value)
    //console.log(rScore)
}
