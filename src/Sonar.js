const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'http://3.83.131.10:9000',
    token: "fa5ced58deb3515d33b50240380eeb8f93ad9650",
    options: {
      'sonar.projectName': 'Teste',
      'sonar.projectDescription': 'Teste com repositório público',
      'sonar.projectVersion': '1.0',
      'sonar.sourceEncoding': 'UTF-8'
    }
  },
  () => process.exit()
)