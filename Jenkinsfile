pipeline {
    
    environment {
        DOCKERHUB_REGISTRY = "hyndhu"
        DOCKERHUB_CREDENTIALS = credentials('078addcc-26f8-4e60-b216-39c898622cdb')
    }
    
    agent any 
    
    stages {
        
        stage('Git Pull') {
            steps {
                
                git url: 'https://github.com/Hyndu20/CareerGuide',
                branch: 'master'
                
            }
        }
        
			stage ('Running Backend Tests') {
				steps {
					sh '''
							cd backend
							npm ci
							npm test
					'''
				}
			}
			
			stage ('Running Frontend Tests ') {
				steps {
					sh '''
							cd frontend
							npm ci
							npm test
					    '''
				}
			}

			stage('Building Docker Image for backend') {
				steps {
			    sh "docker build -t $DOCKERHUB_REGISTRY/backend:latest backend/"
			  }   
			}

			stage('Build Docker Image for frontend') {
				steps {
					sh "docker build -t $DOCKERHUB_REGISTRY/frontend:latest frontend/"
				}   
			}

			stage('Login to Docker Hub') {
				steps {
					sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
				}
			}

			stage('Pushing Backend Image to Docker Hub') {
			  steps {
			    sh "docker push $DOCKERHUB_REGISTRY/backend:latest"
			  }
			}

			stage('Pushing Frontend Image to Docker Hub') {
				steps {
					sh "docker push $DOCKERHUB_REGISTRY/frontend:latest"
				}
			}
        
			stage('Removing Docker Images from Local') {
				steps {
					sh "docker rmi -f $DOCKERHUB_REGISTRY/frontend:latest"
					sh "docker rmi -f $DOCKERHUB_REGISTRY/backend:latest"
				}
			}
        
			
			stage('Ansible Deploy') {
					steps {
                        ansiblePlaybook becomeUser: 'null',
                        disableHostKeyChecking: true,
                        colorized: true,
                        installation: 'Ansible',
                        inventory: 'inventory',
                        playbook: 'ansible-playbook.yml',
                        sudoUser: 'null'
                    }
			}
    }
}