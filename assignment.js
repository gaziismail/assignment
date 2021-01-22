// kilometer to meter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}


//budgetCalculator
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;

    var totalPrice = watchPrice + phonePrice + laptopPrice;

    return totalPrice;
}


//hotelCost
function hotelCost(days) {

    if (days <= 10) {

        var totalCost = 100 * days;

    }
    else if (days <= 20) {

        var firstitem = 10 * 100;
        var remaing = days - 10;
        var seconditem = remaing * 80;
        var totalCost = firstitem + seconditem;

    }
    else {

        var firstitem = 10 * 100;
        var seconditem = 10 * 80;
        var remaing = days - 20;
        var thirditem = remaing * 50;

        var totalCost = firstitem + seconditem + thirditem;

    }
    return totalCost;