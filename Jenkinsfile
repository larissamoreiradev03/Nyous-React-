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
                sh 'npm cache clean'
                sh 'npm install'
                sh 'echo "PASSOU PELO NPM INSTALL"'

            }

         }

 stage('SonarQube analysis') {
      steps {
        script {
          // requires SonarQube Scanner 2.8+
          scannerHome = tool 'SonarQube Scanner 2.8'
        }
        withSonarQubeEnv('SonarQube Scanner') {
          sh "npm audit fix"
          sh "npm run sonar"
        }
      }
    }

    }

}