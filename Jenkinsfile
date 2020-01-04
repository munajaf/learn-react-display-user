#!/usr/bin/env groovy

node('master') {
    try {
        stage('build') {
            sh "npm install"
        }

        stage('test') {
            sh "npm test"
        }
    } catch(error) {
        throw error
    } finally {

    }
}
