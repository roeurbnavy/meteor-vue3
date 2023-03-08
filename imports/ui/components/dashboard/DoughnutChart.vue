<template>
  <Doughnut
    chart-id="doughnut-chart"
    :data="chartData"
    :chart-options="chartOptions"
    :styles="{ height: '422px' }"
  />
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue'

import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default defineComponent({
  components: { Doughnut },
  setup() {
    const gradient = ref(null)
    const gradient2 = ref(null)
    const gradient3 = ref(null)
    const gradient4 = ref(null)
    const gradient5 = ref(null)

    const chartData = computed(() => {
      return {
        labels: ['Chrome', 'IE', 'Firefox', 'Opera', 'Safari'],
        datasets: [
          {
            label: 'Data One',
            borderColor: [
              '#FC2525',
              '#00838f',
              '#AB47BC',
              '#FBC02D',
              '#388E3C',
            ],
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: 'white',
            backgroundColor: [
              '#FC2525',
              '#00838f',
              '#AB47BC',
              '#FBC02D',
              '#388E3C',
              // gradient.value,
              // gradient2.value,
              // gradient3.value,
              // gradient4.value,
              // gradient5.value,
            ],
            data: [70, 15, 40, 20, 50],
          },
        ],
      }
    })

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      chartArea: {
        backgroundColor: 'rgba(251, 85, 85, 0.4)',
      },
      animation: {
        animateScale: true,
      },
      legend: {
        position: 'right',
      },
    }

    return { chartData, chartOptions }
  },
})
</script>
