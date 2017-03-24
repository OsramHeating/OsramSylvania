var lastCalculatedValue = null;
var nullCount = 0;

function alertDismissed(){
    
}

function calculationValidate(calculationType){
    nullCount = 0;
    if(calculationType == 1){
        var a = document.getElementById("SCFM").value;
        var b = document.getElementById("Temp").value;
        var c = document.getElementById("Watts").value;
        
        var aType = a === "" || a == null;
        var bType = b === "" || b == null;
        var cType = c === "" || c == null;
        
        if(aType)nullCount+=1;
        if(bType)nullCount+=1;
        if(cType)nullCount+=1;
        
        if(nullCount > 1){
            showAlert("Not enough inputs");
        }
        else{
            a = Number(a);
            b = Number(b);
            c = Number(c);
            
            if(isNaN(a) || isNaN(b) || isNaN(c)){
                showAlert("One or more of your inputs are not a number");
            }
            else if((bType && a === 0) || (aType && b === 0)){
                showAlert("Cannot Divide by zero");
            }
            else if(aType){
                document.getElementById("SCFM").value = power_flowrate_temp(1, b, c);
                lastCalculatedValue = power_flowrate_temp(1, b, c);
            }
            else if(bType){
                document.getElementById("Temp").value = power_flowrate_temp(2, a, c);
                lastCalculatedValue = power_flowrate_temp(2, a, c);
            }
            else if(cType){
                document.getElementById("Watts").value = power_flowrate_temp(3, a, b);
                lastCalculatedValue = power_flowrate_temp(3, a, b);
            }
            else{
                showAlert("You need to leave one blank for the answer");
            }
        }
    }
    else if(calculationType == 2){
        var a = document.getElementById("TempC").value;
        var b = document.getElementById("TempF").value;
        
        var aType = a === "" || a == null;
        var bType = b === "" || b == null;
        
        if(aType)nullCount+=1;
        if(bType)nullCount+=1;
        
        if(nullCount > 1){
            showAlert("No inputs");
        }
        else{
            a = Number(a);
            b = Number(b);

            if(isNaN(a) || isNaN(b)){
                showAlert("One or more of your inputs are not a number");
            }
            else if(aType){
                document.getElementById("TempC").value = temp_conversion(1, b);
                lastCalculatedValue = temp_conversion(1, b);
            }
            else if(bType){
                document.getElementById("TempF").value = temp_conversion(2, a);
                lastCalculatedValue = temp_conversion(2, a);
            }
            else{
                showAlert("You need to leave one blank for the answer");
            }
        }
    }
    else if(calculationType == 3){
        var a = document.getElementById("Wattage").value;
        var b = document.getElementById("Voltage").value;
        var c = document.getElementById("LineCurrent").value;
        
        var aType = a === "" || a == null;
        var bType = b === "" || b == null;
        var cType = c === "" || c == null;
        
        if(aType)nullCount+=1;
        if(bType)nullCount+=1;
        if(cType)nullCount+=1;
        
        if(nullCount > 1){
            showAlert("Not enough inputs");
        }
        else{
            a = Number(a);
            b = Number(b);
            c = Number(c);
            
            if(isNaN(a) || isNaN(b) || isNaN(c)){
                showAlert("One or more of your inputs are not a number");
            }
            else if((cType && b === 0) || (bType && c === 0)){
                showAlert("Cannot Divide by zero");
            }
            else if(aType){
                document.getElementById("Wattage").value = three_phase_unit(1, b, c);
                lastCalculatedValue = three_phase_unit(1, b, c);
            }
            else if(bType){
                document.getElementById("Voltage").value = three_phase_unit(2, a, c);
                lastCalculatedValue = three_phase_unit(2, a, c);
            }
            else if(cType){
                document.getElementById("LineCurrent").value = three_phase_unit(3, a, b);
                lastCalculatedValue = three_phase_unit(3, a, b);
            }
            else{
                showAlert("You need to leave one blank for the answer");
            }
        }
    }
    else if(calculationType == 4){
        var a = document.getElementById("Wattage2").value;
        var b = document.getElementById("Voltage2").value;
        var c = document.getElementById("LineCurrent2").value;

        var aType = a === "" || a == null;
        var bType = b === "" || b == null;
        var cType = c === "" || c == null;
        
        if(aType)nullCount+=1;
        if(bType)nullCount+=1;
        if(cType)nullCount+=1;
        
        if(nullCount > 1){
            showAlert("Not enough inputs");
        }
        else{
            a = Number(a);
            b = Number(b);
            c = Number(c); 

            if(isNaN(a) || isNaN(b) || isNaN(c)){
                showAlert("One or more of your inputs are not a number");
            }
            else if((cType && b === 0) || (bType && c === 0)){
                showAlert("Cannot Divide by zero");
            }
            else if(aType){
                document.getElementById("Wattage2").value = single_phase_unit(1, b, c);
                lastCalculatedValue = single_phase_unit(1, b, c);
            }
            else if(bType){
                document.getElementById("Voltage2").value = single_phase_unit(2, a, c);
                lastCalculatedValue = single_phase_unit(2, a, c);
            }
            else if(cType){
                document.getElementById("LineCurrent2").value = single_phase_unit(3, a, b);
                lastCalculatedValue = single_phase_unit(3, a, b);
            }
            else{
                showAlert("You need to leave one blank for the answer");
            }
        }
    }
    else if(calculationType == 5){
        var a = document.getElementById("W").value;
        var b = document.getElementById("E").value;
        var c = document.getElementById("I").value;
        var d = document.getElementById("R").value;
        
        var aType = a === "" || a == null;
        var bType = b === "" || b == null;
        var cType = c === "" || c == null;
        var dType = d === "" || d == null;
        
        if(aType)nullCount+=1;
        if(bType)nullCount+=1;
        if(cType)nullCount+=1;
        if(dType)nullCount+=1;
        
        if(nullCount == 3){
            showAlert("Not enough inputs");
        }
        else{
            a = Number(a);
            b = Number(b);
            c = Number(c);
            d = Number(d);
            
            if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)){
                showAlert("One or more of your inputs are not a number");
            }
            else if((bType && dType && c === 0) || (aType && bType && d === 0) || (aType && cType && d === 0) || (cType && dType && (a === 0 || b === 0))){
                showAlert("Cannot Divide by zero");
            }
            else if((a == "" || a == null) && (b == "" || b == null)){
                document.getElementById("E").value = ohms_law(1, c, d);
                document.getElementById("W").value = ohms_law(1, Math.pow(c, 2), d);
            }
            else if((a == "" || a == null) && (c == "" || c == null)){
                document.getElementById("I").value = ohms_law(2, b, d);
                document.getElementById("W").value = ohms_law(5, b, d);
            }
            else if((a == "" || a == null) && (d == "" || d == null)){
                document.getElementById("W").value = ohms_law(1, b, c);
                document.getElementById("R").value = ohms_law(2, b, c);
            }
            else if((b == "" || b == null) && (c == "" || c == null)){
                document.getElementById("E").value = ohms_law(3, a, d);
                document.getElementById("I").value = ohms_law(4, a, d);
            }
            else if((b == "" || b == null) && (d == "" || d == null)){
                document.getElementById("E").value = ohms_law(2, a, c);
                document.getElementById("R").value = ohms_law(6, a, c);
            }
            else if((c == "" || c == null) && (d == "" || d == null)){
                document.getElementById("I").value = ohms_law(2, a, b);
                document.getElementById("R").value = ohms_law(5, b, a);
            }
            else{
                showAlert("You need to leave two blank for the answer");
            }
        }
    }
    else if(calculationType == 6){
        var a = document.getElementById("density").value;
        var b = document.getElementById("volumeflowrate").value;
        var c = document.getElementById("specificheat").value;
        var d = document.getElementById("temperaturedifferential").value;
        var e = document.getElementById("Q").value;
        
        var aType = a === "" || a == null;
        var bType = b === "" || b == null;
        var cType = c === "" || c == null;
        var dType = d === "" || d == null;
        var eType = e === "" || e == null;
        
        if(aType)nullCount+=1;
        if(bType)nullCount+=1;
        if(cType)nullCount+=1;
        if(dType)nullCount+=1;
        if(eType)nullCount+=1;
        
        if(nullCount > 1){
            showAlert("Not enough inputs");
        }
        else{

            a = Number(a);
            b = Number(b);
            c = Number(c);
            d = Number(d);
            e = Number(e);
            
            if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e)){
                showAlert("One or more of your inputs are not a number");
            }
            else if((aType && (b===0||c===0||d===0)) || (bType && (a===0||c===0||d===0)) || (cType && (b===0||a===0||d===0)) || (dType && (b===0||c===0||a===0))){
                showAlert("Cannot Divide by zero");
            }
            else if(a == "" || a == null){
                document.getElementById("density").value = convection(2, e, b, c, d);
                lastCalculatedValue = convection(2, e, b, c, d);
            }
            else if(b == "" || b == null){
                document.getElementById("volumeflowrate").value = convection(2, e, a, c, d);
                lastCalculatedValue = convection(2, e, a, c, d);
            }
            else if(c == "" || c == null){
                document.getElementById("specificheat").value = convection(2, e, a, b, d);
                lastCalculatedValue = convection(2, e, a, b, d);
            }
            else if(d == "" || d == null){
                document.getElementById("temperaturedifferential").value = convection(2, e, a, b, c);
                lastCalculatedValue = convection(2, e, a, b, c);
            }
            else if(e == "" || e == null){
                document.getElementById("Q").value = convection(1, a, b, c, d);
                lastCalculatedValue = convection(1, a, b, c, d);
            }
            else{
                showAlert("You need to leave one blank for the answer");
            }
        }
    }
    else if(calculationType == 7){
        var a = document.getElementById("TempExit").value;
        var b = document.getElementById("TempIn").value;
        var c = document.getElementById("TempDelta").value;
        
        var aType = a === "" || a == null;
        var bType = b === "" || b == null;
        var cType = c === "" || c == null;
        
        if(aType)nullCount+=1;
        if(bType)nullCount+=1;
        if(cType)nullCount+=1;
        
        if(nullCount > 1){
            showAlert("Not enough inputs");
        }
        else{
            a = Number(a);
            b = Number(b);
            c = Number(c);
            
            if(isNaN(a) || isNaN(b) || isNaN(c)){
                showAlert("One or more of your inputs are not a number");
            }
            else if(a == "" || a == null){
                document.getElementById("TempExit").value = delta(1, b, c);
                lastCalculatedValue = delta(1, b, c);
            }
            else if(b == "" || b == null){
                document.getElementById("TempIn").value = delta(2, a, c);
                lastCalculatedValue = delta(2, a, c);
            }
            else if(c == "" || c == null){
                document.getElementById("TempDelta").value = delta(3, a, b);
                lastCalculatedValue = delta(3, a, b);
            }
            else{
                showAlert("You need to leave one blank for the answer");
            }
        }
    }
    else if(calculationType == 8){
        var a = document.getElementById("PSI").value;
        var b = document.getElementById("BAR").value;
        
        var aType = a === "" || a == null;
        var bType = b === "" || b == null;
        
        if(aType)nullCount+=1;
        if(bType)nullCount+=1;
        
        if(nullCount > 1){
            showAlert("No inputs");
        }
        else{
        
            a = Number(a);
            b = Number(b);
            
            if(isNaN(a) || isNaN(b)){
                showAlert("One or more of your inputs are not a number");
            }
            else if(a == "" || a == null){
                document.getElementById("PSI").value = psi_bar(1, b);
                lastCalculatedValue = psi_bar(1, b);
            }
            else if(b == "" || b == null){
                document.getElementById("BAR").value = psi_bar(2, a);
                lastCalculatedValue = psi_bar(2, a);
            }
            else{
                showAlert("You need to leave one blank for the answer");
            }
        }
    }
    else{
        showAlert("Wrong Calculation Type Value Error");
    }
    
    if(lastCalculatedValue != null){
        localStorage.setItem("savedValue", JSON.stringify(lastCalculatedValue));
    }
}

function getSavedValue(){
    alert(JSON.parse(localStorage.getItem("savedValue")));
}

function power_flowrate_temp (type, value1, value2){
	if(type == 1){
		return round((value2 * 2.5) / value1);
	}
	else if(type == 2){
		return round((value2 * 2.5) / value1);
	}
    else{
        return round((value1 * value2) / 2.5);
    }
}

function temp_conversion (type, value){
    if(type == 1){
        return round(((value-32)*5)/9);
    }
    else{
        return round(((value*9)/5)+32);
    }
}

function three_phase_unit (type, value1, value2){
    if(type == 1){
		return round(value1 * value2 * Math.sqrt(3));
	}
	else if(type == 2){
		return round(value1 / (value2 * Math.sqrt(3)));
	}
    else{
        return round(value1 / (value2 * Math.sqrt(3)));
    }
}

function single_phase_unit(type, value1, value2){
    if(type == 1){
		return round(value1 * value2);
	}
	else if(type == 2){
		return round(value1 / value2);
	}
    else{
        return round(value1 / value2);
    }
}

function ohms_law(type, value1, value2){
    if(type == 1){
		return round(value1 * value2);
	}
	else if(type == 2){
		return round(value1 / value2);
	}
	else if(type == 3){
		return round(Math.sqrt(value1 * value2));
	}
    else if(type == 4){
        return round(Math.sqrt(value1 / value2));
    }
    else if(type == 5){
        return round(Math.pow(value1, 2) / value2);
    }
    else{
        return round(value1 / Math.pow(value2, 2));
    }
}

function convection(type, value1, value2, value3, value4){
    if(type == 1){
        return round(value1*value2*value3*value4);
    }
    else{
        return round(value1/(value2*value3*value4));
    }
}

function delta(type, value1, value2){
    if(type == 1){
        return value2 + value1;
    }
    else{
        return value1 - value2;
    }
}

function psi_bar(type, value){
    if(type == 1){
        return value / 0.0689476;
    }
    else{
        return value * 0.0689476;
    }
}

function round(num){
    //var val = (parseFloat(num).toPrecision(3));
	return num;
}

function clearAll(type){
    if(type == 1){
        document.getElementById("SCFM").value = null;
        document.getElementById("Temp").value = null;
        document.getElementById("Watts").value = null;
    }
    else if(type == 2){
        document.getElementById("TempC").value = null;
        document.getElementById("TempF").value = null;
    }
    else if(type == 3){
        document.getElementById("Wattage").value = null;
        document.getElementById("Voltage").value = null;
        document.getElementById("LineCurrent").value = null;
    }
    else if(type == 4){
        document.getElementById("Wattage2").value = null;
        document.getElementById("Voltage2").value = null;
        document.getElementById("LineCurrent2").value = null;
    }
    else if(type == 5){
        document.getElementById("W").value = null;
        document.getElementById("E").value = null;
        document.getElementById("I").value = null;
        document.getElementById("R").value = null;
    }
    else if(type == 6){
        document.getElementById("density").value = null;
        document.getElementById("volumeflowrate").value = null;
        document.getElementById("specificheat").value = null;
        document.getElementById("temperaturedifferential").value = null;
        document.getElementById("Q").value = null;
    }
    else if(type == 7){
        document.getElementById("TempExit").value = null;
        document.getElementById("TempIn").value = null;
        document.getElementById("TempDelta").value = null;
    }
    else{
        document.getElementById("PSI").value = null;
        document.getElementById("BAR").value = null;
    }
}

function saveWattage(){
	var wattage = document.getElementById("Watts").value;
	document.getElementById("wattValue").innerHTML = wattage;
}

function saveSCFM(){
	var SCFM = document.getElementById("SCFM").value;
	document.getElementById("SCFMValue").innerHTML = SCFM;
}
