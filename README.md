# setup-nox2

Use the Nox test automation tool for Python in GitHub Actions.
Based on the no longer maintained [setup-nox](https://github.com/daisylb/setup-nox) by @daisylb, this action has been updated to provide Node 24 support, as well as updated dependencies. 

[![Test & Lint](https://github.com/fjwillemsen/setup-nox2/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/fjwillemsen/setup-nox2/actions/workflows/test.yml)

This action sets up a Python environment with Nox by:

- Activating every version of Python that GitHub Actions supports.
- Installing Nox.

After you use it, you'll be able to use Nox with [every Python version available on GitHub Actions][actions-installed]. Nox itself will be installed in the newest available Python version.

This action runs in the GitHub Actions environment itself and not in Docker, which means it works on Linux, Windows and macOS, but only with the available Python versions. If you need Python versions outside that, but you only need Linux, you can also try the [thekevjames/nox Docker images][nox-docker].

[actions-installed]: https://github.com/actions/virtual-environments#available-environments
[nox-docker]: https://hub.docker.com/r/thekevjames/nox

## Usage

Basic:

```yaml
steps:
  - uses: actions/checkout@v7
  - uses: fjwillemsen/setup-nox2@v4
  - run: nox
```

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

## Contributions

Contributions are welcome! See [Contributor's Guide](CONTRIBUTING.md)
