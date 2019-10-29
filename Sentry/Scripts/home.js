function func6() {
  Sentry.addBreadcrumb({
    category: 'Simulação de Outros Valores',
    message: 'func6 foi chamada.',
    level: 'info'
  });
  lol.LogError(ex);
}
function func5() {
  Sentry.addBreadcrumb({
    category: 'Simulação de Outros Valores',
    message: 'func5 foi chamada.',
    level: 'info'
  });
  func6();
}
function func4() {
  Sentry.addBreadcrumb({
    category: 'Simulação de Outros Valores',
    message: 'func4 foi chamada.',
    level: 'info'
  });
  func5();
}
function func3() {
  Sentry.addBreadcrumb({
    category: 'Simulação de Outros Valores',
    message: 'func3 foi chamada.',
    level: 'info'
  });
  func4();
}
function func2() {
  Sentry.addBreadcrumb({
    category: 'Simulação de Outros Valores',
    message: 'func2 foi chamada.',
    level: 'info'
  });
  func3();
}
function func1() {
  Sentry.addBreadcrumb({
    category: 'Simulação de Outros Valores',
    message: 'func1 foi chamada.',
    level: 'info'
  });
  func2();
}

$(function () {
  func1();
});