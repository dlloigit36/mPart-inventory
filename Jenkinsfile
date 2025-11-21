pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub-repo') // Jenkins credential ID
        DOCKER_IMAGE = "dlloihub36/mpart-app"
        DOCKER_TAG = "0.0.2"
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
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."                      
                }
            }
        }

        stage('Docker login') {
            steps {
                script {
                    sh 'echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
            }
        }
    }

    post {
            always {
                echo 'Pipeline finished.'
            }
        }
}