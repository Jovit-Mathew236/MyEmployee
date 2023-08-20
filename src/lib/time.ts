export const relativeDATE = (value:string) => {
    return Date.parse(value) - 19800000;
 }
 
//past relative
function timeDifference(current:number, previous:number) {

    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const elapsed = current - previous;

    if (elapsed < msPerMinute)
         return Math.round(elapsed/1000) + ' seconds ago';   
    else if (elapsed < msPerHour)
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   

    else if (elapsed < msPerDay )
         return Math.round(elapsed/msPerHour ) + ' hours ago';   

    else if (elapsed < msPerMonth)
        return Math.round(elapsed/msPerDay) + ' days ago';   

    else if (elapsed < msPerYear)
        return Math.round(elapsed/msPerMonth) + ' months ago';   
    else
        return Math.round(elapsed/msPerYear ) + ' years ago';   
}
//future relative
function timeDifferenceFuture(current:number, previous:number) {

    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const elapsed = -(current - previous);

    if (elapsed < msPerMinute)
         return "in " + Math.round(elapsed/1000) + ' seconds';   
    else if (elapsed < msPerHour)
         return "in " + Math.round(elapsed/msPerMinute) + ' minutes';   
    else if (elapsed < msPerDay )
         return "in " + Math.round(elapsed/msPerHour ) + ' hours';   
    else if (elapsed < msPerMonth)
        return "in " + Math.round(elapsed/msPerDay) + ' days';   
    else if (elapsed < msPerYear)
        return "in " + Math.round(elapsed/msPerMonth) + ' months';   
    else
        return "in " + Math.round(elapsed/msPerYear ) + ' years ago';   
}

export const getTime= (current:number, previous:number) => {
    if (current > previous) {
        return timeDifference(current, previous)
    } else {
        return timeDifferenceFuture(current, previous)
    }
}

export const djangoTime = (date:string) => {
    return new Date(date).toISOString().slice(0, 19).replace('T', ' ');
}