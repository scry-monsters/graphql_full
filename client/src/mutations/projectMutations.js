import { gql } from "@apollo/client";



export const ADD_PROJECT = gql`
    mutation addProject($clientId: ID!, $name: String!, $description: String!, $status: ProjectStatus!){
        addProject(clientId: $clientId, name: $name, description: $description, status: $status){
            id
            name
            description
            status
            client {
                id
                name
                email
                phone
            }
        }
    }
`

export const DELETE_PROJECT = gql`
mutation deleteProject($id: ID!){
    deleteProject(id: $id){
        id
    }
}
`

export const UPDATE_PROJECT = gql`
    mutation updateProject($id: ID!, $name: String!, $description: String!, $status: ProjectStatusUpdate!){
        updateProject(id: $id, name: $name, description: $description, status: $status){
            id
            name
            description
            status
            client {
                id
                name
                email
                phone
            }
        }
    }
`