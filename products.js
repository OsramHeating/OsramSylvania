

function getProducts(){
	var wattage = document.getElementById("Watts").value;
	var SCFM = document.getElementById("SCFM").value;
    var innerHTMLList = "";
    
    if((wattage == "" || wattage == null) || (SCFM == "" || SCFM == null)){
        innerHTMLList = innerHTMLList + "<div class=\"product1\" ><h2 class=\"preproduct\">PRODUCT<br><span class=\"productname\">Series I, II, III Air Heaters</span><div class=\"greydivider\"></div><p class=\"productdetail\">Series heaters are general purpose compact electric air heaters using Serpentine™ wire heating elements within a Quartz open-end ( Style A ) or nozzle ( Style B ) for spot-heating applications. The Series products are typically powered by open-loop ( manual ) power controllers. The air inlet is a high temperature silicone rubber adapter with male spade power connectors and a ground. Mounting in existing or new equipment is made easy by the included bracket.</p></h2>  <a href=\"series123.html\"><div class=\"details\">SEE DETAILS</div></a></div>";
        innerHTMLList = innerHTMLList + "<div class=\"product2\"><h2 class=\"preproduct\">PRODUCT<br><span class=\"productname\">Hot Air Tools</span><div class=\"greydivider\"></div><p class=\"productdetail\">Hot Air Tools are multi-purpose electric heaters with a built-in thermocouple for precise temperature control. The compact size makes this product perfect for single phase OEM applications. Its 304 stainless steel body construction is slotted for fl ared accessories and is made to withstand pressures up to 60 psi (4 bar) and temperatures up to 1400°F ( 760°C ).</p></h2>  <a href=\"airtools.html\"><div class=\"details\">SEE DETAILS</div></a></div>";
        innerHTMLList = innerHTMLList + "<div class=\"product3\">  <h2 class=\"preproduct\">PRODUCT<br><span class=\"productname\">Serpentine II, VI</span><div class=\"greydivider\"></div><p class=\"productdetail\">The Serpentine Triple Pass heaters are modular field replaceable products. The heater unit consists of a Serpentine-coil electric heater element that fi ts into a stainless steel “triple-pass”exchanger housing and makes electrical connections through fittings pressed into the base. The housing uses the incoming air to cool the outer shell prior to passing through the heater element. This minimizes radiant heat loss and provides a safe to the touch product to minimize injury to operators who come in contact with the heater.</p></h2>  <a href=\"serpentine.html\"><div class=\"details\">SEE DETAILS</div></a></div>";
        innerHTMLList = innerHTMLList + "<div class=\"product4\">  <h2 class=\"preproduct\">PRODUCT<br><span class=\"productname\">Threaded In-Line Heaters</span><div class=\"greydivider\"></div><p class=\"productdetail\">Threaded in-line air heaters are UL Recognized products designed for industrial process heating applications requiring high-heat and high air pressure. Serpentine™ heating elements are installed into a 304 stainless steel housing and threaded at both ends. OSRAM threaded in-line heaters offer two styles, Style “A” and Style “B”. Style “A” should be used when an absolute leak-proof air system is required.</p></h2> <a href=\"threaded.html\"><div class=\"details\">SEE DETAILS</div></a></div>";
        innerHTMLList = innerHTMLList + "<div class=\"product5\">    <h2 class=\"preproduct\">PRODUCT<br><span class=\"productname\">Sureheat Jet</span><div class=\"greydivider\"></div><p class=\"productdetail\">The SureHeat® JET provides a compact and efficient heater solution for air temperatures up to 1400°F (760°C). Available in a 3.0kW or 8.0kW, 240V 1ø unit, the SureHeat® Jet offers two type “K” thermocouples with a convenient terminal block for easy wiring. To ensure safety, power and perfect control, connect with the optional SureHeat® Jet Control Panel. Each heater has a convenient method for mounting the housing and offers a ground stud located at the inlet of the heater.</p></h2> <a href=\"sureheatjet.html\"><div class=\"details\">SEE DETAILS</div></a></div>";
        innerHTMLList = innerHTMLList + "<div class=\"product6\"><h2 class=\"preproduct\">PRODUCT<br><span class=\"productname\">Sureheat Max</span><div class=\"greydivider\"></div><p class=\"productdetail\">The SureHeat® Max provides a compact and effi cient heater solution for air temperatures up to 1400°F (760°C). Available in a 6.0kW to 36.0kW, 240V/380V/480V 1ø / 3ø units, the SureHeat® Max offers two type “K” thermocouples with a convenient terminal block for easy wiring. To ensure safety, power and perfect control, connect with the optional SureHeat® Max Control Panel. Each heater has a convenient method for mounting the housing and offers a ground stud located at the inlet of the heater.</p></h2>  <a href=\"sureheatmax.html\"><div class=\"details\">SEE DETAILS</div></a></div>";
        innerHTMLList = innerHTMLList + "<div class=\"product7\"><h2 class=\"preproduct\">PRODUCT<br><span class=\"productname\">Sureheat Max HT</span><div class=\"greydivider\"></div><p class=\"productdetail\">The SureHeat® Max HT provides a compact and efficient heater solution for high temperature applications up to 1652°F (900°C). A dual probe type “K” thermocouple with a convenient terminal block is included for ease of wiring. Each exposed thermocouple probe is used to measure exit air temperature. One is typically used for process temperature control and the other to monitor high temperature limit. Each heater has a convenient method for mounting the housing and offers a ground stud located at the inlet of the heater.</p></h2>  <a href=\"sureheatmaxht.html\"><div class=\"details\">SEE DETAILS</div></a></div>";
        innerHTMLList = innerHTMLList + "<div class=\"product8\">  <h2 class=\"preproduct\">PRODUCT<br><span class=\"productname\">Heat Guns</span><div class=\"greydivider\"></div><p class=\"productdetail\">Heat guns are practical hand-held thermoplastic welding devices designed for all types of hot air applications. This simple, sturdy and high performance tool offers a very strong air output at 400 LPM. Combined with its low weight, the device has an efficient heating element that produces up to 1292°F / ( 700°C ). The OSRAM heat gun is available in 120V or 230V. The heating element insulating cover fits numerous modular accessories, flanges and replacement elements.</p></h2>  <a href=\"heatguns.html\"><div class=\"details\">SEE DETAILS</div></a></div>";
    }
    else{
        wattage = wattage / 1000;
        if(wattage<=Series1n2n3.powerUpper && wattage>=Series1n2n3.powerLower && SCFM <= Series1n2n3.maxAirPressureinPsi){
            innerHTMLList = innerHTMLList + "<div class=\"product1\" ><h2 class=\"preproduct\">PRODUCT<br><span class=\"productname\">Series I, II, III Air Heaters</span><div class=\"greydivider\"></div><p class=\"productdetail\">Series heaters are general purpose compact electric air heaters using Serpentine™ wire heating elements within a Quartz open-end ( Style A ) or nozzle ( Style B ) for spot-heating applications. The Series products are typically powered by open-loop ( manual ) power controllers. The air inlet is a high temperature silicone rubber adapter with male spade power connectors and a ground. Mounting in existing or new equipment is made easy by the included bracket.</p></h2>  <a href=\"series123.html\"><div class=\"details\">SEE DETAILS</div></a></div>";
        }
        if(wattage<=HotAirTools.powerUpper && wattage>=HotAirTools.powerLower && SCFM <= Series1n2n3.maxAirPressureinPsi){
            innerHTMLList = innerHTMLList + "<div class=\"product2\"><h2 class=\"preproduct\">PRODUCT<br><span class=\"productname\">Hot Air Tools</span><div class=\"greydivider\"></div><p class=\"productdetail\">Hot Air Tools are multi-purpose electric heaters with a built-in thermocouple for precise temperature control. The compact size makes this product perfect for single phase OEM applications. Its 304 stainless steel body construction is slotted for fl ared accessories and is made to withstand pressures up to 60 psi (4 bar) and temperatures up to 1400°F ( 760°C ).</p></h2>  <a href=\"airtools.html\"><div class=\"details\">SEE DETAILS</div></a></div>";
        }
        if(wattage<=Serpentine2n6.powerUpper && wattage>=Serpentine2n6.powerLower && SCFM <= Serpentine2n6.maxAirPressureinPsi){
            innerHTMLList = innerHTMLList + "<div class=\"product3\">  <h2 class=\"preproduct\">PRODUCT<br><span class=\"productname\">Serpentine II, VI</span><div class=\"greydivider\"></div><p class=\"productdetail\">The Serpentine Triple Pass heaters are modular field replaceable products. The heater unit consists of a Serpentine-coil electric heater element that fi ts into a stainless steel “triple-pass”exchanger housing and makes electrical connections through fittings pressed into the base. The housing uses the incoming air to cool the outer shell prior to passing through the heater element. This minimizes radiant heat loss and provides a safe to the touch product to minimize injury to operators who come in contact with the heater.</p></h2>  <a href=\"serpentine.html\"><div class=\"details\">SEE DETAILS</div></a></div>";
        }
        if(wattage<=ThreadedInLine.powerUpper && wattage>=ThreadedInLine.powerLower && SCFM <= ThreadedInLine.maxAirPressureinPsi){
            innerHTMLList = innerHTMLList + "<div class=\"product4\">  <h2 class=\"preproduct\">PRODUCT<br><span class=\"productname\">Threaded In-Line Heaters</span><div class=\"greydivider\"></div><p class=\"productdetail\">Threaded in-line air heaters are UL Recognized products designed for industrial process heating applications requiring high-heat and high air pressure. Serpentine™ heating elements are installed into a 304 stainless steel housing and threaded at both ends. OSRAM threaded in-line heaters offer two styles, Style “A” and Style “B”. Style “A” should be used when an absolute leak-proof air system is required.</p></h2> <a href=\"threaded.html\"><div class=\"details\">SEE DETAILS</div></a></div>";
        }
        if(wattage<=SureHeatJet.powerUpper && wattage>=SureHeatJet.powerLower && SCFM <= SureHeatJet.maxAirPressureinPsi){
            innerHTMLList = innerHTMLList + "<div class=\"product5\">    <h2 class=\"preproduct\">PRODUCT<br><span class=\"productname\">Sureheat Jet</span><div class=\"greydivider\"></div><p class=\"productdetail\">The SureHeat® JET provides a compact and efficient heater solution for air temperatures up to 1400°F (760°C). Available in a 3.0kW or 8.0kW, 240V 1ø unit, the SureHeat® Jet offers two type “K” thermocouples with a convenient terminal block for easy wiring. To ensure safety, power and perfect control, connect with the optional SureHeat® Jet Control Panel. Each heater has a convenient method for mounting the housing and offers a ground stud located at the inlet of the heater.</p></h2> <a href=\"sureheatjet.html\"><div class=\"details\">SEE DETAILS</div></a></div>";
        }
        if(wattage<=SureHeatMax.powerUpper && wattage>=SureHeatMax.powerLower && SCFM <= SureHeatMax.maxAirPressureinPsi){
            innerHTMLList = innerHTMLList + "<div class=\"product6\"><h2 class=\"preproduct\">PRODUCT<br><span class=\"productname\">Sureheat Max</span><div class=\"greydivider\"></div><p class=\"productdetail\">The SureHeat® Max provides a compact and effi cient heater solution for air temperatures up to 1400°F (760°C). Available in a 6.0kW to 36.0kW, 240V/380V/480V 1ø / 3ø units, the SureHeat® Max offers two type “K” thermocouples with a convenient terminal block for easy wiring. To ensure safety, power and perfect control, connect with the optional SureHeat® Max Control Panel. Each heater has a convenient method for mounting the housing and offers a ground stud located at the inlet of the heater.</p></h2>  <a href=\"sureheatmax.html\"><div class=\"details\">SEE DETAILS</div></a></div>";
        }
        if(wattage<=SureHeatMaxHT.powerUpper && wattage>=SureHeatMaxHT.powerLower && SCFM <= SureHeatMaxHT.maxAirPressureinPsi){
            innerHTMLList = innerHTMLList + "<div class=\"product7\"><h2 class=\"preproduct\">PRODUCT<br><span class=\"productname\">Sureheat Max HT</span><div class=\"greydivider\"></div><p class=\"productdetail\">The SureHeat® Max HT provides a compact and efficient heater solution for high temperature applications up to 1652°F (900°C). A dual probe type “K” thermocouple with a convenient terminal block is included for ease of wiring. Each exposed thermocouple probe is used to measure exit air temperature. One is typically used for process temperature control and the other to monitor high temperature limit. Each heater has a convenient method for mounting the housing and offers a ground stud located at the inlet of the heater.</p></h2>  <a href=\"sureheatmaxht.html\"><div class=\"details\">SEE DETAILS</div></a></div>";
        }
        if(wattage<=HeatGuns.powerUpper && wattage>=HeatGuns.powerLower && SCFM <= HeatGuns.maxAirPressureinPsi){
            innerHTMLList = innerHTMLList + "<div class=\"product8\">  <h2 class=\"preproduct\">PRODUCT<br><span class=\"productname\">Heat Guns</span><div class=\"greydivider\"></div><p class=\"productdetail\">Heat guns are practical hand-held thermoplastic welding devices designed for all types of hot air applications. This simple, sturdy and high performance tool offers a very strong air output at 400 LPM. Combined with its low weight, the device has an efficient heating element that produces up to 1292°F / ( 700°C ). The OSRAM heat gun is available in 120V or 230V. The heating element insulating cover fits numerous modular accessories, flanges and replacement elements.</p></h2>  <a href=\"heatguns.html\"><div class=\"details\">SEE DETAILS</div></a></div>";
        }
    }
    localStorage.setItem("listItems", JSON.stringify(innerHTMLList));
}

function applyInnerHtml(){
    document.getElementById("productsList").innerHTML = JSON.parse(localStorage.getItem("listItems"));
}

var Series1n2n3 = {
	powerLower: 0.6, 
	powerUpper: 2.4, 
	maxAirTempinF: 1600, 
	maxAirTempinF: 871, 
	maxAirPressureinPsi: 7,
	maxAirPressureinBar: 0.5,
	UseWithBlower: false,
	Description: "Inexpensive Spot-Heating Applications, Quartz Insulator Tube, Open or Nozzle End, Single Phase"
};

var HotAirTools = {
	powerLower: 1.5, 
	powerUpper: 3.5, 
	maxAirTempinF: 1400, 
	maxAirTempinC: 760, 
	maxAirPressureinPsi: 60,
	maxAirPressureinBar: 4.0,
	UseWithBlower: false,
	Description: "Inexpensive Spot-Heating Applications, Quartz Insulator Tube, Open or Nozzle End, Single Phase"
};

var Serpentine2n6 = {
	powerLower: 2.0, 
	powerUpper: 8.0, 
	maxAirTempinF: 1500, 
	maxAirTempinC: 815, 
	maxAirPressureinPsi: 25,
	maxAirPressureinBar: 1.7,
	UseWithBlower: false,
	Description: "Inexpensive Spot-Heating Applications, Quartz Insulator Tube, Open or Nozzle End, Single Phase"
};

var ThreadedInLine = {
	powerLower: 1.6, 
	powerUpper: 18.0, 
	maxAirTempinF: 1400, 
	maxAirTempinC: 760, 
	maxAirPressureinPsi: 150,
	maxAirPressureinBar: 10.0,
	UseWithBlower: false,
	Description: "Inexpensive Spot-Heating Applications, Quartz Insulator Tube, Open or Nozzle End, Single Phase"
};

var SureHeatJet = {
	powerLower: 3.0, 
	powerUpper: 8.0, 
	maxAirTempinF: 1400, 
	maxAirTempinC: 760, 
	maxAirPressureinPsi: 60,
	maxAirPressureinBar: 4.0,
	UseWithBlower: true,
	Description: "Inexpensive Spot-Heating Applications, Quartz Insulator Tube, Open or Nozzle End, Single Phase"
};

var SureHeatMax = {
	powerLower: 6.0, 
	powerUpper: 36.0, 
	maxAirTempinF: 1400, 
	maxAirTempinC: 760, 
	maxAirPressureinPsi: 60,
	maxAirPressureinBar: 4.0,
	UseWithBlower: true,
	Description: "Inexpensive Spot-Heating Applications, Quartz Insulator Tube, Open or Nozzle End, Single Phase"
};

var SureHeatMaxHT = {
	powerLower: 30.0, 
	powerUpper: 36.0, 
	maxAirTempinF: 1652, 
	maxAirTempinC: 900, 
	maxAirPressureinPsi: 60,
	maxAirPressureinBar: 4.0,
	UseWithBlower: true,
	Description: "Inexpensive Spot-Heating Applications, Quartz Insulator Tube, Open or Nozzle End, Single Phase"
};

var HeatGuns = {
	powerLower: 1.3, 
	powerUpper: 1.6, 
	maxAirTempinF: "68 - 1290", 
	maxAirTempinC: "20 - 700", 
	maxAirPressureinPsi: 0.44,
	maxAirPressureinBar: 0.03,
	UseWithBlower: true,
	Description: "Inexpensive Spot-Heating Applications, Quartz Insulator Tube, Open or Nozzle End, Single Phase"
};
