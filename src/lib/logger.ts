/**
 * @fileoverview Logger utility class for formatted console logging with colored severity levels and timestamps.
 * @module Logger
 * @author [Kevin K. Le]
 * @version 1.0.0
 * @since 1.0.0
 * @requires chalk
 * @see {@link https://www.npmjs.com/package/chalk|Chalk NPM Package}
 * @example
 * // Configure the locale.
 * Logger.setLocale("fr-FR");
 * 
 * Logger.log("Application started!"); // [INFORMATION] (1/1/2025 - 12:00:00 AM): Application started!
 */

import chalk, { type ChalkInstance } from "chalk";

/**
 * @description Mapping of log levels to their corresponding Chalk styling instances. Each level has a specific color scheme for console output formatting.
 * @constant {Record<LogLevel, ChalkInstance>} levels
 * @property {ChalkInstance} fatal - Red background with white text for fatal errors.
 * @property {ChalkInstance} error - Red text for errors.
 * @property {ChalkInstance} warning - Yellow text for warnings.
 * @property {ChalkInstance} debug - Blue text for debug messages.
 * @property {ChalkInstance} information - Green text for informational messages.
 * @since 1.0.0
 */
const levels: Record<LogLevel, ChalkInstance> = {
    fatal: chalk.bgRed.white,
    error: chalk.red,
    warning: chalk.yellow,
    debug: chalk.blue,
    information: chalk.green
};

/**
 * @class Logger
 * @classdesc A utility class for formatted console logging with colored severity levels, customizable locales, and timestamps. Provides static methods for logging at different severity levels (fatal, error, warning, debug, information).
 * @hideconstructor
 * @since 1.0.0
 * @see {@link https://www.npmjs.com/package/chalk|Chalk NPM Package}
 * @example
 * // Configure the logger locale.
 * Logger.setLocale("fr-FR");
 * 
 * @example
 * // Log at different severity levels.
 * Logger.info("Application started successfully!");
 * Logger.warning("Low memory detected.");
 * Logger.error("Failed to connect to database!");
 * Logger.fatal("Critical system failure.");
 * Logger.debug("User object:", userObj);
 * 
 * @example
 * // Use the general log method with custom level.
 * Logger.log("Custom message!", "warning", new Date());
 */
class Logger {
    /**
     * @description The locale string used for formatting timestamps across all Logger methods. This static property determines how dates and times are displayed in log output.
     * @private
     * @static
     * @type {string}
     * @default "en-US"
     * @memberof Logger
     * @since 1.0.0
     * @see {@link Logger.setLocale} - Method to update the locale configuration.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument|MDN Locale Documentation}
     * @example
     * // Internal Usage: Formats dates according to locale.
     * const date = new Date(); // Create a new date Object.
     * date.toLocaleDateString(Logger.locale); // Uses this property.
     */
    private static locale: string = "en-US";

    /**
     * @description Sets the locale for all Logger timestamp formatting.
     * @function setLocale
     * @memberof Logger
     * @public
     * @static
     * @param {string} locale - The locale string to use for date/time formatting (e.g., "en-US", "fr-FR", "de-DE").
     * @returns {void}
     * @example <caption>Setting the locale to French.</caption>
     * Logger.setLocale("fr-FR");
     * Logger.info("Bonjour!"); // [INFORMATION] (16/11/2025 - 17:50:22): Bonjour!
     * 
     * @example <caption>Setting the locale to German.</caption>
     * Logger.setLocale("de-DE");
     * Logger.error("Ein Fehler ist aufgetreten!"); // [ERROR] (16.11.2025 - 17:50:22): Ein Fehler ist aufgetreten!
     * 
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument|MDN Locale Documentation}
     * @since 1.0.0
     */
    public static setLocale(locale: string): void {
        Logger.locale = locale;
    }

    /**
     * Logs any fatal or potentially dangerous errors to the console with a timestamp.
     * @function fatal
     * @memberof Logger
     * @public
     * @static
     * @param {any} message - The message or item to send to the console.
     * @param {Date} [date=new Date()] - The timestamp to associate with the log. Defaults to the current date/time.
     * @returns {void}
     * @example <caption>Basic fatal log.</caption>
     * Logger.fatal("A fatal operation has happened! The operation will stop."); // Output: [FATAL] (11/16/2025 - 5:50:22 PM): A fatal operation has happened! The operation will stop.
     * 
     * @see {@link Logger.log} - General logging method with a configurable level and Date object.
     * @since 1.0.0
     */
    public static fatal(message: any, date: Date = new Date()): void {
        const level = "fatal";
        
        this.log(message, level, date);
    }

    /**
     * @description Logs any errors to the console with a timestamp.
     * @function error
     * @memberof Logger
     * @public
     * @static
     * @param {any} message - The message or item to send to the console.
     * @param {Date} [date=new Date()] - The timestamp to associate with the log. Defaults to the current date/time.
     * @returns {void}
     * @example <caption>Basic error log.</caption>
     * Logger.error("An error has occurred! The operation will cease."); // Output: [ERROR] (11/16/2025 - 3:20:51 PM): An error has occurred! The operation will cease.
     * 
     * @see {@link Logger.log} - General logging method with a configurable level and Date object.
     * @since 1.0.0
     */
    public static error(message: any, date: Date = new Date()): void {
        const level = "error";
        
        this.log(message, level, date);
    }

    /**
     * @description Logs any warnings to the console with a timestamp.
     * @function warning
     * @memberof Logger
     * @public
     * @static
     * @param {any} message - The message or item to send to the console.
     * @param {Date} [date=new Date()] - The timestamp to associate with the log. Defaults to the current date/time.
     * @returns {void}
     * @example <caption>Basic warning log.</caption>
     * Logger.warning("This operation can potentially be dangerous."); // Output: [WARNING] (11/16/2025 - 3:20:51 PM): This operation can potentially be dangerous.
     * 
     * @see {@link Logger.log} - General logging method with a configurable level and Date object.
     * @since 1.0.0
     */
    public static warning(message: any, date: Date = new Date()): void {
        const level = "warning";

        this.log(message, level, date);
    }

    /**
     * @description Logs any debug items and messages to the console with a timestamp.
     * @function debug
     * @memberof Logger
     * @public
     * @static
     * @param {any} message - The message or item to send to the console.
     * @param {Date} [date=new Date()] - The timestamp to associate with the log. Defaults to the current date/time.
     * @returns {void}
     * @example <caption>Log a debug message with a custom date.</caption>
     * Logger.debug("This is a debug message.", new Date("2025-11-16T15:00:00")); // [DEBUG] (11/16/2025 - 3:15:00 PM): This is a debug message.
     * 
     * @see {@link Logger.log} - General logging method with a configurable level and Date object.
     * @since 1.0.0
     */
    public static debug(message: any, date: Date = new Date()): void {
        const level = "debug";

        this.log(message, level, date);
    }

    /**
     * @description Logs an informational message to the console with a timestamp.
     * @function info
     * @memberof Logger
     * @public
     * @static
     * @param {any} message - The message or item to send to the console.
     * @param {Date} [date=new Date()] - The timestamp to associate with the log. Defaults to the current date/time.
     * @returns {void}
     * @example <caption>Basic informational log.</caption>
     * Logger.info("Application started successfully."); // Output: [INFORMATION] (11/16/2025 - 3:20:51 PM): Application started successfully.
     * 
     * @example <caption>Informational log with a custom timestamp.</caption>
     * const customDate = new Date("2025-01-01");
     * Logger.info("System initialized", customDate); // [INFORMATION] (1/1/2025 - 12:00:00 AM): System initialized.
     * 
     * @see {@link Logger.log} - General logging method with a configurable level and Date object.
     * @since 1.0.0
     */
    public static info(message: any, date: Date = new Date()): void {
        const level = "information";

        this.log(message, level, date);
    }

    /**
     * @description Logs a message to the console with a colored severity level and timestamp.
     * @function log
     * @memberof Logger
     * @private
     * @static
     * @param {any} message - The message or item to send to the console.
     * @param {LogLevel} [level="information"] - The level to log the message as.
     * @param {Date} [date=new Date()] - The timestamp to associate with the log. Defaults to the current date/time.
     * @returns {void}
     * @example <caption>Basic usage example with the debug level.</caption>
     * Logger.log("Hello, world!", "debug"); // [DEBUG] (11/16/2025 - 3:21:35 PM): Hello, world!
     * 
     * @example <caption>Basic usage example with the default level.</caption>
     * Logger.log("Foo, bar."); // [INFORMATION] (11/16/2025 - 3:20:51 PM): Foo, bar.
     * 
     * @example <caption>Logging with a custom timestamp at an error level.</caption>
     * const customDate = new Date('2025-01-01');
     * Logger.log("Oops! Something went wrong.", "error", customDate); // [ERROR] (1/1/2025 - 12:00:00 AM): Oops! Something went wrong.
     * 
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Console/log|Console.log}
     * @since 1.0.0
     */
    private static log(message: any, level: LogLevel = "information", date: Date = new Date()): void {
        const logLevel = levels[level];

        const localeDate = date.toLocaleDateString(this.locale);
        const time = date.toLocaleTimeString(this.locale);

        console.log(logLevel(`[${level.toUpperCase()}] (${localeDate} - ${time}):`, message));
    }
}

export default Logger;