<template>
  <div class="login-container">
    <form @submit.prevent="handleSubmit">
      <h2 class="login-title">Login</h2>
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
      <div class="submit-container">
        <button type="submit" class="submit-button">SUBMIT</button>
      </div>
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
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.login-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #000000;
}

form {
  width: 100%;
  max-width: 500px;
  background-color: #D9D9D9;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  font-weight: bold;
  color: #000000;
  font-size: 14px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 14px;
  background-color: #FFFFFF;
  border-radius: 20px;
  box-sizing: border-box;
}

input::placeholder {
  color: #999;
}

.submit-container {
  display: flex;
  justify-content: center;
}

.submit-button {
  width: auto;
  padding: 10px 40px;
  background-color: #FFFFFF;
  border: 1px solid #ddd;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #e0e0e0;
}

@media (max-width: 767.98px) {
  form {
    width: 100%;
    padding: 10px;
  }

  .login-title {
    font-size: 20px;
  }

  input {
    padding: 10px;
  }

  .submit-button {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>
