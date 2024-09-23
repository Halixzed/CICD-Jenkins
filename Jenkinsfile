pipeline {
    agent any

    tools {
        nodejs 'Node.js 14' // Use the Node.js version you configured in Jenkins
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build -t my-node-app:latest .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Push the Docker image to DockerHub or another container registry
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-cred', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                        sh 'docker tag my-node-app:latest your-repo/my-node-app:latest'
                        sh 'docker push your-repo/my-node-app:latest'
                    }
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                script {
                    // Deploy the app to the staging environment
                    sh 'kubectl apply -f k8s-deployment.yml'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
