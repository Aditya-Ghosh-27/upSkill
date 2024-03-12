# upSkill Backend Express Server

Welcome to the upSkill backend Express server! This server powers the backend functionality of the upSkill courseselling application, which functions similarly to platforms like Udemy. It utilizes various technologies to provide authentication, input validation, database management, schema validation, and routing.

## Technologies Used

- **JWT (JSON Web Tokens)**: Used for authentication, allowing secure access to protected routes.
- **Zod**: Employed for input validation, ensuring that incoming data meets defined schemas.
- **MongoDB**: Used as the database management system for storing application data.
- **Mongoose**: Utilized for schema validation, ensuring data consistency and integrity within MongoDB.
- **Express Router**: Employed for routing requests to appropriate endpoints within the application.

## Getting Started

To get started with the upSkill backend server, follow these steps:

1. **Clone the Repository**: ```bash git clone https://github.com/Aditya-Ghosh-27/upSkill.git``` 

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using npm:

cd upSkill
npm install

3. **Configure Environment Variables**: Create a `.env` file in the root directory of the project and configure necessary environment variables such as database connection URI, JWT secret, etc.

4. **Start the Server**: Once dependencies are installed and environment variables are configured, start the server using the following command:

npm start


By default, the server will run on port 3000. You can configure the port in the `.env` file if needed.

## Contributing

Contributions to the upSkill backend server are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## Contact

If you have any questions or need further assistance, feel free to contact the project maintainer at (adi27.ghosh@gmail.com) .

Happy coding!


