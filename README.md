<div align="center">

<div style="height: 1in">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="assets/logo-dark.svg">
        <source media="(prefers-color-scheme: light)" srcset="assets/logo-light.svg">
        <img src="assets/logo-dark.svg">
    </picture>
</div>

A simple console logging library for deno. Like...really simple.

[![GitHub](https://img.shields.io/github/license/yeenbean/loggy?style=for-the-badge)](https://github.com/yeenbean/loggy/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/yeenbean/loggy?style=for-the-badge)](https://github.com/yeenbean/loggy/issues)
[![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/yeenbean/loggy?style=for-the-badge)](https://github.com/yeenbean/loggy/commits/main)
[![Static Badge](https://img.shields.io/badge/Import-black?style=for-the-badge&logo=deno&logoColor=white)](https://deno.land/x/loggy)

</div>

---

**This repository exists to allow me to learn how to make modules with deno. I
do not expect anyone to use it but if you do...let me know!**

## Usage

### Quickstart

Simply import the module.

```ts
import * as loggy from "https://deno.land/x/loggy@0.0.1/main.ts";
```

### loggy by example

The code below...

```ts
import * as loggy from "https://deno.land/x/loggy@0.0.1/main.ts";

loggy.log("This is a standard log message.");
loggy.success("And this is a log message with a success status message.");
loggy.fail("Uh oh, something failed here.");
loggy.critical("Oops, a critical task failed!");
loggy.info("Loggy makes it easy to communicate events to developers.");
loggy.info("By utilizing the different status types loggy includes, you can");
loggy.info("make your important messages stand out without compromising log output.");
```

...will create this output!

![](/assets/loggy-by-example.png)

Check the [automatically generated documentation](https://deno.land/x/loggy/main.ts) for more logging options.