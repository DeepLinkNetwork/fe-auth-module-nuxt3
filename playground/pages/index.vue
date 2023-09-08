<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="container">
    <h1>TEST IWBI LOGIN</h1>
    <form class="form-container" @submit.prevent="login">
      <label>E-mail</label>
      <input v-model="loginForm.email" required type="email" />
      <label>Password</label>
      <input v-model="loginForm.password" required type="password" />
      <button v-show="!isLoading" type="submit" :disabled="isLoading">
        Login
      </button>
    </form>
    <div v-if="isLoading" class="loader"></div>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp, useRouter, useCookie } from "#app";
import { authFetch } from "#imports";
import { ref } from "vue";

const { $apiBaseUrl } = useNuxtApp();
const router = useRouter();
const isLoading = ref(false);

// get cookie to check Auth
const authToken = useCookie("authentication.token", {
  maxAge: 60 * 60 * 24 * 7,
  path: "/",
});
if (authToken.value) router.push("/login-success");

interface loginForm {
  email: string;
  password: string;
  is_sso: boolean;
  sso_subscriber: string;
}

const loginForm: loginForm = {
  email: "",
  password: "",
  is_sso: false,
  sso_subscriber: "insided",
};

/**
 * If success: redirect to home page
 * Else display alert error
 */
const login = async () => {
  isLoading.value = true;
  const authLogin = await authFetch($apiBaseUrl(), loginForm);
  // console.log(authLogin);
  if (authLogin != "failed") {
    isLoading.value = false;
    router.push("/login-success");
  } else {
    isLoading.value = false;
    alert("Invalid username or password !!");
  }
};
</script>

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

.form-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-container label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-container input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-container button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
