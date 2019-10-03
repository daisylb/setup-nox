# setup-nox

<p align="left">
  <a href="https://github.com/excitedleigh/setup-nox"><img alt="GitHub Actions status" src="https://github.com/excitedleigh/setup-nox/workflows/Main%20workflow/badge.svg"></a>
</p>

This action sets up a Python environment with Nox by:

- Activating every version of Python that GitHub Actions supports.
- Installing Nox.

# Usage

Basic:
```yaml
steps:
- uses: actions/checkout@master
- uses: excitedleigh/setup-nox@master
- run: nox
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

# Contributions

Contributions are welcome!  See [Contributor's Guide](docs/contributors.md)
