import { DateTime } from "luxon";

/* 
Date and Time Functions
*/
export function DateTimeFunctionTH(dateTime) {
    const convertedDateTime = DateTime.fromISO(dateTime).setLocale('th').toLocaleString({ month: 'short', day: 'numeric', year: '2-digit', hour: '2-digit', minute: '2-digit' })
    return convertedDateTime
}

export function DateTimeFunctionUS(dateTime) {
    const convertedDateTime = DateTime.fromISO(dateTime).setLocale('en').toLocaleString({ month: 'short', day: 'numeric', year: '2-digit' })
    return convertedDateTime
}

/*
Sorting Functions
*/
export function studentActivitySortingFunction(arrayToBeSorted) {

}