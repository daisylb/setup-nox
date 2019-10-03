import nox

@nox.session(python=['2.7', '3.4', '3.5', '3.6', '3.7'])
def tests(session):
    session.run('python', '-c', f'import sys; assert sys.version.startswith("{session.python}")')