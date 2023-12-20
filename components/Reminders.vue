<template>
  <div class="sticky top-20 mt-5">
    <p class="font-bold">Reminders</p>
    <ul v-for="(rem, index) in reminders" :key="index">
      <li>
        <div class="flex mt-5 items-center justify-between">
          <div class="flex items-center gap-3">
            <Icon name="heroicons:check-circle" class="h-4 w-4 text-muted-foreground"></Icon>
            <span class="text-sm">{{ rem.title }}</span>
          </div>
          <span class="text-sm text-muted-foreground">{{ rem.time }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const reminders = [
  { title: "Call John", time: "10:00 AM" },
  { title: "Meeting with Jane", time: "11:00 AM" },
  { title: "Call Sally", time: "12:00 PM" },
  { title: "Lunch with Sarah", time: "1:00 PM" },
];
</script>

<style></style>
