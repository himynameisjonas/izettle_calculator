function calculateChargesFromAmount(amount){
    var charges = 1.5;
    charges += amount * 0.0275;
    return parseFloat(charges.toFixed(2));
};

function calculateChargesFromCash(cash){
    var charges = 1.5;
    charges += ((cash + charges) / 97.25) * 2.75;
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