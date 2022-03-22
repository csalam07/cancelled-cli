# welcome-for-cli

> Let you display cancellation message of a Node.js CLI whenever user pressed CTRL + C or COMMAND (⌘) + C

<br>

## Installation

### npm

```sh
npm install cancelled-cli
```

### Yarn

```sh
yarn add cancelled-cli
```

## Usage

```js
import cancelledCli from 'cancelled-cli';

//  user canceled the CLI execution for any specific response
const res = await getUserResponse();

cancelledCli(res);
// ❯ Cancelled!
```

<br>

## License

- MIT © [cslam07](https://twitter.com/CSALam12/)
