// DEFINE YOUR FUNCTION BELOW:
function returnDay(num){
    let weekdays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    if(num <1 || num>7){
        return null;
    }
    return weekdays[num-1]
}
