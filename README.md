# react-use-timediff

> React hook for calculate difference between two dates

[![NPM](https://img.shields.io/npm/v/react-use-timediff.svg)](https://www.npmjs.com/package/react-use-timediff) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

Using npm:

```bash
npm install --save react-use-timediff
```

using yarn:

```bash
yarn add react-use-timediff
```

## Usage

```jsx
import React, { Component } from "react";

import { useTimeDiff } from "react-use-timediff";

const Example = () => {
  const date = (new Date(2020, 11, 31,23,59,59)).getTime();

  const time = useTimeDiff(date, {
    live: true
  });

  return (
    <main>
      <h1>Remaing time to the end of the year: </h1>
      <section>
        <span>Days: {time?.days}</span>
        <span>Hours: {time?.hours}</span>
        <span>Minutes: {time?.minutes}</span>
        <span>Seconds: {time?.seconds}</span>
      </section>
    </main>;
  )
};
```

## API

```js
useTimeDiff(
  eventDate: number,
  options?: {
    startDate?: number,
    live?: boolean,
    interval?: number
  }
): Object
```

Required:

- `eventDate`: The final date, in milliseconds, to make the calculation.

Optional:

- `startDate`: The initial date to make the calculations, in milliseconds. If `live` is true, this will not be used.
  Default: Date.now();

- `live`: Whether it should update the time left, periodically, in the provided interval.
  Default: false;

- `interval`: The periodic update interval of the remaing time, in milliseconds. This will only be used if `live` is set to true.
  Default: 1000;

## License

MIT © [@adilsonmandlate](https://github.com/adilsonmandlate)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
