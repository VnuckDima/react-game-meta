pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Coverage') {
            steps {
                sh 'npm run coverage'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Preview') {
            steps {
                sh 'npm run preview'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}