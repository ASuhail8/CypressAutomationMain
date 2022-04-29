pipeline {
    agent any
    stages {
        stage('Pull the docker image') {
           steps{
               sh 'docker pull asuhail8/cypress-e2e'
           }
        }
        stage('Run amazon test case '){
            steps{
                sh "npx cypress run --spec 'cypress/integration/2-advanced-examples/UITests/amazonTest.js'"
            }
        }
    }
}