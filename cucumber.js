module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['src/steps/**/*.ts', 'src/support/**/*.ts'],
    paths: ['src/features/**/*.feature'],
    format: ['progress', 'html:reports/cucumber-report.html']
  }
};