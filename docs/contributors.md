# Contributors

### Checkin

- Do checkin source (src)
- Do checkin build output (dist)
- **Do not** checkin node_modules

### Build output

In order to include something GitHub Actions can run in the repo without  committing `node_modules`, we run [ncc][], which bundles up dependencies and compiles TypeScript to JavaScript (sort of like a Webpack for node.js).

This repo is configured to run [ncc][] and [Prettier][] using [Husky][]; all you need to do is make sure you `npm install`, and then when you `git commit` Husky should run, build the files, and add them to your commit.

[ncc]: https://github.com/zeit/ncc
[Husky]: https://github.com/typicode/husky
[Prettier]: https://github.com/prettier/prettier