<p align="center">
  <img src="https://github.com/Nikitakandwal/dsaverse/assets/98966392/52aa7654-87bd-41a7-9bd1-0f4439f5ce49" alt="logoImg" />
</p>

# DSA Verse

DSA Verse is a social media application where users can share their achievements in Data Structures and Algorithms (DSA), motivate each other, and share useful cheat sheets. 

## Features

- User authentication (JWT)
- CRUD operations for users and posts
- Fetching user timelines
- Following and unfollowing users
- Liking and disliking posts

## Technologies Used

### Frontend

- React.js
- CSS
- Redux
- React Router v6

### Backend

- Node.js
- Express.js
- MongoDB

## Project Structure

### Frontend

The frontend of the application is built using React.js and the following libraries:

- **React Router v6** for routing.
- **Redux** for state management.
- **JWT Authentication** for secure user login and registration.

### Backend

The backend of the application is built using Node.js and Express.js, with MongoDB as the database. It includes the following:

- **Authentication APIs** for user login and registration.
- **CRUD APIs** for user and post management.
- **Timeline APIs** for fetching user timelines.
- **Follow/Unfollow APIs** for managing user connections.
- **Like/Dislike APIs** for post interactions.

#### Server-Side Configuration

The server-side configuration includes the following structure:

- `index.js` - Main server file.
- `routes/`
  - `auth.js` - Routes for authentication.
  - `user.js` - Routes for user operations.
  - `post.js` - Routes for post operations.
- `controllers/`
  - `authController.js` - Controller for authentication logic.
  - `userController.js` - Controller for user operations logic.
  - `postController.js` - Controller for post operations logic.

## Installation

1. Clone the repository:
  ```bash
   git clone https://github.com/your-username/dsa-verse.git
   ```

2. Install frontend dependencies:

  ```bash
  cd dsa-verse/frontend
  npm install
  ```
3. Install backend dependencies:

  ```bash
  cd ../backend
  npm install
  ```
4. Start the development servers:
  ```bash
  # In the backend directory
  npm start

  # In the frontend directory
  npm start
  ```

## Usage
1. Register a new account or log in with an existing account.
2. Create and share posts about your DSA achievements.
3. Follow other users to see their updates in your timeline.
4. Like or dislike posts to show your appreciation.


### Demo Video

For a detailed walkthrough of the application, please watch the Demo Video: 

https://github.com/Nikitakandwal/dsaverse/assets/98966392/9f5bac59-2b4a-46cf-a7f7-5116e51594ae



## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
If you have any questions or feedback, feel free to reach out.
   
