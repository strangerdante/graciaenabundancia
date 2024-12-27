<template>
  <div class="font-asap">
    <div class="mask-container">
      <div class="mask-box">
        <div class="px-4 sm:px-14 lg:px-80 mt-32">
          <h1
            class="text-3xl text-center sm:text-left sm:text-4xl mb-4 text-white"
          >
            Preguntas frecuentes
          </h1>
          <p class="text-lg mb-4 text-white">
            En esta sección, responderemos a algunas de las preguntas más
            comunes que nuestros miembros y visitantes tienen acerca de la
            Biblia y cómo es interpretada y aplicada en nuestra iglesia
            Bautista. ¿Qué versión de la Biblia utiliza la iglesia Bautista?
            Nuestra iglesia utiliza la versión Reina-Valera 1960 para nuestras
            lecturas y estudios bíblicos. Esta versión es ampliamente aceptada y
            respetada en la comunidad hispanohablante por su fidelidad a los
            textos originales.
          </p>
          <p class="text-gray-300 mb-4">
            Conozca más sobre nuestros valores y nuestra historia como iglesia
            visitando la página conocenos.
          </p>
          <p>Hebreos 10:24-25</p>
          <a
            href="/#inicio"
            class="bg-rojo text-white hover:bg-rojo/80 px-6 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 inline-block"
          >
            Conocenos
          </a>
        </div>
      </div>
    </div>

    <div class="below-mask-box mt-2 sm:mt-20">
      <div class="box-wrap px-4 sm:px-14 lg:px-80 py-10">
        <div class="space-y-6">
          <div
            v-for="(item, index) in preguntas"
            :key="index"
            class="dark:p-0.5 dark:pt-0 dark:border-0 border-2 border-gray-200 rounded-lg bg-gray-100 dark:bg-gradient-to-tr from-blue-500 to-red-500 dark:border-slate-600 overflow-hidden"
          >
            <div
              class="h-full w-full dark:bg-slate-600/90 rounded-md transition duration-300 ease-in-out"
            >
              <!-- Barra progeso -->
              <div
                class="h-1 bg-amarillo transition-all duration-300 ease-in-out"
                :style="{ width: item.isOpen ? '100%' : '0%' }"
              ></div>

              <button
                @click="toggleItem(index)"
                class="w-full text-left flex items-start p-4 focus:outline-none"
              >
                <span
                  class="text-sm sm:text-lg font-medium dark:text-white flex-grow mr-4"
                >
                  {{ item.pregunta }}
                </span>
                <div class="flex-shrink-0 w-5 mt-1">
                  <svg
                    :class="{ 'rotate-180': item.isOpen }"
                    class="w-5 h-5 transition-transform duration-200 text-azul"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </button>
              <div
                v-if="item.isOpen"
                class="p-4 transition-all duration-300 ease-in-out"
              >
                <p class="dark:text-white">{{ item.respuesta }}</p>
                <div
                  v-if="item.versiculos"
                  class="flex flex-wrap border-t justify-start gap-2 border-gray-300 dark:border-gray-600 p-4 mt-6"
                >
                  <span
                    v-for="(versiculo, vIndex) in item.versiculos"
                    :key="vIndex"
                    class="border-2 border-azul rounded-lg text-xs sm:text-sm px-3 py-1 flex-shrink-0 text-azul dark:border-blue-400 dark:text-white hover:bg-azul hover:text-white transition duration-300 cursor-pointer"
                  >
                    {{ versiculo }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const preguntas = ref([
  {
    pregunta: "1. Ejemplo",
    respuesta: "Ejemplo",
    versiculos: ["Hebreos 10:24-25", "versiculo", "versiculo"],
    isOpen: false,
  },
  {
    pregunta: "2. Ejemplo",
    respuesta: "Ejemplo",
    versiculos: ["versiculo", "versiculo", "versiculo", "versiculo"],
    isOpen: false,
  },
  {
    pregunta: "3. Ejemplo",
    respuesta: "Ejemplo",
    versiculos: ["versiculo", "versiculo", "versiculo"],
    isOpen: false,
  },
  {
    pregunta: "4. Ejemplo",
    respuesta: "Ejemplo",
    versiculos: ["versiculo", "versiculo"],
    isOpen: false,
  },
  {
    pregunta: "5. Ejemplo",
    respuesta: "Ejemplo",
    versiculos: ["versiculo", "versiculo"],
    isOpen: false,
  },
]);

const toggleItem = (index) => {
  preguntas.value[index].isOpen = !preguntas.value[index].isOpen;
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.mask-container {
  container-type: inline-size;
  --mask-head-size: calc(0.087 * 100cqw);
  --mask-foot-size: calc(0.055 * 100cqw);
}

.mask-box {
  margin-block: calc(-1 * var(--mask-head-size) - 1px)
    calc(-1 * var(--mask-foot-size) - 1px);
  padding-block: calc(var(--mask-head-size) + 1px)
    calc(var(--mask-foot-size) + 1px);
  mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" width="1000" height="87"><g transform="scale(2.2,-1)" transform-origin="60.5% 50%"><path d="M1000 100C500 100 500 64 0 64V0h1000v100Z" opacity=".5"></path><path d="M1000 100C500 100 500 34 0 34V0h1000v100Z" opacity=".5"></path><path d="M1000 100C500 100 500 4 0 4V0h1000v100Z"></path></g></svg>'),
    linear-gradient(
      transparent calc(var(--mask-head-size) - 1px),
      black calc(var(--mask-head-size) - 1px),
      black calc(100% - var(--mask-foot-size) + 1px),
      transparent calc(100% - var(--mask-foot-size) + 1px)
    ),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" width="1000" height="55"><g transform="scale(1.3,1)" transform-origin="0% 50%"><path d="M1000 100C500 100 500 64 0 64V0h1000v100Z" opacity=".5"></path><path d="M1000 100C500 100 500 34 0 34V0h1000v100Z" opacity=".5"></path><path d="M1000 100C500 100 500 4 0 4V0h1000v100Z"></path></g></svg>');
  mask-repeat: no-repeat;
  mask-position: top, center, bottom;
  mask-size: 100%;
  background-color: #001e62;
  background-image: linear-gradient(
      90deg,
      rgba(0, 30, 98, 0.7),
      rgba(110, 43, 98, 0.7)
    ),
    url("https://i.ibb.co/wCrdhqb/donaciones.jpg");
}

.below-mask-box {
  padding-top: var(--mask-foot-size);
  display: block;
}
</style>
