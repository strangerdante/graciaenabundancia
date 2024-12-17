<template>
  <section class="py-14 sm:min-h-[700px] bg-white flex items-center font-asap">
    <div
      class="container mx-auto px-4 lg:px-32 py-2 flex flex-col lg:flex-row gap-12"
    >
      <!-- Text Content -->
      <div class="w-full lg:w-1/2 space-y-8 lg:pr-12">
        <div class="relative inline-block">
          <h1
            class="text-3xl lg:text-5xl font-semibold text-gray-800 tracking-wide relative z-10"
          >
            Bienvenido
          </h1>
          <img
            src="/Underline.svg"
            alt=""
            class="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-auto z-0"
            aria-hidden="true"
          />
        </div>

        <div class="space-y-6">
          <p
            class="text-gray-600 leading-relaxed first-letter:text-7xl first-letter:text-rojo first-letter:mr-3 first-letter:float-left text-justify"
          >
            Nos honra profundamente su presencia y su interés en conocer más
            sobre nuestra iglesia Gracia En Abundancia Iglesia Bautista. Nuestra
            misión es proclamar el evangelio de Jesucristo y hacer discípulos,
            edificando vidas a través de la enseñanza bíblica y el compañerismo
            cristiano. Anhelamos ser un faro de esperanza en nuestra comunidad,
            reflejando el amor y la gracia abundante de nuestro Señor
            Jesucristo.
          </p>
        </div>

        <div class="flex flex-wrap gap-2 border-t border-gray-200 pt-6">
          <span
            class="border-2 border-azul rounded-lg text-sm px-3 py-1 flex-shrink-0 text-azul dark:text-blue-white dark:border-blue-400 dark:text-white hover:bg-azul hover:text-white transition duration-300 cursor-pointer"
            >Efesios 4:11-12</span
          >
          <span
            class="border-2 border-azul rounded-lg text-sm px-3 py-1 flex-shrink-0 text-azul dark:text-blue-white dark:border-blue-400 dark:text-white hover:bg-azul hover:text-white transition duration-300 cursor-pointer"
            >Mateo 28:19-20</span
          >
          <span
            class="border-2 border-azul rounded-lg text-sm px-3 py-1 flex-shrink-0 text-azul dark:text-blue-white dark:border-blue-400 dark:text-white hover:bg-azul hover:text-white transition duration-300 cursor-pointer"
            >Colosenses 3:16</span
          >
          <span
            class="border-2 border-azul rounded-lg text-sm px-3 py-1 flex-shrink-0 text-azul dark:text-blue-white dark:border-blue-400 dark:text-white hover:bg-azul hover:text-white transition duration-300 cursor-pointer"
            >Hebreos 10:24-25</span
          >
        </div>

        <button
          class="bg-rojo hover:bg-rojo/80 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:-translate-y-1"
        >
          Conocenos
        </button>
      </div>

      <!-- Image -->
      <div
        class="hidden lg:block lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden rounded-lg"
      >
        <img
          src="/bienvenida.jpg"
          alt="Iglesia Gracia En Abundancia"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// Logica
</script>

<style scoped>
/* Estilos */
</style>
