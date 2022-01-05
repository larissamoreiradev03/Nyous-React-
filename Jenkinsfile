pipeline{

    agent any
    
    tools {nodejs "nodejs"}




    stages{

       stage('GetCode'){

            steps{

                git 'https://github.com/larissamoreiradev03/Nyous-React-.git'

            }

         }        

       stage('Build'){

            steps{
                sh 'npm install -g --force'
                sh 'echo "PASSOU PELO NPM INSTALL"'

            }

         }

 stage('SonarQube analysis') {
      steps {
        script {
          // requires SonarQube Scanner 2.8+
          scannerHome = tool 'SonarQubeScanner-9.2.1.49989'
        }
        withSonarQubeEnv('SonarQube Scanner') {
          sh "${scannerHome}/bin/sonar-scanner"
        }
      }
    }

    }

}