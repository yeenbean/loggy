// internal functions
/**
 * Gets the current time, converts it to a string, and formats it for use in the
 * console log.
 * @returns Current time as a string in HH:mm format.
 */
function getTimeAsString(): string {
    // set vars
    const date = new Date();
    let hour = date.getHours().toString();
    let minute = date.getMinutes().toString();

    // format hour and minute if needed
    if (hour.length == 1) hour = "0" + hour;
    if (minute.length == 1) minute = "0" + minute;

    // return formatted string
    return `${hour}:${minute}`;
}

/**
 * Logs a message to the console. Prepends the current time.
 * The status message is three dots with no colored text.
 * @param message Message to log to the console.
 */
export function log(message: string): void {
    console.log(`    ${getTimeAsString()}: ${message}`);
}

/**
 * Logs a message to the console. Prepends the current time.
 * The status message uses three "+" symbols to indicate positive change.
 * @param message Message to log to the console.
 */
export function success(message: string): void {
    console.log(
        `[%c+%c] ${getTimeAsString()}: ${message}`,
        "color: green",
        "all: unset",
    );
}

/**
 * Logs a message to the console. Prepends the current time.
 * The status message uses three "-" symbols to indicate negative change.
 * @param message Message to log to the console.
 */
export function fail(message: string): void {
    console.log(
        `[%c-%c] ${getTimeAsString()}: ${message}`,
        "color: red",
        "all: unset",
    );
}

/**
 * Logs a message to the console. Prepends the current time.
 * The status message uses "NFO" to indicate a warning message.
 * @param message Message to log to the console.
 */
export function info(message: string): void {
    console.log(
        `[%ci%c] ${getTimeAsString()}: ${message}`,
        "color: yellow",
        "all: unset",
    );
}

/**
 * Logs a message to the console. Prepends the current time.
 * The status message uses "WRN" to indicate a warning message.
 * @param message Message to log to the console.
 */
export function warn(message: string): void {
    console.log(
        `[%c#%c] ${getTimeAsString()}: ${message}`,
        "color: orange",
        "all: unset",
    );
}

/**
 * Logs a message to the console. Prepends the current time.
 * The status message uses three "!" to indicate a critical error.
 * @param message Message to log to the console.
 */
export function critical(message: string): void {
    console.log(
        `[%c!%c] ${getTimeAsString()}: ${message}`,
        "color: red",
        "all: unset",
    );
}

/**
 * Logs a message to the console. Prepends the current time.
 * The status message uses three "↑" with a blue hue.
 * @param message Message to log to the console.
 */
export function up(message: string): void {
    console.log(
        `[%c↑%c] ${getTimeAsString()}: ${message}`,
        "color: blue",
        "all: unset",
    );
}

/**
 * Logs a message to the console. Prepends the current time.
 * The status message uses three "↓" with a blue hue.
 * @param message Message to log to the console.
 */
export function down(message: string): void {
    console.log(
        `[%c↓%c] ${getTimeAsString()}: ${message}`,
        "color: blue",
        "all: unset",
    );
}

// Test console logging methods if called directly.
if (import.meta.main) {
    log("log()");
    success("success()");
    fail("fail()");
    info("info()");
    warn("warn()");
    critical("critical()");
    up("up()");
    down("down()");
}
