pipeline {
    agent {
        docker { image 'asuhail8/cypress-e2e' }
    }
    stages{
        stage('Run the amazon test case'){
            steps{
                sh 'npx cypress run --spec "cypress/integration/2-advanced-examples/UITests/amazonTest.js'
            }
        }
        post {
            always{
                   junit './cypress/results/*.xml' 
                }
        }
    }
}