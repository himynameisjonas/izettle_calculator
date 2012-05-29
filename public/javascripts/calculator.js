window.addEventListener('load', function(e) {
  if (window.applicationCache) {
    window.applicationCache.addEventListener('updateready', function(e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
          // Browser downloaded a new app cache.
          // Swap it in and reload the page to get the new hotness.
          window.applicationCache.swapCache();
          if (confirm('A new version of this site is available. Load it?')) {
            window.location.reload();
          }
        } else {
          // Manifest didn't changed. Nothing new to server.
        }
    }, false);
  }
}, false);

function calculateChargesFromAmount(amount){
    charges = amount * 0.0275;
    return parseFloat(charges.toFixed(2));
};

function calculateChargesFromCash(cash){
    charges = (cash / 97.25) * 2.75;
    return parseFloat(charges.toFixed(2));
};

function prepareOutputValue(value){
    if (isNaN(value)) {
        return "";
    }else{
        return value.toString().replace(".",",");
    }
};

function prepareInputValue(value){
    return parseFloat(value.replace(/ /g,"").replace(",","."));
};

$(function() {
    var amountField  = $("#amount");
    var chargesField = $("#charges");
    var cashField    = $("#cash");

    amountField.keyup(function(){
        var amount = prepareInputValue(amountField.val());
        var charges = calculateChargesFromAmount(amount);
        chargesField.val(prepareOutputValue(charges));
        cashField.val(prepareOutputValue(amount - charges));
    });

    cashField.keyup(function(){
        var cash = prepareInputValue(cashField.val());
        var charges = calculateChargesFromCash(cash);
        chargesField.val(prepareOutputValue(charges));
        amountField.val(prepareOutputValue(cash + charges));
    });

});