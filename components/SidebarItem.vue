<template>
  <div class="flex flex-col">
    <template v-for="(item, index) in links" :key="index">
      <NuxtLink
        to="/"
        v-if="!item.items"
        class="inline-flex items-center gap-4 px-4 p-3 text-left text-[15px]"
      >
        <Icon
          v-if="item.icon"
          :name="item.icon"
          class="h-5 w-5 text-muted-foreground"
        ></Icon>
        <p class="truncate">{{ item.title }}</p>
      </NuxtLink>

      <HDisclosure v-slot="{ open }" v-else>
        <HDisclosureButton
          class="inline-flex items-center gap-4 px-4 p-3 text-left text-[15px]"
        >
          <div class="flex item-center gap-4">
            <Icon
              v-if="item.icon"
              :name="item.icon"
              class="h-5 w-5 text-muted-foreground"
            ></Icon>
            <p class="truncate">{{ item.title }}</p>
          </div>
          <div>
            <Icon :class="[open && 'rotate-180']" name="heroicons:chevron-down" class="h-5 w-5 text-muted-foreground transition"></Icon>
          </div>
        </HDisclosureButton>

        <TransitionExpand>
          <HDisclosurePanel 
          class="mx-6 flex flex-col border-l px-3">
          <SidebarItem :links="item.items" ></SidebarItem>
        </HDisclosurePanel>
        </TransitionExpand>
        

      </HDisclosure>
    </template>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  links?: any[];
}>();
</script>

<style></style>
