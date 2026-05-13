pipeline {

    agent any

    environment {
        IMAGE_NAME = "react-devops-app"
        CONTAINER_NAME = "react-devops-container"
    }

    stages {

        

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Remove Old Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker run -d -p 80:80 \
                --name $CONTAINER_NAME \
                $IMAGE_NAME
                '''
            }
        }

        stage('Deployment Success') {
            steps {
                echo 'Application Successfully Deployed 🚀'
            }
        }
    }
}