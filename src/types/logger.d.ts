/**
 * @fileoverview Type definitions for the Logger utility class. Provides TypeScript declarations for formatted console logging with colored severity levels and timestamps.
 * @module Logger
 * @author [Kevin K. Le]
 * @version 1.0.0
 * @since 1.0.0
 */

/**
 * @description Represents the severity level of a log message.
 * @example
 * const level: LogLevel = "error";
 * Logger.log(level, "An error occurred.");
 *
 * @since 1.0.0
 */
type LogLevel = "fatal" | "error" | "warning" | "debug" | "information";

declare module "#lib/logger" {
  /**
   * @description A utility class for formatted console logging with colored severity levels, customizable locales, and timestamps. Provides static methods for logging at different severity levels (fatal, error, warning, debug, information).
   * @class Logger
   * @since 1.0.0
   */
  export default class Logger {
    /**
     * @description The locale string used for formatting timestamps across all Logger methods.
     * @private
     * @static
     * @type {string}
     */
    private static locale: string;

    /**
     * @description Sets the locale for all Logger timestamp formatting.
     * @function setLocale
     * @public
     * @static
     * @param {string} locale - The locale string to use for date/time formatting (e.g., "en-US", "fr-FR", "de-DE").
     * @returns {void}
     */
    public static setLocale(locale: string): void;

    /**
     * @description Logs any fatal or potentially dangerous errors to the console with a timestamp.
     * @function fatal
     * @public
     * @static
     * @param {any} message - The message or item to send to the console.
     * @param {Date} [date] - The timestamp to associate with the log. Defaults to the current date/time.
     * @returns {void}
     */
    public static fatal(message: any, date?: Date): void;

    /**
     * @description Logs any errors to the console with a timestamp.
     * @function error
     * @public
     * @static
     * @param {any} message - The message or item to send to the console.
     * @param {Date} [date] - The timestamp to associate with the log. Defaults to the current date/time.
     * @returns {void}
     */
    public static error(message: any, date?: Date): void;

    /**
     * @description Logs any warnings to the console with a timestamp.
     * @function warning
     * @public
     * @static
     * @param {any} message - The message or item to send to the console.
     * @param {Date} [date] - The timestamp to associate with the log. Defaults to the current date/time.
     * @returns {void}
     */
    public static warning(message: any, date?: Date): void;

    /**
     * @description Logs any debug items and messages to the console with a timestamp.
     * @function debug
     * @public
     * @static
     * @param {any} message - The message or item to send to the console.
     * @param {Date} [date] - The timestamp to associate with the log. Defaults to the current date/time.
     * @returns {void}
     */
    public static debug(message: any, date?: Date): void;

    /**
     * @description Logs an informational message to the console with a timestamp.
     * @function info
     * @public
     * @static
     * @param {any} message - The message or item to send to the console.
     * @param {Date} [date] - The timestamp to associate with the log. Defaults to the current date/time.
     * @returns {void}
     */
    public static info(message: any, date?: Date): void;

    /**
     * @description Logs a message to the console with a colored severity level and timestamp.
     * @function log
     * @private
     * @static
     * @param {any} message - The message or item to send to the console.
     * @param {LogLevel} [level] - The level to log the message as.
     * @param {Date} [date] - The timestamp to associate with the log. Defaults to the current date/time.
     * @returns {void}
     */
    private static log(message: any, level?: LogLevel, date?: Date): void;
  }
}
