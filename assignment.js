// https://github.com/gaziismail/assignment

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

        var totalCost = days * 100;

    }
    else if (days <= 20) {

        var firstItem = 10 * 100;
        var remaing = days - 10;
        var secondItem = remaing * 80;
        var totalCost = firstItem + secondItem;

    }
    else {

        var firstItem = 10 * 100;
        var secondItem = 10 * 80;
        var remaing = days - 20;
        var thirdItem = remaing * 50;

        var totalCost = firstItem + secondItem + thirdItem;

    }
    return totalCost;
}