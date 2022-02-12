window.onload = function(){
  var previousBill = 130;
  document.getElementById("previousBill").innerHTML = previousBill; // Inputs into HTML

  var currentBill = 156; // This would be taken from a QR code.

  var differenceInBill = averageBill - currentBill;
  differenceInBill = differenceInBill.toFixed();
  if(differenceInBill >= 1){  // If you saved
      var points = differenceInBill * 5;
      document.getElementById("pointsEarned").innerHTML = "You saved $" + differenceInBill + " compared to your average electricity bill. You earned " + points + " points!";
  }else if(differenceInBill == 0){
      document.getElementById("pointsEarned").innerHTML = "You matched your average bill. Try saving an extra dollar to earn points next time!";
  }else{
      document.getElementById("pointsEarned").innerHTML = "You didn't earn any points. To earn points, you needed to save at least " + parseFloat(Math.abs(differenceInBill) + 1) + " more dollar(s)!";
  };

};