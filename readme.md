#babel-repl
node repl + [babel](https://github.com/babel/babel)

[![NPM](https://nodei.co/npm/babel-repl.png)](https://nodei.co/npm/babel-repl/)

```bash
npm install -g babel-repl
```

```bash
$ babel-repl
```

```js
var repl = require('babel-repl');
repl.start({
  prompt: "es6>> ",
  useColor: true
});

//for more options see
//https://nodejs.org/api/repl.html#repl_repl_start_options
```

#License
The MIT License (MIT)

Copyright (c) 2015 Paul Serraino

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
