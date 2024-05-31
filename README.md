# Movie Search App(NETFLIX_GPT)

A React application for browsing and searching movies, integrated with Firebase Authentication and the TMDB API.

## Setup

1. Clone the repository:
   git clone https://github.com/sahilvats22/netflix-gpt
   
2. Install dependencies:
   npm install
   
3. Set up Firebase:
   - Create a Firebase project and obtain your Firebase configuration.
   - Enable Email/Password authentication.
   - If you want to use my Firebase account, the setup is already done.
     
4. Get TMDB API key:
   - Register at [TMDB](https://www.themoviedb.org/documentation/api) to obtain an API key.
   - Update the `.env` file with your TMDB API key:
     REACT_APP_TMDB_API_KEY=your-api-key
     
5. Start the app:
   npm start
   
## Usage

- Navigate to http://localhost:3000 in your web browser.
- Sign up or log in to access the homepage.
- Browse movies (use a VPN to access the TMDB API if it is not working).
- Use the search functionality to find specific movies (use your own OpenAI key, as mine will be disabled).

## Troubleshooting

- If the TMDB API fails to fetch movies, try using a VPN with the following locations:
  - USA (Austin)
  - Australia (Melbourne)
- Use your own OpenAI key, otherwise the search functionality will not work.

## Tech Stack:

- **React**: Frontend framework for building user interfaces.
- **Redux Toolkit**: State management library for managing application state.
- **Firebase**: Authentication service for signup and login functionality.
- **TMDB API**: Source for fetching movie data.
- **OpenAI**: Used for searching and retrieving movie links from TMDB.

## Features

- **User Authentication**: Sign up and log in to access the application.
- **Browse Movies**: Explore a curated selection of movies from TMDB.
- **Search Functionality**: Quickly find movies using the powerful search feature powered by OpenAI's GPT.
- **Multi-language Support**: Enjoy the app in your preferred language with built-in language options.
- **Responsive Design**: Access the app seamlessly across various devices.

If you encounter issues setting up the TMDB API key and OpenAI key, you can download the necessary files from the Google Drive link provided.

Note: The wishlist functionality is not working due to some bugs, so I have disabled it.
