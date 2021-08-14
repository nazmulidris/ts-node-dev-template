# ts-node-dev-template

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [What is this?](#what-is-this)
  - [npm scripts](#npm-scripts)
  - [IDEA Run Configurations](#idea-run-configurations)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## What is this?

This is a template project that makes it easy to work w/ Node.js w/ TypeScript and Jest projects.
Make sure to run `npm install` before running the scripts or the IDEA Run Configurations shown
below.

### npm scripts

You can run the following npm scripts:

1. `npm run start` - This runs `main.ts`
2. `npm run test` - This runs all the Jest tests.
3. `npm run build` - This runs `tsc` and dumps the compiled output to the `build` folder.
   > When you run tests after running this command, you will see the test run twice. In this case
   > just delete the `build` folder.

### IDEA Run Configurations

You can also use IDEA Run Configurations that are included.

1. `Run all tests` - This uses `$PROJECT_DIR$/node_modules/.bin/ts-node-dev` to run all Jest test w/
   the `jestconfig.json` file (just like the npm script).
2. `main.ts` - This uses `$PROJECT_DIR$/node_modules/.bin/ts-node-dev` to run the file.
3. There are 3 npm scripts which just run the scripts above.
