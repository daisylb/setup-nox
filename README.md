# setup-nox

Use the Nox testing automation tool for Python in GitHub Actions.

<p align="left">
  <a href="https://github.com/excitedleigh/setup-nox"><img alt="GitHub Actions status" src="https://github.com/excitedleigh/setup-nox/workflows/Main%20workflow/badge.svg"></a>
</p>

This action sets up a Python environment with Nox by:

- Activating every version of Python that GitHub Actions supports.
- Installing Nox.

After you use it, you'll be able to use Nox with [every Python version available on GitHub Actions][actions-installed]. Nox itself will be installed in the newest available Python version.

This action runs in the GitHub Actions environment itself and not in Docker, which means it works on Linux, Windows and macOS, but only with the available Python versions. If you need Python versions outside that, but you only need Linux, you can also try the [thekevjames/nox Docker images][nox-docker].

It is forked from the official [actions/setup-python][original-action] action by GitHub.

[actions-installed]: https://help.github.com/en/articles/software-in-virtual-environments-for-github-actions
[nox-docker]: https://hub.docker.com/r/thekevjames/nox
[original-action]: https://github.com/actions/setup-python

# Usage

Basic:

```yaml
steps:
  - uses: actions/checkout@v2
  - uses: excitedleigh/setup-nox@1.0.0
  - run: nox --force-color
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

# Contributions

Contributions are welcome! See [Contributor's Guide](docs/contributors.md)
