<template>
  <div>
    <!-- Header -->
    <Header></Header>
    <div class="container lg:grid lg:grid-cols-12 lg:gap-10">
      <!-- Sidebar -->

      <Sidebar class="hideen lg:block lg:col-span-3"></Sidebar>
      <!-- Main section -->
      <main class="py-5 lg:col-span-6">
        <!-- Status cards -->
        <StatusCard></StatusCard>

        <!-- Costumer List -->
        <Costumers></Costumers>

        <!-- Sales Charts -->
        <SalesChart></SalesChart>

        <!-- Recent orders -->
        <RecentOrders></RecentOrders>
      </main>

      <div class="hidden py-5 lg:col-span-3 lg:block">
        <!-- Profile info section -->
        <ProfileInfo></ProfileInfo>
        
        <!-- Reminders -->
        <Reminders></Reminders>
      </div>
    </div>
  </div>
</template>
