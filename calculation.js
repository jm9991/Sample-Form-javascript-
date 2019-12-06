//Set up an associative array
 //The keys represent the size of the cake
 //The values represent the cost of the cake i.e A 10" cake cost's $35
 var cake_prices = new Array();
 cake_prices["Bundtcake"]=8;
 cake_prices["Round6"]=20;
 cake_prices["Round8"]=25;
 cake_prices["Round10"]=35;
 cake_prices["Round12"]=75;
 
 //Set up an associative array 
 //The keys represent the filling type
 //The value represents the cost of the filling i.e. Lemon filling is $5,Dobash filling is $9
 //We use this this array when the user selects a filling from the form
 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["Apple Cinnamon"]=4;
 filling_prices["Lemon"]=5;
 filling_prices["Custard"]=5;
 filling_prices["Fudge"]=7;
 filling_prices["Mocha"]=8;
 filling_prices["Raspberry"]=10;
 filling_prices["Pineapple"]=5;
 filling_prices["Dobash"]=9;
 filling_prices["Mint"]=5;
 filling_prices["Cherry"]=5;
 filling_prices["Apricot"]=8;
 filling_prices["Buttercream"]=7;
 filling_prices["Chocolate Mousse"]=12;
 
	 
	 
// getCakeSizePrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function getCakeSizePrice()
{  
    var cakeSizePrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedCake = theForm.elements["selectedcake"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedCake.length; i++)
    {
        //if the radio button is checked
        if(selectedCake[i].checked)
        {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"
            cakeSizePrice = cake_prices[selectedCake[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return cakeSizePrice;
}

//This function finds the filling price based on the 
//drop down selection
function getFillingPrice()
{
    var cakeFillingPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the select id="filling"
     var selectedFilling = theForm.elements["filling"];
     
    //set cakeFilling Price equal to value user chose
    //For example filling_prices["Lemon".value] would be equal to 5
    cakeFillingPrice = filling_prices[selectedFilling.value];

    //finally we return cakeFillingPrice
    return cakeFillingPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function candlesPrice()
{
    var candlePrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var includeCandles = theForm.elements["includecandles"];

    //If they checked the box set candlePrice to 5
    if(includeCandles.checked==true)
    {
        candlePrice=5;
    }
    //finally we return the candlePrice
    return candlePrice;
}

function insciptionPrice()
{
    //This local variable will be used to decide whether or not to charge for the inscription
    //If the user checked the box this value will be 20
    //otherwise it will remain at 0
    var inscriptionPrice=0;
    //Get a refernce to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includeinscription"
    var includeInscription = theForm.elements["includeinscription"];
    //If they checked the box set inscriptionPrice to 20
    if(includeInscription.checked==true){
        inscriptionPrice=20;
    }
    //finally we return the inscriptionPrice
    return inscriptionPrice;
}
        
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var cakePrice = getCakeSizePrice() + getFillingPrice() + candlesPrice() + insciptionPrice();
    cakePrice = cakePrice * (1 + parseFloat(document.getElementById('stateForTax').value));
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the Cake $"+cakePrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}
function addOption(str, val, selectId){
    var option = document.createElement("option");
    option.text = str;
    option.value = val;
    var select = document.getElementById(selectId);
    select.appendChild(option);
}
function addStates(){
    /*Source: https://www.salestaxinstitute.com/resources/rates */
    /*It uses 2d array instead of associative array*/
    var salesTaxes = [
        ["Select State for Tax", 0],
        ["Alabama", 0.16000],
        ["Alaska", 0.00000],
        ["Arizona", 0.05600],
        ["Arkansas", 0.06500],
        ["California", 0.07250], 
        ["Colorado", 0.02900],
        ["Connecticut", 0.06350], 
        ["Delaware", 0.00000],
        ["District of Columbia", 0.06000],
        ["Florida", 0.06000],
        ["Georgia", 0.04000],
        ["Hawaii", 0.04000], 
        ["Idaho", 0.06000],
        ["Illinois", 0.06250], 
        ["Indiana", 0.07000],
        ["Iowa", 0.06000], 
        ["Kansas", 0.06500], 
        ["Kentucky", 0.06000],
        ["Louisiana", 0.04450],
        ["Maine", 0.05500],
        ["Maryland", 0.06000],
        ["Massachusetts", 0.06250],
        ["Michigan", 0.06000], 
        ["Minnesota", 0.06875], 
        ["Mississippi", 0.07000],
        ["Missouri", 0.04225],
        ["Montana", 0.00000],
        ["Nebraska", 0.05500],
        ["Nevada", 0.06850 ],
        ["New Hampshire", 0.00000],
        ["New Jersey", 0.06625],
        ["New Mexico", 0.05125],
        ["New York", 0.04000],
        ["North Carolina", 0.04750], 
        ["North Dakota", 0.05000], 
        ["Ohio", 0.05750],
        ["Oklahoma", 0.04500],
        ["Oregon", 0.00000],
        ["Pennsylvania", 0.06000],
        ["Puerto Rico", 0.11500], 
        ["Rhode Island", 0.07000],
        ["South Carolina", 0.06000], 
        ["South Dakota", 0.04500], 
        ["Tennessee", 0.07000], 
        ["Texas", 0.06250],
        ["Utah", 0.04850], 
        ["Vermont", 0.06000], 
        ["Virginia", 0.04300], 
        ["Washington", 0.06500],
        ["West Virginia", 0.06000],
        ["Wisconsin", 0.05000],
        ["Wyoming", 0.04000]
   
    ];
    // add each state to the dropdown list box
	for(let i=0; i<salesTaxes.length; i++) {
		addOption(salesTaxes[i][0], salesTaxes[i][1], "stateForTax");
	}
}
	 
