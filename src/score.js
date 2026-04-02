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
    if(average == "" || group_average == "" || standard_deviation == "" || group_strength == "") return NaN
    
    average = Number(average)
    group_average = Number(group_average)
    standard_deviation = Number(standard_deviation)
    group_strength = Number(group_strength)

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

    console.log(dom.value)
    console.log(rScore)
}
