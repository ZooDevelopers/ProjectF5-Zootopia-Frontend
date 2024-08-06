<template>
    <div class="login-container">
      <h2 class="login-title">Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">USERNAME:</label>
          <input
            v-model="username"
            type="text"
            id="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">PASSWORD:</label>
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" class="submit-button">SUBMIT</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      handleSubmit() {
        console.log('Form submitted:', { username: this.username, password: this.password });
      }
    }
  }
  </script>
  
  <style scoped>
.login-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px; /* Adjust width as needed */
  margin: 20px auto;
  padding: 20px;
  background-color: #D9D9D9; /* Light gray background */
  border-radius: 20px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

/* Title of the login form */
.login-title {
  font-size: 24px; /* Larger font size for title */
  font-weight: bold; /* Bold font */
  text-align: center; /* Centered text */
  margin-bottom: 20px; /* Space below the title */
  color: #000000; /* Black color for text */
}

/* Style for the form group (label and input together) */
.form-group {
  margin-bottom: 15px; /* Space between form groups */
  text-align: center; /* Centering the group contents */
}

/* Label styling */
label {
  display: block; /* Block display to stack elements */
  margin-bottom: 5px; /* Space below the label */
  font-weight: bold; /* Bold font */
  color: #000000; /* Black color for text */
  font-size: 14px; /* Font size */
}

/* Input fields styling */
input {
  width: 120%; /* Extra width to match the prototype layout */
  padding: 10px; /* Padding inside the input field */
  border: 1px solid #ddd; /* Light border */
  font-size: 14px; /* Font size for input text */
  background-color: #FFFFFF; /* White background */
  border-radius: 10px; /* Rounded corners */
}

/* Placeholder text styling */
input::placeholder {
  color: #999; /* Lighter color for placeholders */
}

/* Submit button styling */
.submit-button {
  width: 100%; /* Full width of the container */
  padding: 10px; /* Padding inside the button */
  background-color: #FFFFFF; /* White background */
  border: 1px solid #ddd; /* Light border */
  border-radius: 10px; /* Rounded corners */
  font-size: 16px; /* Slightly larger font size */
  font-weight: bold; /* Bold font for emphasis */
  color: #000000; /* Black color for text */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s ease; /* Smooth background change */
}

/* Submit button hover effect */
.submit-button:hover {
  background-color: #e0e0e0; /* Slightly darker background on hover */
}
  </style>