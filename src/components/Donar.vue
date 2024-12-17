<template>
  <div class="min-h-screen bg-[#dde5ed] mt-20">
    <!-- Hero Section -->
    <div class="relative">
      <div class="relative h-[300px] bg-[#001e62] overflow-hidden">
        <div class="absolute inset-0">
          <img
            src="/bienvenida.jpg"
            alt="Worship background"
            class="w-full h-full object-cover opacity-40"
          />
        </div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1
            class="text-4xl md:text-6xl font-bold text-white text-center mb-8"
          >
            Donaciones
          </h1>
          <p class="text-[#fcd299] text-xl text-center max-w-3xl mx-auto">
            Desde ya le agradecemos. Nuestro buen Dios sea glorificado en todas
            las cosas.
          </p>
        </div>
      </div>

      <!-- SVG Divider -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        fill="#001E62"
      >
        <path d="M1000 100C500 100 500 34 0 34V0h1000v100Z" opacity=".5"></path>
        <path d="M1000 100C500 100 500 4 0 4V0h1000v100Z" opacity=".5"></path>
        <path d="M1000 100C500 100 500 64 0 64V0h1000v100Z" opacity=".5"></path>
      </svg>
    </div>

    <!-- Content Section -->
    <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <!-- Bible Verse -->
      <div class="text-center mb-16">
        <p class="text-[#6e2b62] text-xl italic mb-2">
          "Cada uno dé como propuso en su corazón: no con tristeza, ni por
          necesidad, porque Dios ama al dador alegre."
        </p>
        <p class="text-[#001e62] font-semibold">2 Corintios 9:7</p>
      </div>

      <!-- Donation Info -->
      <div class="bg-white rounded-lg shadow-xl p-8 mb-12">
        <p class="text-[#001e62] text-lg mb-8">
          ¡Gracias por hacer parte del crecimiento del Reino de Dios! Para poder
          realizar tu donación primero selecciona el medio que se ajuste más,
          luego continúa con los pasos indicados; te invitamos a revisar nuestra
          política de privacidad al final de la página, en el menú "Enlaces de
          interés". Recuerda que la información que proporciones es confidencial
          y no será compartida con terceros.
        </p>

        <!-- Payment Options -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <button
            class="flex items-center justify-center space-x-2 bg-[#001e62] text-white py-4 px-6 rounded-lg hover:bg-opacity-90 transition-all"
          >
            <span class="material-icons">language</span>
            <span>Pagos en línea</span>
          </button>
          <button
            class="flex items-center justify-center space-x-2 bg-[#dde5ed] text-[#001e62] py-4 px-6 rounded-lg hover:bg-opacity-90 transition-all"
          >
            <span class="material-icons">payments</span>
            <span>Pagos en efectivo</span>
          </button>
          <button
            class="flex items-center justify-center space-x-2 bg-[#dde5ed] text-[#001e62] py-4 px-6 rounded-lg hover:bg-opacity-90 transition-all"
          >
            <span class="material-icons">account_balance</span>
            <span>Consignaciones</span>
          </button>
        </div>

        <!-- Main CTA -->
        <div class="text-center">
          <a
            href="#"
            class="inline-block bg-[#a50034] text-white py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all text-lg font-semibold"
          >
            Haz clic aquí para hacer tu contribución en línea
          </a>
        </div>
      </div>

      <!-- Certificate Info -->
      <div class="text-center text-[#001e62]">
        <p class="text-lg">
          Solicita tu
          <span class="font-semibold">certificado de donaciones</span> al correo
          <a
            href="mailto:certificaciones@example.org"
            class="text-[#a50034] hover:underline"
          >
            certificaciones@example.org
          </a>
          con tu Ciudad, Nombre completo, Número de Identificación, Correo
          electrónico y teléfono de contacto.
        </p>
      </div>
      <!-- Info -->
      <div class="bg-[#fcd299] p-4 text-center mt-12">
        <p class="text-[#6e2b62]">
          Su donación es importante para nosotros. Si tiene alguna pregunta, no
          dude en contactarnos.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
