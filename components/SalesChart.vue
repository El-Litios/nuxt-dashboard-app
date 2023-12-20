<template>
  <div class="mt-5">
    <p class="font-bols">Sales over time</p>
    <div class="mt-5 h-[300px] rounded-lg bg-background md:p-3">
      <Line :options="options" :data="data" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from "chart.js";

import { Line } from "vue-chartjs";
import colors from "#tailwind-config/theme/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const mode = useColorMode();

const options = computed<ChartOptions<"line">>(() => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        intersect: false,
      },
    },
    scales: {
      y: {
        grid: {
          color: mode.value === "dark" ? colors.slate[900] : colors.slate[200],
        },
        ticks: {
          color: colors.slate[500],
        },
      },
      x: {
        grid: {
          color: mode.value === "dark" ? colors.slate[900] : colors.slate[200],
        },
        ticks: {
          color: colors.slate[500],
        },
      },
    },
  };
});

const data = ref<ChartData<"line">>({
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [{
    label: 'Sales over time',
    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    backgroundColor: colors.background,
    tension: 0.4,
    borderColor: colors.green[500],
    borderWidth: 2,
    pointBackgroundColor: colors.blue[500],
  }],
});
</script>

<style></style>
