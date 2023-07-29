<div align="center">
<a href="/">
  <img src="https://stc.uol.com/g/sobreuol/images/footer/compass-logo.svg?v=3.9.44" alt="compassuol" width="200">
</a>
</div>

# Challenge #01 - Node - VetClinic

## Description
A client hired Compass to build a new microservice for its veterinary franchise. This microservice
will be used by all the clinics they own for internal client and attendances management.
So, you have this new mission, to build the POC foundations of this brand new microservice,
so the sales and management team can have the primary technical view of the needs
that the client has.

## Tech Stack

1. Node.js
2. Typescript (v5.1.6)
3. Express
4. Mongoose
5. MongoDB
6. Postman

## Pre-requisites

Before running the project, make sure you have the following installed on your system:

1. [Node.js](https://nodejs.org/) (v18.16.1 or later)
2. [npm](https://www.npmjs.com/) (usually comes with Node.js)


## How to Run Locally

To run the project locally on your machine, follow the steps below:

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone git@github.com:devartes/challenge-01-ana-carolina-duarte-cavalcante.git

2. Navigate to the project directory:
   
   ```bash
   cd challenge-01-ana-carolina-duarte-cavalcante

3. Install the required dependencies:

   ```bash
   npm install

## Setting Up Environment Variables

Before running the project, you'll need to set up your environment variables. Follow these steps:

Create a new file in the root directory of the project and name it `.env.`

Copy the contents from `.env.example` into the newly created `.env` file.

Now, open the .env file with a text editor of your choice and provide the required values for each environment variable as specified in the comments.

- For example:

   ```bash
   DB_URL=yoururlmongodb
   PORT=yourlocalhostportnumber

Replace `DB_URL`, `PORT` with your actual credentials and database connection URL.

Once you've set up the environment variables in the `.env` file, you can proceed with running the project:

### Running the Project

- After setting up the environment variables in the `.env` file, you can run the project by executing the following command in the terminal:

   ```bash
   npm run dev

- This command will start the development server, and you should see output indicating that the server is running on a specific port. 

## Testing the API with Postman

1. Make sure you have [Postman](https://www.postman.com/downloads/) installed on your machine.

2. Download the Postman collection JSON file from this repository. You can find the file in the [postman](./postman) directory.

3. Import the Postman collection into Postman by following these steps:
   - Open Postman.
   - Click on the "Import" button in the top-left corner.
   - Choose the "File" tab and select the downloaded JSON file.
   - The collection will be imported, and you should see it in the left sidebar under the "Collections" tab.

4. Before running the API requests, ensure that the development server is up and running locally. If not, follow the ["How to Run Locally"](https://github.com/devartes/challenge-01-ana-carolina-duarte-cavalcante/edit/main/README.md#how-to-run-locally) and ["Setting Up Environment Variables"](https://github.com/devartes/challenge-01-ana-carolina-duarte-cavalcante/edit/main/README.md#setting-up-environment-variables) sections in this README to start the server.

5. Now you can start testing the API endpoints using the imported Postman collection. Each request is pre-configured with the required headers and data.

6. For the requests that require specific data (e.g., POST and PUT requests), make sure to update the request body with valid data before sending the request.

7. Send the requests and check the responses to verify the API functionality.

## Features

The API will have the following features:

1. **GET /tutors**: Retrieves all registered tutors.
   
    - Example Response:
   ```json
   [
     {
       "id": 1,
       "name": "John Doe",
       "phone": "85989323895",
       "email": "jose.abreu@compasso.com",
       "date_of_birth": "1993-12-12 10:10",
       "zip_code": "61760000",
       "pets": [
         {
           "id": 1,
           "name": "Lilo",
           "species": "dog",
           "carry": "p",
           "weight": 5,
           "date_of_birth": "1993-12-12 10:10"
         }
       ]
     }
   ]
   
2. **POST /tutor**: Creates a new tutor.

 - Example Request Body (all fields are required):
   ```json
   {
    "id": 1,
    "name": "Jonas",
    "phone": "85989323895",
    "email": "jonas@paidepet.com",
    "date_of_birth": "1993-12-12 10:10",
    "zip_code": "61760000"
   }    
   
5. **PUT /tutor/:id**: Updates a tutor's information.

 - Example request body (all items required):
   ```json
   {
       "id": 1,
       "name": "hallex",
       "phone": "85989323895",
       "email": "jose.abreu@compasso.com",
       "date_of_birth": "1993-12-12 10:10",
       "zip_code": "61760000"
   }

6. **DELETE /tutor/:id**: Deletes a tutor.
 
   Status Code: 200

8. **POST /pet/:tutorId**: Creates a new pet and associates it with a tutor.

  - Example request body (all items required):
     ```json
     {
       "id": 1,
       "name": "Lilo",
       "species": "dog",
       "carry": "p",
       "weight": 5,
       "date_of_birth": "1993-12-12 10:10"
     }

8. **PUT /pet/:petId/tutor/:tutorId**: Updates a pet's information associated with a tutor.

-  request body (all items required):
     ```json
   {
       "id": 1,
       "name": "Lilo",
       "species": "dog",
       "carry": "p",
       "weight": 5,
       "date_of_birth": "1993-12-12 10:10"
    }

9. **DELETE /pet/:petId/tutor/:tutorId**: Removes a pet from a tutor.

   Status Code: 200







  
