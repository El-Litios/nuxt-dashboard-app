<template>
  <header class="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
    <!-- Flex contianer -->
    <div class="container flex h-16 items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img src="/icons.svg" alt="analytics" class="h-7 w-7 object-contain" />

        <!-- Page title -->
        <NuxtLink class="text-xl font-bold" to="/">Analytics</NuxtLink>
      </div>

      <!-- Right side of header -->
      <div class="flex items-center gap-5">
        <button
          @click="toggleTheme()"
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background"
        >
          <Icon name="heroicons:sun" class="h-5 w-5"></Icon>
        </button>

        <!-- Profile dropdown -->
        <HMenu as="div" class="relative">
          <HMenuButton
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background"
          >
            <img
              src="https://randomuser.me/api/portraits/med/men/75.jpg"
              alt="logged in user"
              class="w-full h-full rounded-full"
            />
          </HMenuButton>
          <TransitionScale :scale="0.8" origin="top right">
            <HMenuItems
              class="absolute right-0 z-10 mt-3 w-48 rounded-md border bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div class="border-b px-3 py-1.5 text-sm">
                <p class="semi-bold">Hola</p>
                <a
                  href="mailto:carlos@gmail.com"
                  class="leading-none text-muted-foreground"
                  >carlos@gmail.com</a
                >
              </div>
              <div class="p-1">
                <template v-for="(item, index) in menuOptions" :key="index">
                  <HMenuItem v-if="!item.divider" v-slot="{ active }">
                    <button
                      :class="[active && 'bg-muted']"
                      class="inline-flex w-full items-center rounded-md p-2 text-sm font-medium"
                      @click="item.click?.()"
                    >
                      {{ item.title }}
                    </button>
                  </HMenuItem>
                  <hr v-if="item.divider" class="my-1" />
                </template>
              </div>
            </HMenuItems>
          </TransitionScale>
        </HMenu>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const mode = useColorMode();
const toggleTheme = () => {
  mode.value = mode.value === "light" ? "dark" : "light";
};

const menuOptions = [
  { title: "Perfil" },
  { title: "Cuentas" },
  { title: "Configuraciones" },
  { title: "Ventas" },
  { divider: true },
  { title: "Cerrar Sesión", click: () => alert("sesion cerrada") },
];
</script>

<style></style>
