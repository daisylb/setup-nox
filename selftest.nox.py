import nox
import sys

nox.options.error_on_missing_interpreters = True
nox.options.error_on_external_run = True

pythons = {
    'linux': ['2.7', '3.5', '3.6', '3.7', 'pypy', 'pypy3'],
    'windows': ['3.5', '3.6', '3.7'],
    'darwin': ['2.7', '3.5', '3.6', '3.7', 'pypy', 'pypy3'],
}[sys.platform]

@nox.session(python=pythons)
def tests(session):
    python = session.python
    if python == 'pypy':
        python = '2'
    if python == 'pypy3':
        python = '3'
    session.run(
        'python',
        '-c', 
        f'''
import sys
print(sys.version)
assert sys.version.startswith("{python}")
''')