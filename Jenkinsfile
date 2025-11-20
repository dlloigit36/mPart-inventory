pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "mpart-app:0.0.1"
    }

    stages {
        stage('Checkout') {
            steps {
                // Replace with your GitHub repo URL
                git branch: 'static-data', url: 'https://github.com/dlloigit36/mPart-inventory.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE} ."                      
                }
            }
        }
    }
}