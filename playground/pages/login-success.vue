<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div>
    <div class="container">
      <h1>Authorization Successful</h1>
      <p>You are now authorized to access the requested content.</p>
      <p>Check your cba.token in Cookies</p>
      <button
        type="button"
        class="logout-button"
        :disabled="isLoading"
        @click="logout"
      >
        Logout
      </button>
    </div>
    <br />
    <br />
    <div class="container">
      <h1>Click to Get User Info</h1>
      <button
        v-show="!isLoading"
        type="button"
        class="info-button"
        :disabled="isLoading"
        @click="getUserInfo"
      >
        Get User Info
      </button>
      <div v-if="isLoading" class="loader"></div>
      <br />
      <div class="json-container">
        {{ formattedJsonData }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp, useRouter, useCookie } from "#app";
import { computed, userFetch, authLogout } from "#imports";
import { ref } from "vue";

const { $apiBaseUrl } = useNuxtApp();
const isLoading = ref(false);
const jsonData = ref({});
const router = useRouter();
const formattedJsonData = computed(() =>
  JSON.stringify(jsonData.value, null, 4)
);

// get cookie to check Auth
const authToken = useCookie("authentication.token", {
  maxAge: 60 * 60 * 24 * 7,
  path: "/",
});
if (!authToken.value) router.push("/");

const logout = async () => {
  isLoading.value = true;
  const logout = await authLogout($apiBaseUrl());
  console.log(logout);
  isLoading.value = false;
  router.push("/");
};

const getUserInfo = async () => {
  isLoading.value = true;
  const userInfo = await userFetch($apiBaseUrl());
  console.log(userInfo);
  jsonData.value = userInfo;
  isLoading.value = false;
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

.logout-button {
  margin-top: 5px;
  padding: 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
}

.info-button {
  margin-top: 5px;
  padding: 10px;
  background-color: #67dc35;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
}

.json-container {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  overflow-x: auto;
  white-space: pre-wrap; /* keeps spaces and line breaks */
  word-wrap: break-word;
  font-family: "Courier New", Courier, monospace;
  text-align: left;
  max-height: 200px;
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
