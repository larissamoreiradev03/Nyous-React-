pipeline{

    agent any

    stages{

       stage('GetCode'){

            steps{

                git 'https://github.com/Meu-Bot/meu-bot-email.git'

            }

         }        

       stage('Build'){

            steps{

                sh 'npm install'

            }

         }

        stage('SonarQube analysis') {

//    def scannerHome = tool 'SonarScanner 4.0';

            steps{

                withSonarQubeEnv('sonarqube-8.9') {

// If you have configured more than one global server connection, you can specify its name

//      sh "${scannerHome}/bin/sonar-scanner"

                    sh "npm run sonar"

                }

            }

        }

    }

}