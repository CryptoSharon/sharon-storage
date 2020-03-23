sharon-storage
=================

A simple persistent user settings framework for just about anything.

This is an adapted version of npm package electron-settings. It's still the same but now the config is stored at `path/to/process/data/config.json` and uses fs-extra and some other tiny changes so that it works with anything and not just Electron.

In fact I don't know if it works with Electron anymore. It will remain untested since I don't use Electron. Issues and pull-requests welcome if you care enough about the package.

Install
-------

```
$ npm install --save sharon-storage
```


Demo
----

```js
const conf = require('sharon-storage');

conf.set('toot', {toot: "Mamma mia!"}
conf.get('toot.toot') // "Mamma mia!"
```

Need help? Make an issue or contact me at [telegram.me/CryptoSharon](https://t.me/CryptoSharon)

Visit my blog at [peakd.com/@CryptoSharon](https://peakd.com/@cryptosharon)
