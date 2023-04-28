# Contact Us Form with React and Chakra UI

This project is a responsive Contact Us form that allows users to make inquiries by providing their name, email, subject, and message. The form is built using React, Chakra UI, and several other packages that enhance its functionality and user experience.

[View Live Demo at this link](https://serene-sunflower-6c6f6f.netlify.app/)

![Contact Us Form Screenshot](./contactme.png)

## Features

- Responsive design that adapts to various screen sizes
- Client-side form validation using Formik and Yup
- Email validation to ensure correct email format
- Displays success or error messages at the top of the form with color indication and a warning emoji
- Unique ID generation for inquiries using `nanoid`
- Axios for API calls, allowing form data to be sent to a specified API endpoint


## Usage

1. Enter your name, email, and message in the corresponding fields.
2. Optionally, provide a subject for your inquiry.
3. Click the "Submit" button to send your inquiry.
4. Upon successful submission, a green message will appear at the top of the form.
5. If there's an error during submission, a red error message will be displayed at the top of the form.(best demonstrated if the api endpoint is tweaked)

## Packages Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Chakra UI](https://chakra-ui.com/) - A simple, modular, and accessible component library for React applications
- [Formik](https://formik.org/) - A library to help build, validate, and manage forms in React
- [Yup](https://github.com/jquense/yup) - A JavaScript schema builder for value parsing and validation
- [Axios](https://github.com/axios/axios) - A promise-based HTTP client for the browser and Node.js
- [nanoid](https://github.com/ai/nanoid) - A tiny, secure, URL-friendly, unique string ID generator
