/**
 * @fileoverview Environment utilities for initializing and retrieving application settings. Ensures `.env` values are loaded and provides safe access to environment variables.
 * @module env
 * @author [Kevin K. Le]
 * @version 1.0.0
 * @since 1.0.0
 * @requires dotenv
 * @see {@link https://www.npmjs.com/package/dotenv|dotenv NPM Package}
 */

import { config } from "dotenv";
import Logger from "./logger.ts";

/**
 * @description Initializes dotenv to load environment variables from .env file into process.env.
 * @function config
 * @memberof dotenv
 * @returns {void}
 * @see {@link https://www.npmjs.com/package/dotenv|dotenv NPM Package}
 * @since 1.0.0
 */
config();

/**
 * @description Sets `process.env.NODE_ENV` if a value is provided, otherwise returns the current environment. Defaults to `"development"` when undefined.
 * @param {string} [nodeEnv] - Optional environment value (e.g., `"development"`, `"testing"`, `"production"`).
 * @returns {string} The resolved environment value.
 * @example
 * setOrGetNodeEnv("production"); // "production"
 *
 * @example
 * setOrGetNodeEnv(); // => The existing 'NODE_ENV' or "development".
 */
const setOrGetNodeEnv = (nodeEnv?: NodeEnv): string => {
    process.env["NODE_ENV"] = nodeEnv ?? process.env["NODE_ENV"] ?? "development";
    return process.env["NODE_ENV"];
};

/**
 * @description Retrieves the value of a specific environment variable. Logs an error when the variable is missing.
 * @param {string} env - The environment variable key to retrieve.
 * @returns {string | undefined} The variable value, or `undefined` if missing.
 * @example
 * getEnv("API_KEY"); // => "ABC123"
 *
 * @example
 * getEnv("MISSING_KEY"); // Logs error and returns undefined.
 */
const getEnv = (env: string): string | undefined => {
    const variable = process.env[env];

    if (!variable) {
        Logger.error(
            `The key '${env}' does not exist! Check the '*.env' path or key name and ensure it has the correct spellng.`
        );

        return undefined;
    }

    return variable;
};

export { setOrGetNodeEnv, getEnv };