

# LW E-Furniture Frontend

This is the **frontend** for the **LW E-Furniture** project, built using **React** and **Vite**. It allows users to browse products, receive notifications, and interact with the backend to manage their accounts. The frontend is designed to be responsive, intuitive, and easy to navigate, offering a seamless shopping experience for customers.

## Business Overview

**LW E-Furniture** is an online platform for buying and selling furniture. The platform provides customers with an easy way to view available products, receive notifications about new updates and offers, and interact with an admin-controlled backend system for managing user accounts and products.

In the future, we plan to introduce additional features such as product purchasing, order management, and payment integration, enabling users to not only browse but also purchase furniture directly through the platform.

### Features

#### User Interaction
- **Login**: Customers can log in to their accounts using secure credentials.
- **Register**: New users can easily create an account to start shopping.
- **View Products**: Customers can browse a variety of furniture products available on the platform.
- **Receive Notifications**: Users will receive notifications about new products, promotions, and platform updates.

#### Planned Features
- **Product Purchasing**: Users will soon be able to add products to their cart, complete purchases, and track orders.
- **Order and Payment Management**: Admins will manage orders, and users will complete payments securely through integrated services.

## Technology Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **State Management**: (e.g., Redux, React Context API)
- **Routing**: React Router
- **Styling**: (e.g., TailwindCSS, Material-UI, or custom CSS)
- **API Communication**: Axios (for making API calls to the backend)
- **Authentication**: JWT (JSON Web Tokens)

## Installation

### Prerequisites
Make sure you have **Node.js** and **npm** installed on your system.

### Steps to Set Up the Project
1. Clone the repository:
   
   git clone https://github.com/rushinga/lw-efurniture-frontend.git
   

2. Navigate to the project directory:
   
   cd lw-efurniture-frontend
   

3. Install dependencies:
   
   npm install
   

4. Start the development server:
   
   npm run dev
   

   This will launch the application at `http://localhost:3000`.

## How to Sign Up and Sign In

### Sign Up (User Registration)
To create a new user account:
1. Navigate to the **Sign Up** page.
2. Fill in the required details:
   - **UserName**: Your username.
   - **Email Address**: A valid email.
   - **Password**: A secure password (minimum 8 characters).
3. Submit the registration form. You will receive a confirmation email if applicable, and your account will be created.

### Sign In (User Login)
To log in to your account:
1. Go to the **Login** page.
2. Enter your registered **email** and **password**.
3. Upon successful login, a **JWT** token will be generated and stored, allowing you to access protected routes and features.

### Password Reset
If you've forgotten your password:
1. Navigate to the **Password Reset** page.
2. Enter your registered **email address**.
3. Follow the instructions in the email to reset your password.

## Development

- **Hot Module Replacement (HMR)**: Vite provides fast hot module replacement, ensuring an efficient development process with minimal reloads.
- **Styling**: The frontend is styled using (TailwindCSS, Material-UI, or custom CSS). Adjust the styling as needed to match your design preferences.

## Deployment

To build the project for production:

npm run build


This will create an optimized version of the app in the `dist/` directory, which can be deployed to platforms like **Netlify**, **Vercel**, or **GitHub Pages**.

## Contributing

We welcome contributions! Feel free to fork the repository, report issues, or submit pull requests to improve the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
