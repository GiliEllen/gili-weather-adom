export const handleError = (error:Error) => {
    if (error.message.includes("Network Error")) {       
        return "You've lost connection. Please reconnect and try again."
    } else if (error.message.includes("400")) {
        return "No match found. Please try something else."
    }
    else {
        return "Somthing went wrong."
    }
}