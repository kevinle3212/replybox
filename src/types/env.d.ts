/**
 * @fileoverview Environment utility functions for managing Node.js environment variables and NODE_ENV configuration. Provides type-safe access to environment variables and NODE_ENV management.
 * @module #lib/env
 * @since 1.0.0
 */

/**
 * @description Represents the possible Node.js environment values.
 *
 * @example
 * const env: NodeEnv = "development";
 * if (env === "production") {
 *   // do production-specific logic
 * }
 * @since 1.0.0
 */
type NodeEnv = "development" | "testing" | "production";

declare module "#lib/env" {
  /**
   * @description Sets or retrieves the current NODE_ENV value. If a nodeEnv parameter is provided, it sets the NODE_ENV; otherwise, it returns the current NODE_ENV.
   * @function setOrGetNodeEnv
   * @public
   * @param {string} [nodeEnv] - The Node environment to set. If not provided, returns the current NODE_ENV.
   * @returns {string} The current or newly set NODE_ENV value.
   * @since 1.0.0
   */
  export function setOrGetNodeEnv(nodeEnv?: string): string;

  /**
   * @description Retrieves the value of an environment variable.
   * @function getEnv
   * @public
   * @param {string} env - The name of the environment variable to retrieve.
   * @returns {string | undefined} The value of the environment variable, or undefined if not found.
   * @since 1.0.0
   */
  export function getEnv(env: string): string | undefined;
}
