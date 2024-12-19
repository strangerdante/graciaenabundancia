<!-- src/components/ChangePasswordForm.vue -->
<template>
  <form
    @submit.prevent="handleSubmit"
    class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-32"
  >
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Cambiar Contraseña</h2>

    <!-- Old Password Field -->
    <div class="mb-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="oldPassword"
      >
        Contraseña Actual
      </label>
      <input
        v-model="formData.oldPassword"
        type="password"
        id="oldPassword"
        class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <p v-if="errors.oldPassword" class="mt-1 text-red-500 text-sm">
        {{ errors.oldPassword }}
      </p>
    </div>

    <!-- New Password Field -->
    <div class="mb-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="newPassword"
      >
        Nueva Contraseña
      </label>
      <input
        v-model="formData.newPassword"
        type="password"
        id="newPassword"
        class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <p v-if="errors.newPassword" class="mt-1 text-red-500 text-sm">
        {{ errors.newPassword }}
      </p>
    </div>

    <!-- Confirm New Password Field -->
    <div class="mb-6">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="confirmPassword"
      >
        Confirmar Nueva Contraseña
      </label>
      <input
        v-model="confirmPassword"
        type="password"
        id="confirmPassword"
        class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <p v-if="errors.confirmPassword" class="mt-1 text-red-500 text-sm">
        {{ errors.confirmPassword }}
      </p>
    </div>

    <!-- Error Message -->
    <div v-if="message?.type === 'error'" class="mb-4 text-red-500 text-sm">
      {{ message.text }}
    </div>

    <!-- Success Message -->
    <div v-if="message?.type === 'success'" class="mb-4 text-green-500 text-sm">
      {{ message.text }}
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="isLoading"
    >
      {{ isLoading ? "Cambiando contraseña..." : "Cambiar Contraseña" }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { auth } from "../lib/api";

// Verificar autenticación al montar el componente
onMounted(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }
});

const formData = reactive({
  oldPassword: "",
  newPassword: "",
});

const confirmPassword = ref("");
const errors = reactive({
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
});
const isLoading = ref(false);
const message = ref<{ type: "success" | "error"; text: string } | null>(null);

const validateForm = () => {
  let isValid = true;
  errors.oldPassword = "";
  errors.newPassword = "";
  errors.confirmPassword = "";

  if (!formData.oldPassword) {
    errors.oldPassword = "La contraseña actual es requerida";
    isValid = false;
  }

  if (!formData.newPassword) {
    errors.newPassword = "La nueva contraseña es requerida";
    isValid = false;
  } else if (formData.newPassword.length < 6) {
    errors.newPassword = "La contraseña debe tener al menos 6 caracteres";
    isValid = false;
  } else if (formData.newPassword === formData.oldPassword) {
    errors.newPassword = "La nueva contraseña debe ser diferente a la actual";
    isValid = false;
  }

  if (!confirmPassword.value) {
    errors.confirmPassword = "Por favor confirma tu nueva contraseña";
    isValid = false;
  } else if (formData.newPassword !== confirmPassword.value) {
    errors.confirmPassword = "Las contraseñas no coinciden";
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  isLoading.value = true;
  message.value = null;

  try {
    const response = await auth.changePassword({
      oldPassword: formData.oldPassword,
      newPassword: formData.newPassword,
    });

    message.value = {
      type: "success",
      text: response.data.mensaje || "Contraseña actualizada exitosamente",
    };

    // Reset form
    formData.oldPassword = "";
    formData.newPassword = "";
    confirmPassword.value = "";
  } catch (error: any) {
    message.value = {
      type: "error",
      text: error.response?.data?.mensaje || "Error al cambiar la contraseña",
    };

    if (error.response?.status === 401) {
      if (error.response?.data?.mensaje?.includes("token")) {
        localStorage.removeItem("token");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        errors.oldPassword = "La contraseña actual es incorrecta";
      }
    }
  } finally {
    isLoading.value = false;
  }
};
</script>
