pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub-repo') // Jenkins credential ID
        DOCKER_IMAGE = "dlloihub36/mpart-app"
        GIT_COMMIT_HASH = ""
        DOCKER_TAG = ""

    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout([$class: 'GitSCM', branches: [[name: '*/static-data']],
                              userRemoteConfigs: [[url: 'https://github.com/dlloigit36/mPart-inventory.git']]])
                    GIT_COMMIT_HASH = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                    def TODAY_DATE = sh(script: "date +%Y%m%d", returnStdout: true).trim()
                    DOCKER_TAG = "${TODAY_DATE}-${env.BUILD_NUMBER}-${GIT_COMMIT_HASH}"
                    echo "Using Docker tag: ${DOCKER_TAG}"
                }
                // Replace with your GitHub repo URL
                // git branch: 'static-data', url: 'https://github.com/dlloigit36/mPart-inventory.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    try {
                        sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                    } catch (err) {
                        error("Docker build failed: ${err}")
                    }                  
                }
            }
        }

        stage('Docker login') {
            steps {
                script {
                    try {
                        sh 'echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin'
                    } catch (err) {
                        error("Docker login failed: ${err}")
                    }
                    
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    try {
                        sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    } catch (err) {
                        error("Docker push failed: ${err}")
                    }
                }
            }
        }
    }

    post {
        success {
            echo "Image pushed successfully: ${DOCKER_IMAGE}:${DOCKER_TAG}"
        }
        failure {
            echo "Pipeline failed. Check logs for details."
        }
        always {
            echo "Pipeline finished."
        }
    }
}