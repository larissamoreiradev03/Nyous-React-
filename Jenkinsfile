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

                sh 'npm install'

            }

         }

 stage('SonarQube analysis') {
      steps {
        script {
          // requires SonarQube Scanner 2.8+
          scannerHome = tool 'SonarQube Scanner 2.8'
        }
        withSonarQubeEnv('SonarQube Scanner') {
          sh "${scannerHome}/bin/sonar-scanner"
        }
      }
    }

    }

}