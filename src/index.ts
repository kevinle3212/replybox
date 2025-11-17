/**
 * @fileoverview Main Express application entry point for ReplyBox API. Provides REST endpoints for generating jokes, facts, advice, motivation, and quotes using OpenAI.
 * @module index
 * @author [Kevin K. Le]
 * @version 1.0.0
 * @since 1.0.0
 * @requires express
 * @requires #lib/logger
 * @requires #lib/env
 * @requires #services/openAI
 * @see {@link https://www.npmjs.com/package/expressjs|Express NPM Package}
 * @see {@link https://expressjs.com/|Express Documentation}
 * @example
 * // Build, then start the application.
 * npm run build
 * npm start
 * 
 * // Access Endpoints:
 * GET http://localhost:3000/joker
 * GET http://localhost:3000/fact
 * GET http://localhost:3000/advice
 * GET http://localhost:3000/motivator
 * GET http://localhost:3000/quoteSomeone
 */

import express from "express";
import Logger from "#lib/logger";
import { getEnv, setOrGetNodeEnv } from "#lib/env";
import OpenAIHelper from "#services/openAI";

/**
 * The current Node.js environment (development, testing, or production).
 * @constant {string} nodeEnv
 * @since 1.0.0
 */
const nodeEnv = setOrGetNodeEnv();

/**
 * The port number for the Express server.
 * @constant {string | undefined} port
 * @since 1.0.0
 */
const port = getEnv("EXPRESS_PORT");

/**
 * The OpenAI API key for authentication.
 * @constant {string | undefined} apiKey
 * @since 1.0.0
 */
const apiKey = getEnv("OPENAI_API_KEY");

/**
 * Express application instance.
 * @constant {express.Application} app
 * @since 1.0.0
 */
const app = express();

/**
 * OpenAI helper instance for generating content.
 * @constant {OpenAIHelper} openAI
 * @since 1.0.0
 */
const openAI = new OpenAIHelper(apiKey);

/**
 * @description Root endpoint - Returns a simple greeting message.
 * @function
 * @name GET /
 * @memberof module:index
 * @param {express.Request} _req - Express request object (unused).
 * @param {express.Response} res - Express response object.
 * @returns {void}
 * @example
 * // GET http://localhost:3000/
 * // Response: "Hello, world!"
 * 
 * @since 1.0.0
 */
app.get("/", (_req, res) => {
    res.send("Hello, world!");
});

/**
 * @description Joke generation endpoint - Returns an AI-generated joke.
 * @function
 * @name GET /joker
 * @memberof module:index
 * @async
 * @param {express.Request} _req - Express request object (unused).
 * @param {express.Response} res - Express response object.
 * @returns {Promise<void>}
 * @example
 * // GET http://localhost:3000/joker
 * // Response: "Why did the chicken cross the road?..."
 * 
 * @since 1.0.0
 */
app.get("/joker", async (_req, res) => {
    const joke = await openAI.createAJoke();

    res.send(joke);
});

/**
 * @description Fact generation endpoint - Returns an AI-generated fact.
 * @function
 * @name GET /fact
 * @memberof module:index
 * @async
 * @param {express.Request} _req - Express request object (unused).
 * @param {express.Response} res - Express response object.
 * @returns {Promise<void>}
 * @example
 * // GET http://localhost:3000/fact
 * // Response: "Did you know that honey never spoils?..."
 * 
 * @since 1.0.0
 */
app.get("/fact", async (_req, res) => {
    const fact = await openAI.findAFact();

    res.send(fact);
});

/**
 * @description Advice generation endpoint - Returns AI-generated advice.
 * @function
 * @name GET /advice
 * @memberof module:index
 * @async
 * @param {express.Request} _req - Express request object (unused).
 * @param {express.Response} res - Express response object.
 * @returns {Promise<void>}
 * @example
 * // GET http://localhost:3000/advice
 * // Response: "Always be kind to yourself..."
 * 
 * @since 1.0.0
 */
app.get("/advice", async (_req, res) => {
    const advice = await openAI.sendSomeRandomAdvice();

    res.send(advice);
});

/**
 * @description Motivation generation endpoint - Returns AI-generated motivational content.
 * @function
 * @name GET /motivator
 * @memberof module:index
 * @async
 * @param {express.Request} _req - Express request object (unused).
 * @param {express.Response} res - Express response object.
 * @returns {Promise<void>}
 * @example
 * // GET http://localhost:3000/motivator
 * // Response: "You are capable of amazing things..."
 * 
 * @since 1.0.0
 */
app.get("/motivator", async (_req, res) => {
    const motivation = await openAI.movingMotivation();

    res.send(motivation);
});

/**
 * @description Quote generation endpoint - Returns an AI-generated quote.
 * @function
 * @name GET /quoteSomeone
 * @memberof module:index
 * @async
 * @param {express.Request} _req - Express request object (unused).
 * @param {express.Response} res - Express response object.
 * @returns {Promise<void>}
 * @example
 * // GET http://localhost:3000/quoteSomeone
 * // Response: "The only way to do great work is to love what you do..."
 *
 * @since 1.0.0
 */
app.get("/quoteSomeone", async (_req, res) => {
    const quote = await openAI.quoter();

    res.send(quote);
});

/**
 * @description Starts the Express server and listens on the configured port. Logs the server startup information using the Logger utility.
 * @function
 * @memberof module:index
 * @param {string | undefined} port - The port number to listen on.
 * @param {Function} callback - Callback function executed when server starts.
 * @returns {void}
 * @since 1.0.0
 */
app.listen(port, () => {
    Logger.info(`Application is in ${nodeEnv} listening on ${port}.`);
});