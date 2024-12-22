<template>
  <nav
    class="bg-azul fixed w-full z-30 top-0 start-0 border-b border-gray-600 navbar"
  >
    <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <!-- Logo y nombre de la iglesia -->
      <a
        href="/"
        class="group flex items-center space-x-3 rtl:space-x-reverse relative overflow-hidden rounded-lg p-1"
      >
        <div class="relative">
          <img
            src="/LogoConTexto.svg"
            class="h-16 transition-transform duration-300 ease-in-out group-hover:scale-105"
            alt="Logo iglesia"
          />
          <div
            class="absolute inset-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"
          ></div>
        </div>
        <span
          class="self-center text-md whitespace-nowrap text-white text-center transition-colors duration-300 ease-in-out group-hover:text-amarillo leading-tight font-montserrat"
        >
          <span class="text-[26px] font-semibold">GRACIA</span>
          <br class="leading-[0.5]" />
          <span class="text-[11.5px] block -mt-1 font-semibold"
            >EN ABUNDANCIA</span
          >
          <span class="text-xs block -mt-[1px]">Iglesia Bautista</span>
        </span>
      </a>

      <!-- Menú de navegación para pantallas grandes -->
      <div class="hidden md:flex items-center space-x-8 font-asap">
        <a href="/#inicio" class="text-white hover:text-amarillo">Inicio</a>
        <div class="relative inline-block">
          <button
            class="flex items-center justify-between py-2 px-3 font-medium text-white md:p-0 hover:text-amarillo"
            @click.stop="toggleMenu"
          >
            Conócenos
            <img
              src="/menu/chevron-down.svg"
              class="w-4 h-4 ms-3 transition-transform duration-200"
              :class="{ 'rotate-180': isOpen }"
              alt="Chevron down"
            />
          </button>

          <div
            v-if="isOpen"
            class="absolute left-1/2 transform -translate-x-1/2 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dropdown-menu"
            style="top: calc(100% + 16px)"
          >
            <ul class="py-2 text-sm text-gray-700">
              <li>
                <a
                  href="/#conocenos"
                  class="block px-4 py-2 hover:bg-azul hover:text-white transition-colors duration-200"
                  >Pastor</a
                >
              </li>
              <li>
                <a
                  href="/#pastor"
                  class="block px-4 py-2 hover:bg-azul hover:text-white transition-colors duration-200"
                  >Ministerios</a
                >
              </li>
              <li>
                <a
                  href="/#ministerio"
                  class="block px-4 py-2 hover:bg-azul hover:text-white transition-colors duration-200"
                  >Servicios</a
                >
              </li>
              <li>
                <a
                  href="/#ministerio"
                  class="block px-4 py-2 hover:bg-azul hover:text-white transition-colors duration-200"
                  >Galeria</a
                >
              </li>
            </ul>
          </div>
        </div>
        <a href="/#anuncios" class="text-white hover:text-amarillo">Anuncios</a>
        <a href="/#eventos" class="text-white hover:text-amarillo"
          >Proximos Eventos</a
        >
        <a href="/confesion" class="text-white hover:text-amarillo"
          >Confesión de fe</a
        >
        <a href="/preguntas" class="text-white hover:text-amarillo"
          >Preguntas frecuentes</a
        >
        <div v-if="isLoggedIn" class="relative inline-block">
          <button
            class="flex items-center justify-between py-2 px-3 font-medium text-white md:p-0 hover:text-amarillo"
            @click.stop="toggleAdminMenu"
          >
            Administración
            <img
              src="/menu/chevron-down.svg"
              class="w-4 h-4 ms-3 transition-transform duration-200"
              :class="{ 'rotate-180': isAdminMenuOpen }"
              alt="Chevron down"
            />
          </button>
          <div
            v-if="isAdminMenuOpen"
            class="absolute left-1/2 transform -translate-x-1/2 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dropdown-menu"
            style="top: calc(100% + 16px)"
          >
            <ul class="py-2 text-sm text-gray-700">
              <li>
                <a
                  href="/admin/eventos"
                  class="block px-4 py-2 hover:bg-azul hover:text-white transition-colors duration-200"
                  >Administración de anuncios</a
                >
              </li>
              <li>
                <a
                  href="/cambiopass"
                  class="block px-4 py-2 hover:bg-azul hover:text-white transition-colors duration-200"
                  >Cambio de Contraseña</a
                >
              </li>
              <li>
                <a
                  @click="logout"
                  class="block px-4 py-2 hover:bg-azul hover:text-white transition-colors duration-200 cursor-pointer"
                  >Cerrar sesión</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 md:mt-0">
          <a
            href="/donaciones"
            class="block text-center bg-amarillo text-azul py-2 px-4 rounded-lg font-semibold hover:bg-white hover:text-azul transition-colors"
          >
            Donaciones
          </a>
        </div>
      </div>

      <!-- Botón de hamburguesa para móviles -->
      <button
        @click="toggleSidebar"
        class="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <div class="relative w-6 h-6">
          <transition name="hamburger-top">
            <div
              :class="[
                'absolute w-6 h-0.5 bg-white transition-all duration-300',
                sidebarVisible ? 'top-3 rotate-45' : 'top-1',
              ]"
            ></div>
          </transition>
          <transition name="hamburger-middle">
            <div
              :class="[
                'absolute top-3 w-6 h-0.5 bg-white transition-all duration-300',
                sidebarVisible ? 'opacity-0' : 'opacity-100',
              ]"
            ></div>
          </transition>
          <transition name="hamburger-bottom">
            <div
              :class="[
                'absolute w-6 h-0.5 bg-white transition-all duration-300',
                sidebarVisible ? 'top-3 -rotate-45' : 'top-5',
              ]"
            ></div>
          </transition>
        </div>
      </button>
    </div>
  </nav>

  <!-- Sidebar para móviles -->
  <div
    :class="[
      'fixed inset-y-0 left-0 z-40 w-64 bg-azul overflow-y-auto transition-transform duration-300 ease-in-out transform md:hidden',
      sidebarVisible ? 'translate-x-0' : '-translate-x-full',
    ]"
  >
    <div class="p-5 font-asap">
      <div class="relative flex items-center justify-center">
        <h2 class="text-white text-xl font-semibold">Menu</h2>
      </div>

      <ul class="space-y-4 mt-8">
        <!-- Menu items -->
        <li v-for="(item, index) in menuItems" :key="index">
          <template v-if="item.submenu">
            <div
              @click="toggleSubmenu(item)"
              class="flex items-center justify-between py-2 px-4 text-white hover:bg-blue-800 rounded cursor-pointer"
            >
              <div class="flex items-center">
                <img :src="item.icon" class="w-5 h-5 mr-2" :alt="item.text" />
                {{ item.text }}
              </div>
              <img
                src="/menu/chevron-down.svg"
                :class="{ 'rotate-180': item.expanded }"
                class="w-5 h-5 transition-transform duration-200"
                alt="Expand"
              />
            </div>
            <ul v-show="item.expanded" class="ml-4 mt-2 space-y-2">
              <li v-for="(subitem, subindex) in item.submenu" :key="subindex">
                <a
                  :href="subitem.href"
                  @click="closeSidebarOnMobile"
                  class="flex items-center py-1 px-4 text-white hover:bg-blue-800 rounded"
                >
                  <img
                    :src="subitem.icon"
                    class="w-5 h-5 mr-2"
                    :alt="subitem.text"
                  />
                  {{ subitem.text }}
                </a>
              </li>
            </ul>
          </template>
          <template v-else>
            <a
              :href="item.href"
              @click="closeSidebarOnMobile"
              class="flex items-center py-2 px-4 text-white hover:bg-blue-800 rounded"
            >
              <img :src="item.icon" class="w-5 h-5 mr-2" :alt="item.text" />
              {{ item.text }}
            </a>
          </template>
        </li>
        <li v-if="isLoggedIn">
          <div
            @click="toggleSubmenu(adminMenu)"
            class="flex items-center justify-between py-2 px-4 text-white hover:bg-blue-800 rounded cursor-pointer"
          >
            <div class="flex items-center">
              <img
                src="/menu/admin.svg"
                class="w-5 h-5 mr-2"
                alt="Administración"
              />
              Administración
            </div>
            <img
              src="/menu/chevron-down.svg"
              :class="{ 'rotate-180': adminMenu.expanded }"
              class="w-5 h-5 transition-transform duration-200"
              alt="Expand"
            />
          </div>
          <ul v-show="adminMenu.expanded" class="ml-4 mt-2 space-y-2">
            <li>
              <a
                href="/admin/eventos"
                @click="closeSidebarOnMobile"
                class="flex items-center py-1 px-4 text-white hover:bg-blue-800 rounded"
              >
                <img
                  src="/menu/events.svg"
                  class="w-5 h-5 mr-2"
                  alt="Administración de Eventos"
                />
                Administración de Eventos
              </a>
            </li>
            <li>
              <a
                href="/cambiopass"
                @click="closeSidebarOnMobile"
                class="flex items-center py-1 px-4 text-white hover:bg-blue-800 rounded"
              >
                <img
                  src="/menu/password.svg"
                  class="w-5 h-5 mr-2"
                  alt="Cambio de Contraseña"
                />
                Cambio de Contraseña
              </a>
            </li>
          </ul>
        </li>
        <li v-if="isLoggedIn">
          <a
            @click="logout"
            class="flex items-center py-2 px-4 text-white hover:bg-blue-800 rounded cursor-pointer"
          >
            <img
              src="/menu/logout.svg"
              class="w-5 h-5 mr-2"
              alt="Cerrar sesión"
            />
            Cerrar sesión
          </a>
        </li>
      </ul>
      <div class="mt-8">
        <a
          href="/donaciones"
          class="block text-center bg-amarillo text-azul py-2 px-4 rounded-lg font-semibold hover:bg-white hover:text-azul transition-colors"
        >
          Donar
        </a>
      </div>
    </div>
  </div>

  <!-- Overlay -->
  <div
    v-if="sidebarVisible"
    @click="toggleSidebar"
    class="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
  ></div>

  <!-- Barra de progreso -->
  <BarraProgreso />
</template>

<script>
import BarraProgreso from "./BarraProgreso.vue";

export default {
  components: { BarraProgreso },
  name: "MenuInicio",
  data() {
    return {
      sidebarVisible: false,
      isOpen: false,
      isAdminMenuOpen: false,
      isLoggedIn: false,
      menuItems: [
        {
          text: "Inicio",
          href: "/#inicio",
          icon: "/menu/home.svg",
        },
        {
          text: "Conócenos",
          icon: "/menu/users.svg",
          expanded: false,
          submenu: [
            {
              text: "Pastor",
              href: "/conocenos/pastor",
              icon: "/menu/user.svg",
            },
            {
              text: "Ministerios",
              href: "/conocenos/ministerios",
              icon: "/menu/ministry.svg",
            },
            {
              text: "Servicios",
              href: "/conocenos/servicios",
              icon: "/menu/globe.svg",
            },
            {
              text: "Galería",
              href: "/conocenos/galeria",
              icon: "/menu/gallery.svg",
            },
          ],
        },
        {
          text: "Anuncios",
          href: "/#anuncios",
          icon: "/menu/megaphone.svg",
        },
        {
          text: "Próximos Eventos",
          href: "/#eventos",
          icon: "/menu/calendar.svg",
        },
        {
          text: "Confesión de fe",
          href: "/confesion",
          icon: "/menu/book.svg",
        },
        {
          text: "Preguntas frecuentes",
          href: "/preguntas",
          icon: "/menu/question.svg",
        },
      ],
      adminMenu: {
        expanded: false,
        submenu: [
          {
            text: "Cambio de Contraseña",
            href: "/cambiopass",
            icon: "/menu/password.svg",
          },
          {
            text: "Administración de Eventos",
            href: "/admin/eventos",
            icon: "/menu/events.svg",
          },
        ],
      },
    };
  },
  mounted() {
    document.addEventListener("click", this.closeMenu);
    this.checkLoginStatus();
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeMenu);
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    toggleSubmenu(item) {
      item.expanded = !item.expanded;
    },
    toggleMenu(event) {
      event.stopPropagation();
      this.isOpen = !this.isOpen;
    },
    toggleAdminMenu(event) {
      event.stopPropagation();
      this.isAdminMenuOpen = !this.isAdminMenuOpen;
    },
    closeMenu() {
      this.isOpen = false;
      this.isAdminMenuOpen = false;
    },
    closeSidebarOnMobile() {
      if (window.innerWidth < 768) {
        this.sidebarVisible = false;
      }
    },
    checkLoginStatus() {
      const token = localStorage.getItem("token");
      this.isLoggedIn = !!token;
    },
    logout() {
      localStorage.removeItem("token");
      this.isLoggedIn = false;
      window.location.href = "/";
    },
  },
};
</script>

<style scoped>
.dropdown-menu {
  position: absolute;
  min-width: 200px;
}

.dropdown-menu::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 0 10px 10px 10px;
  border-style: solid;
  border-color: transparent transparent white transparent;
}

.hamburger-top-enter-active,
.hamburger-top-leave-active,
.hamburger-middle-enter-active,
.hamburger-middle-leave-active,
.hamburger-bottom-enter-active,
.hamburger-bottom-leave-active {
  transition: all 0.3s;
}

.hamburger-top-enter-from,
.hamburger-top-leave-to,
.hamburger-middle-enter-from,
.hamburger-middle-leave-to,
.hamburger-bottom-enter-from,
.hamburger-bottom-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
