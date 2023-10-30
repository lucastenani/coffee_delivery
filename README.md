# Coffee Delivery App Documentation

## Project Description

The Coffee Delivery app is a web application that allows users to order coffee. The app was developed using React, TypeScript, and other popular libraries.

## Project URL

You can see the project in action [here](https://lucastenani.github.io/coffee_delivery/)

## Libraries Used

- Styled Components
- ESLint pre-configured by RocketSeat
- React-router-dom
- react-hook-form for creating uncontrolled forms
- date-fns
- immer for working with immutable data

## Features

- Increase or decrease the quantity of items in the cart
- Display the total value of the sum of items in the cart multiplied by the price
- Display the total number of items in the cart in the Header
- Add a specific quantity of items to the cart
- List of products (coffees) available for purchase
- After filling out the form, the user is taken to a success page with delivery information
- Form for the user to fill in their address

## Folder Structure

- @types: Folder where styled components typings are located
- assets: Images
- components/Header: Folder where components are located
- contexts: Where contexts are stored
- layouts/DefaultLayout: Default layout created to be reused in the two routes
- pages: Where the two routes are located: Home and history
- reducers/cycles: For better organization, the main logic of the useReducer cycle is separated here
- styles: Where themes and the application's global style are located
- App.tsx
- Router.tsx
- main.tsx

## Notes

- The project uses the immer library to work with immutable data. This improves the performance of the application by avoiding the need to create deep copies of the data.
- The project uses the react-hook-form library to create uncontrolled forms. This makes the code more concise and easier to maintain.

## Prerequisites to run on your machine

Some installations will be necessary before run the application locally.

:warning: [Node.js](https://nodejs.org/en/download/)

## Getting Started

To run the application locally, follow these steps:

1. Clone the project:

```
git clone https://github.com/lucastenani/coffee_delivery.git
```

2. Navigate to the project directory:

```
cd coffee_delivery/
```

3. Install dependencies:

```
npm install
```

4. Run the development server:

```
npm run dev
```

## License

This project is licensed under the [MIT License](LICENSE).
