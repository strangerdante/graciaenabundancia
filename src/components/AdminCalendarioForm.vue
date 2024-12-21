<script setup lang="ts">
import { ref, defineEmits, defineProps, watch } from "vue";

const props = defineProps({
  event: {
    type: Object,
    default: () => ({
      id: "",
      fecha: "",
      titulo: "",
      hora: "",
      lugar: "",
      descripcion: "",
      infoAdiccional: false,
      infoIconoTexto: "",
      banner: "",
      link: "",
      locationType: "lugar", // Aseguramos valor por defecto
    }),
  },
  isEdit: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["submit", "cancel"]);

const formatDate = (dateString: string) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

const formData = ref({
  ...props.event,
  fecha: formatDate(props.event.fecha),
  locationType: props.event.locationType || "lugar",
  lugar: props.event.lugar || "",
  link: props.event.link || "",
});

// Observador para manejar cambios en locationType
watch(
  () => formData.value.locationType,
  (newType) => {
    if (newType === "lugar") {
      formData.value.link = "";
    } else {
      formData.value.lugar = "";
    }
  }
);

const infoIconoTextoOptions = [
  "Culto de oración",
  "Reunión de damas",
  "Reunión de varones",
  "Reunión de jóvenes",
  "Cena del Señor",
  "Canasta de amor",
  "Servicio dominical",
  "Domingo misionero",
];

const handleSubmit = () => {
  const submitData = { ...formData.value };
  if (submitData.locationType === "lugar") {
    submitData.link = "";
  } else {
    submitData.lugar = "";
  }
  emit("submit", submitData);
};
</script>

<template>
  <div class="bg-white max-w-xl mx-auto">
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2">ID</label>
        <input
          v-model="formData.id"
          type="text"
          placeholder="Ingrese el ID"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
        />
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >Fecha</label
        >
        <input
          v-model="formData.fecha"
          type="date"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
        />
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >Título</label
        >
        <input
          v-model="formData.titulo"
          type="text"
          placeholder="Ingrese el título"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duración-300"
        />
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >Hora</label
        >
        <input
          v-model="formData.hora"
          type="time"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duración-300"
        />
      </div>

      <div class="space-y-2">
        <label class="block text-sm font-semibold text-gray-700"
          >Tipo de ubicación</label
        >
        <div class="flex space-x-4">
          <div class="flex items-center">
            <input
              type="radio"
              v-model="formData.locationType"
              value="lugar"
              id="lugar"
              class="mr-2"
            />
            <label for="lugar" class="text-sm text-gray-700"
              >Lugar físico</label
            >
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              v-model="formData.locationType"
              value="link"
              id="link"
              class="mr-2"
            />
            <label for="link" class="text-sm text-gray-700"
              >Enlace virtual</label
            >
          </div>
        </div>
      </div>

      <div v-if="formData.locationType === 'lugar'">
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >Lugar</label
        >
        <input
          v-model="formData.lugar"
          type="text"
          placeholder="Ingrese el lugar físico"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duración-300"
        />
      </div>

      <div v-if="formData.locationType === 'link'">
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >Link</label
        >
        <input
          v-model="formData.link"
          type="url"
          placeholder="Ingrese el enlace de la reunión"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duración-300"
        />
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >Descripción</label
        >
        <textarea
          v-model="formData.descripcion"
          rows="4"
          placeholder="Ingrese la descripción"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duración-300"
        ></textarea>
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >Información Adicional</label
        >
        <input
          v-model="formData.infoAdiccional"
          type="checkbox"
          class="mr-2 leading-tight"
        />
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >Texto del Icono de Información</label
        >
        <select
          v-model="formData.infoIconoTexto"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duración-300"
        >
          <option
            v-for="option in infoIconoTextoOptions"
            :key="option"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >Banner</label
        >
        <input
          v-model="formData.banner"
          type="text"
          placeholder="Ingrese la URL del banner"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duración-300"
        />
      </div>

      <div class="flex justify-end space-x-4">
        <button
          type="button"
          @click="$emit('cancel')"
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-md transition duración-300 ease-in-out"
        >
          Cancelar
        </button>
        <button
          type="submit"
          class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md transition duración-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {{ isEdit ? "Actualizar" : "Crear" }}
        </button>
      </div>
    </form>
  </div>
</template>
