# ts-node-dev-template

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [What is this?](#what-is-this)
- [npm scripts](#npm-scripts)
- [IDEA Run Configurations](#idea-run-configurations)
- [How to update the template](#how-to-update-the-template)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## What is this?

This is a template project that makes it easy to work w/ Node.js w/ TypeScript and Jest projects.
Make sure to run `npm install` before running the scripts or the IDEA Run Configurations shown
below.

## npm scripts

You can run the following npm scripts:

1. `npm run start` - This runs `main.ts`
2. `npm run test` - This runs all the Jest tests.

> ✨ Note there is no `build` script, because this project uses [`tsm`][2021-12-01.tsm] in order to
> quickly compile and run TypeScript files using Node.js.

[2021-12-01.tsm]: https://www.npmjs.com/package/tsm

## IDEA Run Configurations

You can also use IDEA Run Configurations that are included.

1. `Run all tests` - This runs all the tests in Jest (using `ts-jest`).
2. `main.ts` - This uses Node.js w/ `tsm` to run the `src/main.ts` file.
3. The following npm scripts are provided.
   1. Run the tests (`test`).
   2. Watch all the tests running (`test-watch`).
   3. Run the `main.ts` file (`start`).
   4. Run the linter (`lint`).

## How to update the template

You can get more info on this topic [here](https://stackoverflow.com/a/56577320/2085356). Here are
the steps to create a remote called `template` that we will pull the changes from and then merge
those changes into `main`.

```shell
git remote add template https://github.com/nazmulidris/ts-node-dev-template
git pull template main
```
