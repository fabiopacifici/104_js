
// define the end date time for the countdown
// use the setInterval to create a loop that will stop when we reach the end date
setInterval(countDown, 1000)
/**
 *  
 * @param {Date} endDate The date
*/
function countDown() {
  

  const endDateTime = new Date('06/09/2023 9:30')
   console.log(endDateTime.getMilliseconds());


}


