// let speed = $("#speed");
// let updatedSpeed;

// speed.keyup(function() {
//   updatedSpeed = Math.round(speed.val()*180/100)-45;

//   $("#speedbox-score").css("transform","rotate("+updatedSpeed+"deg)");
//   console.log(updatedSpeed);
// });


function resetForm() {
    document.getElementById("speedbox-score").style.transform = "rotate(-45deg)";
    document.getElementById("unit").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}

function calculator() {

    var input = parseInt(document.getElementById("input").value) || 0;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var resultD = document.getElementById("result");
    var speedbar = document.getElementById("speedbox-score");
    var resUnit = document.getElementById("unit");


    if (input <= 0) {
        alert("Choose :)");
        return false
    }

    if (from == 0 || to === 0) {
        alert("Please select again.")
        return false
    }

    if (from == to) {
        alert("Please select a different unit.")
        return false
    }

    var result = 0
    if (from == 1) {
        if (to == 0) {
            alert("Please select units to convert.")
            return false
        } else if (to == 2) {
            result = input * 0.6;
            resUnit.innerHTML = "Mt/hr"
        } else if (to == 3) {
            result = input * 0.0006;
            resUnit.innerHTML = "Km/hr"
        } else if (to == 4) {
            result = input * 0.000373;
            resUnit.innerHTML = "Mph"
        } else if (to == 5) {
            result = input / 1798740000000;
            resUnit.innerHTML = "Ls"
        }
        //เหลือความเร็วแสง

    } else if (from == 2) {
        if (to == 0) {
            alert("Please select units to convert.")
            return false
        } else if (to == 1) {
            result = input * 1.666667;
            resUnit.innerHTML = "Cm/min"
        } else if (to == 3) {
            result = input * 0.001;
            resUnit.innerHTML = "Km/hr"
        } else if (to == 4) {
            result = input * 0.000621;
            resUnit.innerHTML = "Mph"
        } else if (to == 5) {
            result = input * 0.00015747;
            resUnit.innerHTML = "Ls"
        }
        //เหลือความเร็วแสง

    } else if (from == 3) {
        if (to == 0) {
            alert("Please select units to convert.")
            return false
        } else if (to == 1) {
            result = input * 1666.666667;
            resUnit.innerHTML = "Cm/min"
        } else if (to == 2) {
            result = input * 1000;
            resUnit.innerHTML = "Mt/hr"
        } else if (to == 4) {
            result = input * 0.621371;
            resUnit.innerHTML = "Mph"
        } else if (to == 5) {
            result = input * 157.47;
            resUnit.innerHTML = "Ls"
        }
        //เหลือความเร็วแสง

    } else if (from == 4) {
        if (to == 0) {
            alert("Please select units to convert.")
            return false
        } else if (to == 1) {
            result = input * 2682.24;
            resUnit.innerHTML = "Cm/min"
        } else if (to == 2) {
            result = input * 1609.344;
            resUnit.innerHTML = "Mt/hr"
        } else if (to == 3) {
            result = input * 1.609344;
            resUnit.innerHTML = "Km/hr"
        } else if (to == 5) {
            result = input * 0.071429;
            resUnit.innerHTML = "Ls"
        }
        //เหลือความเร็วแสง

    } else if (from == 5) {
        if (to == 0) {
            alert("Please select units to convert.")
            return false
        } else if (to == 1) {
            result = input * 1798740000000;
            resUnit.innerHTML = "Cm/min"
        } else if (to == 2) {
            result = input * 1079244000000;
            resUnit.innerHTML = "Mt/hr"
        } else if (to == 3) {
            result = input * 1079244000;
            resUnit.innerHTML = "Km/hr"
        } else if (to == 4) {
            result = input * 670611130.994989;
            resUnit.innerHTML = "Mph"
        }
    }

    var da = Math.floor(result).toString()
    var td = Math.pow(10, da.length);
    console.log(da + " " + da.length + ":" + td)
    var updatedSpeed = Math.round(result * 180 / (da == "0" ? 1 : td)) - 45;
    // this.updatedSpeed = parseFloat(num).toFixed( 2 );
    // this.updatedSpeed = parseFloat(this.updatedSpeed).toFixed(2);
    speedbar.style.transform = "rotate(" + updatedSpeed + "deg)";
    resultD.innerHTML = parseFloat(result).toFixed( 2 );
    return false
}
