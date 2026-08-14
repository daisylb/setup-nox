# Contributing

If you discover issues, have ideas for improvements or new features, please report them to the [issue tracker](https://github.com/fjwillemsen/setup-nox2/issues) (see 'Issue reporting' below).
If you feel like addressing the issue yourself, you can help by submitting a pull request (see 'Contributing essentials').
Please follow these guidelines. 

## Issue reporting

* Check that the issue has not already been reported.
* Check that the issue has not already been fixed in the latest code (a.k.a. `main`).
* Be clear, concise and precise in your description of the problem.
* Open an issue with a descriptive title and a summary in grammatically correct, complete sentences.
* Mention your Python version and operating system.
* Include any relevant code to the issue summary.

A [Minimal Working Example (MWE)](https://en.wikipedia.org/wiki/Minimal_Working_Example) can help.

### Reporting bugs

When reporting bugs it's a good idea to provide stacktrace messages to the bug report makes it easier to track down bugs. 
Some steps to reproduce a bug reliably would also make a huge difference.

## Contributing essentials

The essential steps to contribute via a pull request are:
- Make sure you are on Node version 24 and the latest compatible NPM version
- Clone this repository
- Run `npm install`
- Run `npm run prepare` (this installs Husky so we have commit hooks, see 'build output' below)
- Create a branch and make your desired changes
- If you've changed any dependencies, run `npm update`
- Commit your changes using a clear commit message. **Do not** checkin node_modules. 
- After you have commited, Husky should build the project and add the contents of /dist to your commit. Make sure that this happened without errors. 
- You can now push and open a pull request, see 'pull requests' below. 

### Pull requests

* Read [how to properly contribute to open source projects on Github](http://gun.io/blog/how-to-github-fork-branch-and-pull-request).
* Use a topic branch to easily amend a pull request later, if necessary.
* Make sure that all tests are passing (run `nox`). This will be checked via GitHub Actions tests, so not meeting the tests will result in rejection. 
* Use the same coding conventions as the rest of the project, can easily be checked by running `nox -s lint`. This is enforced by `ruff` on pull requests, so not doing this will result in rejection. 
* Write good, descriptive commit messages.
* Mention related tickets in the commit messages (e.g. `[Fix #N] Add command ...`).
* Update the [changelog](https://github.com/python-constraint/python-constraint/blob/main/CHANGELOG.md).
* Squash related commits together.
* Open a [pull request](https://help.github.com/articles/using-pull-requests) that relates to *only* one subject with a clear title and description in grammatically correct, complete sentences.

### Build output

In order to include something GitHub Actions can run in the repo without committing `node_modules`, we run [ncc][], which bundles up dependencies and compiles TypeScript to JavaScript (sort of like a Webpack for node.js).

This repo is configured to run [ncc][] and [Prettier][] using [Husky][]; all you need to do is make sure you `npm install`, and then when you `git commit` Husky should run, build the files, and add them to your commit.

[ncc]: https://github.com/vercel/ncc
[Husky]: https://github.com/typicode/husky
[Prettier]: https://github.com/prettier/prettier
