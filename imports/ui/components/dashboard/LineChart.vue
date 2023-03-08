<template>
  <Line
    chart-id="line-chart"
    :data="chartData"
    :chart-options="chartOptions"
    :styles="{ height: '500px' }"
  ></Line>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
)
export default defineComponent({
  components: { Line },
  setup() {
    const gradient = ref(null)
    const gradient2 = ref(null)
    const chartData = computed(() => {
      return {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'Data One',
            borderWidth: 2,
            borderColor: '#FC2525',
            pointBorderWidth: 3,
            // pointBackgroundColor: '#fff',
            // pointBorderColor: '#fff',
            backgroundColor: '#FC2525',
            data: [40, 39, 10, 40, 39, 80, 40],
            fill: true,
          },
          {
            label: 'Data Two',
            borderWidth: 2,
            borderColor: '#05CBE1',
            pointBorderWidth: 3,
            // pointBackgroundColor: '#fff',
            // pointBorderColor: '#fff',
            backgroundColor: '#05CBE1',
            data: [60, 55, 32, 10, 2, 12, 53],
            fill: true,
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
    }

    return { chartData, chartOptions }
  },
})
</script>
