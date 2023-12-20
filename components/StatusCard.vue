<template>
  <section class="grid gap-5 md:grid-cols-2">
    <!-- Renevue Card -->
    <div class="rounded-lg border bg-card p-6">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium">Total Renueve</p>
        <span class="shrink-0">
          <Icon name="heroicons:banknotes" class="w-4 h-4 text-muted-foreground"></Icon>
        </span>
      </div>

      <p class="mt-1,5 text-xl font-extrabold">$23.453.455</p>
      <p class="text-xs text-muted-foreground">20% more than last month</p>
    </div>

    <!-- Sales Card -->

    <div class="rounded-lg border bg-card p-6">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium">Sales</p>
        <span class="shrink-0">
          <Icon name="heroicons:credit-card" class="w-4 h-4 text-muted-foreground"></Icon>
        </span>
      </div>

      <p class="mt-1,5 text-xl font-extrabold">$453.455</p>
      <p class="text-xs text-muted-foreground">20% more than last month</p>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style>

</style>