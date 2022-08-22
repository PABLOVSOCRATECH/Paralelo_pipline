pipeline { //SI ES UN TEST MUY GRANDE NO MÁS DE 3 COMPUTADORAS/SLAVES,+ 2MIN MUCHO TIME, NO AGUANTA EL PROCESO.pUEDE USARSE CICRCLE (FRAMEWORK).
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1" //TIENE QUE SER MISMO NOMBRE/ETIQUETA, IGUAL QUE EN JENKINS/CONFIGURACION.
                    }
                    steps {
                        git url: 'https://github.com/PABLOVSOCRATECH/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key cf8732a1-92d9-4810-91b9-270e81cdb676 --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/PABLOVSOCRATECH/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key cf8732a1-92d9-4810-91b9-270e81cdb676 --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent2_3"
                    }
                    steps {
                        git url: 'https://github.com/PABLOVSOCRATECH/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key cf8732a1-92d9-4810-91b9-270e81cdb676 --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agent2_4"
                    }
                    steps {
                        git url: 'https://github.com/PABLOVSOCRATECH/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key cf8732a1-92d9-4810-91b9-270e81cdb676 --parallel'
                    
                    }
                }

               

                
   
                  
            }

             
        }

    }
            
}