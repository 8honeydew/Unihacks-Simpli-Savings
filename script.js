window.onload = function(){
  var previousBill = 100;
  previousBill = previousBill.toFixed(2)
  document.getElementById("previousBill").innerHTML = "$" + previousBill; // Inputs into HTML

  var currentBill = 80; // This would be taken from a QR code.
  currentBill = currentBill.toFixed(2);
  var points = 0;
  var differenceInBill = previousBill - currentBill;
  differenceInBill = parseFloat(differenceInBill.toFixed(2));
  if(differenceInBill >= 1){  // If you saved
    points = parseFloat((differenceInBill * 5).toFixed());
    differenceInBill = differenceInBill.toFixed(2);
    document.getElementById("youSaved").innerHTML = "You saved $" + differenceInBill + " compared to your average electricity bill. You earned " + points + " points!";
  }else if(differenceInBill == 0){
      document.getElementById("youSaved").innerHTML = "You matched your average bill. Try saving an extra dollar to earn points next time!";
  }else{
    differenceInBill = Math.abs(differenceInBill) + 1;
    differenceInBill = differenceInBill.toFixed(2);
    document.getElementById("youSaved").innerHTML = "You didn't earn any points. To earn points, you needed to save at least " + differenceInBill + " more dollar(s)!";

  };
  document.getElementById("totalPoints").innerHTML = points;
  /*
  var kayakPoints = 1000;
  var kayakPercent = Math.round(100 * (points/kayakPoints));
  document.getElementById("kayakPercentage").innerHTML = kayakPercent+"%" ;
  document.getElementById("kayakPointNumber").innerHTML = kayakPoints ;
 
  var backpackPoints = 500;
  var backpackPercent = Math.round(100 * (points/backpackPoints));
  document.getElementById("backpackPercentage").innerHTML = backpackPercent+"%";
  document.getElementById("backpackPointNumber").innerHTML = backpackPoints ;

  var blanketPoints = 500;
  var blanketPercent = Math.round(100 * (points/blanketPoints));
  document.getElementById("blanketPercentage").innerHTML = blanketPercent+"%";
  document.getElementById("blanketPointNumber").innerHTML = blanketPoints ;
 
  var plantPoints = 100;
  var plantPercent = Math.round(100 * (points/plantPoints));
  document.getElementById("plantPercentage").innerHTML = plantPercent+"%";
  document.getElementById("plantPointNumber").innerHTML = plantPoints ;
  
  var solarPoints = 1000;
  var solarPercent = Math.round(100 * (points/solarPoints));
  document.getElementById("solarPercentage").innerHTML = solarPercent+"%";
  document.getElementById("solarPointNumber").innerHTML = solarPoints ;

*/
var userDollars = (points / 30).toFixed(2);

var starbucksCost = 15.00;
if(starbucksCost-userDollars>0){
  document.getElementById("starbucksNew").innerHTML = starbucksCost-userDollars;
  document.getElementById("starbucksPercent").innerHTML = ((userDollars/starbucksCost)*100).toFixed();
}
else
{
  document.getElementById("starbucksNew").innerHTML = 0;
  document.getElementById("starbucksPercent").innerHTML = 100
}


var backpackCost = 40.00;
if(backpackCost-userDollars>0){
  document.getElementById("backpackNew").innerHTML = backpackCost-userDollars;
  document.getElementById("backpackPercent").innerHTML = ((userDollars/backpackCost)*100).toFixed();
}
else
{
  document.getElementById("backpackNew").innerHTML = 0;
  document.getElementById("backpackPercent").innerHTML = 100
}

var blanketCost = 20.00;
if(blanketCost-userDollars>0){
document.getElementById("blanketNew").innerHTML = blanketCost-userDollars;
document.getElementById("blanketPercent").innerHTML = ((userDollars/blanketCost)*100).toFixed();
}
else
{
  document.getElementById("blanketNew").innerHTML = 0;
  document.getElementById("blanketPercent").innerHTML = 100
}

var kayakCost = 20.00;
if(kayakCost-userDollars>0){
document.getElementById("kayakNew").innerHTML = kayakCost-userDollars;
document.getElementById("kayakPercent").innerHTML = ((userDollars/kayakCost)*100).toFixed();
}
else
{
  document.getElementById("kayakNew").innerHTML = 0;
  document.getElementById("kayakPercent").innerHTML = 100
}

var plantCost = 7.00;
if(plantCost-userDollars>0){
document.getElementById("plantNew").innerHTML = plantCost-userDollars;
document.getElementById("plantPercent").innerHTML = ((userDollars/plantCost)*100).toFixed();
}
else
{
  document.getElementById("plantNew").innerHTML = 0;
  document.getElementById("plantPercent").innerHTML = 100
}

var solarCost = 10.00;
if(solarCost-userDollars>0){
document.getElementById("solarNew").innerHTML = solarCost-userDollars;
document.getElementById("solarPercent").innerHTML = ((userDollars/solarCost)*100).toFixed();
}
else
{
  document.getElementById("solarNew").innerHTML = 0;
  document.getElementById("solarPercent").innerHTML = 100
}

var chickCost = 15.00;
if(chickCost-userDollars>0){
document.getElementById("chickNew").innerHTML = chickCost-userDollars;
document.getElementById("chickPercent").innerHTML = ((userDollars/chickCost)*100).toFixed();
}
else
{
  document.getElementById("chickNew").innerHTML = 0;
  document.getElementById("chickPercent").innerHTML = 100
}

var waterCost = 28.00;
if(waterCost-userDollars>0){
document.getElementById("waterNew").innerHTML = waterCost-userDollars;
document.getElementById("waterPercent").innerHTML = ((userDollars/waterCost)*100).toFixed();
}
else
{
  document.getElementById("waterNew").innerHTML = 0;
  document.getElementById("waterPercent").innerHTML = 100
}

var treeCost = 5.00;
if(treeCost-userDollars>0){
document.getElementById("treeNew").innerHTML = treeCost-userDollars;
document.getElementById("treePercent").innerHTML = ((userDollars/treeCost)*100).toFixed();
}
else
{
  document.getElementById("treeNew").innerHTML = 0;
  document.getElementById("treePercent").innerHTML = 100
}
};





/*
number of their points / 25 = number of dollars they have
original price - number od dollars they have = new price
if they have more than enough, they get it for free


theyre either getting the whole thing for free and psneding all of their points, or having points left over 

 display
original price
use ___ points for 
*/