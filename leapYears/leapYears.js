const leapYears = function(year) {
    // const divBy4 = year % 4;
    // const divBy100 = year % 100;
    // const divBy400 = year % 400;
    // if (divBy4 === 0) {
    //     if (divBy100 === 0) {
    //         if (divBy400 === 0) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     } else {
    //         return true;
    //     }
    // } else {
    //     return false;
    // }

    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 == 0 )
}

module.exports = leapYears
