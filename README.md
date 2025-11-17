# ReplyBox

![ReplyBox Icon](assets/img/replybox.png)

## ReplyBox (replybox)

A TypeScript-based API that delivers jokes, facts, advice, motivation, and quotes via OpenAI, easily deployed locally or online, and ready for integration into any app.

## Description

This project provides a simple yet powerful interface to OpenAI's API for generating various types of content. ReplyBox wraps OpenAI's capabilities into easy-to-use methods, making it simple to integrate AI-generated content into your applications.

Whether you need to add humor, share knowledge, provide guidance, inspire users, or deliver memorable quotes, ReplyBox handles the complexity of API communication and prompt management for you.

## Features

- ✅ Generate humorous, family-friendly jokes.
- ✅ Retrieve interesting and educational facts.
- ✅ Provide thoughtful life advice.
- ✅ Deliver inspiring motivational messages.
- ✅ Create meaningful quotes.
- ✅ TypeScript support with full type safety.
- ✅ Customizable OpenAI model selection.
- ✅ Environment-based configuration.
- ✅ Simple API for seamless integration.

## Core Project Structure

```md
replybox/
├── src/
│   ├── services/
│   │   └── openAI.ts        # OpenAI helper service.
│   ├── lib/
│   │   ├── env.ts           # Environment utilities.
│   │   └── logger.ts        # Logger utility.
│   └── config/
│       └── openAI.json      # OpenAI configuration and prompts.
├── types/
│   ├── openAI.d.ts          # Type definitions for OpenAI service.
│   ├── env.d.ts             # Type definitions for environment utilities.
│   └── logger.d.ts          # Type definitions for logger.
├── .env.example             # Example environment variables.
├── LICENSE                  # Project license.
└── README.md               # This file, information about the project.
```

## Requirements

- Requires Node.js 18 or newer (tested on 18+).
- An OpenAI API key (get one at [openai.com/api](https://openai.com/api/)).
- TypeScript 5.0+ (included in dependencies).

## Installation

a. Clone this repository:

```bash
git clone https://github.com/yourusername/replybox.git
cd replybox
```

b. Install dependencies:

```bash
npm install
```

c. Create your environment file:

```bash
cp .env.example .env
```

d. Add your OpenAI API key to `.env`:

```env
EXPRESS_PORT=1234
OPENAI_API_KEY=your_api_key_here
OPENAI_MODEL=gpt-4
NODE_ENV=development
```

## Usage

### Command-Line Interface

Run the application:

```bash
npm run build
npm start
```

### As a TypeScript Module

You can also import and use ReplyBox in your own TypeScript/JavaScript projects:

```typescript
import OpenAIHelper from "#services/openAI";

// Initialize the helper.
const openAI = new OpenAIHelper(process.env["OPENAI_API_KEY"]);

// Generate a joke.
const joke = await openAI.createAJoke();
console.log(joke);  // Output: "Why did the chicken cross the road?..."

// Get a random fact.
const fact = await openAI.findAFact();
console.log(fact);  // Output: "Did you know that honey never spoils?..."
```

## Examples

### Generate a Joke

```typescript
>>> await openAI.createAJoke()
"Why don't scientists trust atoms? Because they make up everything!"
```

### Get a Random Fact

```typescript
>>> await openAI.findAFact()
"The Great Wall of China is not visible from space with the naked eye."
```

### Receive Life Advice

```typescript
>>> await openAI.sendSomeRandomAdvice()
"Always be kind to yourself. Progress, not perfection, is the goal."
```

### Get Motivation

```typescript
>>> await openAI.movingMotivation()
"You are capable of amazing things. Every step forward is progress."
```

### Generate a Quote

```typescript
>>> await openAI.quoter()
"The only way to do great work is to love what you do."
```

### Changing the Model

```typescript
>>> openAI.setModel("gpt-4-turbo")
>>> await openAI.createAJoke()
"What do you call a bear with no teeth? A gummy bear!"
```

## How It Works

### OpenAI Integration

ReplyBox uses OpenAI's API to generate content based on predefined prompts and instructions stored in `config/openAI.json`. Each method corresponds to a specific use case:

- **Joke Generator**: Creates humorous, family-friendly jokes.
- **Fact Maker**: Generates interesting and educational facts.
- **Advice Giver**: Provides thoughtful life advice.
- **Motivation Man**: Delivers inspiring motivational messages.
- **Quoter**: Creates meaningful quotes.

### Configuration

All prompts and instructions are configurable in `config/openAI.json`:

```json
{
  "defaultModel": "gpt-4",
  "jokeGenerator": {
    "input": "Tell me a joke",
    "instructions": "Generate a funny, family-friendly joke."
  },
  "factMaker": {
    "input": "Tell me a fact",
    "instructions": "Generate an interesting and educational fact."
  }
}
```

## API Reference

### `OpenAIHelper`

Main class for interacting with the OpenAI API.

#### Constructor

```typescript
new OpenAIHelper(apiKey?: string)
```

Creates a new instance of OpenAIHelper.

**Parameters:**

- `apiKey` (string, optional): Your OpenAI API key. If not provided, throws a fatal error.

**Example:**

```typescript
const openAI = new OpenAIHelper(process.env["OPENAI_API_KEY"]);
```

#### Methods

##### `setAPIKey(key: string): void`

Sets a new API key for the OpenAI client.

**Parameters:**

- `key` (string): The new API key to set.

**Example:**

```typescript
openAI.setAPIKey("sk-new-api-key");
```

##### `setModel(model: string): void`

Sets a new model for OpenAI requests.

**Parameters:**

- `model` (string): The model identifier to use for future requests (e.g., "gpt-4", "gpt-4-turbo").

**Example:**

```typescript
openAI.setModel("gpt-4-turbo");
```

##### `createAJoke(): Promise<string>`

Generates a joke using the OpenAI API.

**Returns:**

- `Promise<string>`: A joke generated by the AI.

**Example:**

```typescript
const joke = await openAI.createAJoke();
```

##### `findAFact(): Promise<string>`

Generates a random fact using the OpenAI API.

**Returns:**

- `Promise<string>`: A fact generated by the AI.

**Example:**

```typescript
const fact = await openAI.findAFact();
```

##### `sendSomeRandomAdvice(): Promise<string>`

Generates random advice using the OpenAI API.

**Returns:**

- `Promise<string>`: Advice generated by the AI.

**Example:**

```typescript
const advice = await openAI.sendSomeRandomAdvice();
```

##### `movingMotivation(): Promise<string>`

Generates motivational content using the OpenAI API.

**Returns:**

- `Promise<string>`: Motivational text generated by the AI.

**Example:**

```typescript
const motivation = await openAI.movingMotivation();
```

##### `quoter(): Promise<string>`

Generates a quote using the OpenAI API.

**Returns:**

- `Promise<string>`: A quote generated by the AI.

**Example:**

```typescript
const quote = await openAI.quoter();
```

## Testing

You can manually test ReplyBox by running this yourself locally or importing the module in your own TypeScript/JavaScript projects. All methods return promises and handle errors gracefully.

## License

This project is licensed under the Apache License 2.0 License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Author

### Kevin K. Le

## Acknowledgments

- [OpenAI](https://openai.com/) for providing the powerful API.
- [Chalk](https://www.npmjs.com/package/chalk) for beautiful terminal styling.
- Built as a practical tool for integrating AI-generated content into applications.

---

**Note:** This project requires an OpenAI API key. API usage may incur costs based on your OpenAI plan. Please review [OpenAI's pricing](https://openai.com/pricing) before deployment.
