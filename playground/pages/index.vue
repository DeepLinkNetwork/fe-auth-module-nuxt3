<template>
  <div class="container">
    <h1>Authorization Successful</h1>
    <p>You are now authorized to access the requested content.</p>
    <p>Check your cba.token in Cookies</p>
  </div>
</template>

<script setup></script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  text-align: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #007bff;
}

p {
  color: #333;
}
</style>
