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

## Features

The API will have the following features:

1. **GET /tutors**: Retrieves all registered tutors.
2. **POST /tutor**: Creates a new tutor.
3. **PUT /tutor/:id**: Updates a tutor's information.
4. **DELETE /tutor/:id**: Deletes a tutor.
5. **POST /pet/:tutorId**: Creates a new pet and associates it with a tutor.
6. **PUT /pet/:petId/tutor/:tutorId**: Updates a pet's information associated with a tutor.
7. **DELETE /pet/:petId/tutor/:tutorId**: Removes a pet from a tutor.

## Mandatory Requirements

1. **Readability**
2. **Private Repository**
3. **Small Commits**
4. **Commit Pattern**
5. **TypeScript**
6. **Express**
7. **Readme.md**
8. **Explanation of How to Run Locally**
9. **Share Repository Access**

## Optional Requirements (Non-obligatory)

1. **Eslint**
2. **Prettier**
3. **Testing**
4. **Swagger**

## Routes

### GET

1. **Get all tutors**: `/tutors`
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

### POST

1. **Create tutor**: `/tutor`
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

  2. `/pet/:tutorId`
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

### PUT

1. `/tutor/:id`
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

2. `/pet/:petId/tutor/:tutorId`
   -  request body (all items required):
     ```json
   {
       "id": 1,
       "name": "Lilo",
       "species": "dog",
       "carry": "p",
       "weight": 5,
       "date_of_birth": "1993-12-12 10:10",
    }

### DELETE

1. `/tutor/:id`
   Status Code: 200

2. `/pet/:petId/tutor/:tutorId`
   Status Code: 200



## How to Run Locally

To run the project locally on your machine, follow the steps below:

### Prerequisites

Before running the project, make sure you have the following installed on your system:

1. [Node.js](https://nodejs.org/) (v18.16.1 or later)
2. [npm](https://www.npmjs.com/) (usually comes with Node.js)

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
   

