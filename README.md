# eCommence
An e-commerce app built using React for the frontend and Express for the backend. This project is a full-fledged e-commerce website built to sell a variety of items, including clothing, jewelry, watches, electronics, and more.



## Project Structure

The project is organized into two main directories: `backend` for the server-side code and `frontend` for the client-side code.


### Backend

The backend is responsible for handling API requests, interacting with the database, and serving data to the frontend.

- **src/controllers/productController.js**: Handles product-related logic, including fetching data from the external API.
- **src/models/Product.js**: Defines the schema for the product data stored in the database.
- **src/routes/productRoutes.js**: Defines the routes for product-related API endpoints.
- **src/app.js**: Initializes the Express application, sets up middleware, and connects to the database.


### Frontend

The frontend is responsible for presenting the user interface and interacting with the backend to display product information.

- **src/components/ProductList.js**: Displays a list of products fetched from the backend.
- **src/components/ProductCard.js**: Represents an individual product card with details like name, description, and price.
- **src/pages/Home.js**: The main landing page that integrates the ProductList component.
- **src/services/apiService.js**: Handles communication with the backend API.



## Getting Started

Follow these steps to set up and run the project locally:

1. **Install Dependencies:**
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

2. **Run the Backend:**
   ```bash
   cd backend
   npm start
   ```

3. **Run the Frontend:**
   ```bash
   cd frontend
   npm start
   ```

4. **Access the Application:**
   Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the application.



## Dependencies

- **Backend:**
  - Express: Fast, unopinionated, minimalist web framework for Node.js.
  - Cors: Middleware for enabling CORS in Express.
  - Axios: Promise-based HTTP client for the browser and Node.js.

- **Frontend:**
  - React: JavaScript library for building user interfaces.
  - React Router: Declarative routing for React.js.
  - Axios: Promise-based HTTP client for the browser and Node.js.



## Customize the Project

To adapt this project to your needs:

- Replace the OpenWeatherMap API endpoint in `productController.js` with your desired API.
- Customize the product schema in `Product.js` according to your data structure.
- Modify the frontend components and styles in the `src/components` and `src/pages` directories.



## Contributing

If you would like to contribute to this project, please follow the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).



## License

This project is licensed under the [MIT License](LICENSE).



## Author

👤 **Aras Güngöre**

- LinkedIn: [@arasgungore](https://www.linkedin.com/in/arasgungore)
- GitHub: [@arasgungore](https://github.com/arasgungore)
