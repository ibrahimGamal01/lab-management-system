# lab-management-system

This Node.js project contains the code for an application that manages labs and devices. The application uses a MySQL database to store information about admins, lab managers, labs, devices, users, and lab registrations.

# Project Structure

The project is structured as follows:

- `models/`: This directory contains the code for the models used in the application. There is a model for each database table: Admin, Lab, LabManager, Device, User, and Registration. Each model is defined using the Sequelize library, which is used to interact with the MySQL database.

- `routes/`: This directory contains the code for the routes used in the application. There is a route for each endpoint in the API. The routes are defined using the Express library, which is used to handle HTTP requests and responses.

* `controllers/`: This directory contains the code for the controllers used in the application. There is a controller for each endpoint in the API. The controllers are responsible for processing the requests received by the routes, and returning the appropriate response.

* `config/`: This directory contains the configuration files for the application. There is a file for the database configuration, which contains the database connection information, and a file for the server configuration, which contains the server port information.
