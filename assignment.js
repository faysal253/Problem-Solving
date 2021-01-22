// ...............github.link..............
// https://github.com/faysal253/assignment3


// 01
// kilometerToMeter  
function kilometerToMeter(kilometer) {
	if (kilometer >= 0) {
		var meter = kilometer * 1000;

		return meter;
	} else {
		return 'Kilometer value is not be negative';
	}
} 


// 02
// budgetCalculator
function budgetCalculator(watch, mobile, laptop){
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    // calculate total budget 
    var totalPrice = (watchPrice + mobilePrice + laptopPrice);
    return totalPrice;
}


// 04
// megaFriends
function megaFriends(friendsName){
    var longestName = "";
    for(i = 0; i < friendsName.length; i++){
        if(friendsName[i].length > longestName.length){
            longestName = friendsName[i];
        }
    }return longestName;
    
}



// 03
// hotelCost
function hotelCost(dayCount) {
    var totalPrice = 0;
    if (dayCount <= 10) {
        totalPrice = dayCount * 100;
    } else if (dayCount <= 20) {
        var firstStayPrice = 10 * 100;
        var secondStay = dayCount - 10;
        var secondStayPrice = secondStay * 80;
        // TOTAL 
        var totalPrice = firstStayPrice + secondStayPrice;
    } else {
        var firstStayPrice = 10 * 100;
        var secondStayPrice = 10 * 80;
        var thirdStay = dayCount - 20;
        var thirdStayPrice = thirdStay * 50;
        // TOTAL 
        var totalPrice = firstStayPrice + secondStayPrice + thirdStayPrice;
    }
    return totalPrice;
}

