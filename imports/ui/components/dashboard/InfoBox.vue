<template>
  <q-card class="info-box">
    <div :class="['info-box-icon', iconBoxBg]">
      <q-icon
        :color="iconColor"
        :name="icon"
      />
    </div>

    <div :class="['info-box-content', color]">
      <span class="info-box-text">{{ title }}</span>
      <span class="info-box-number">
        {{ number }}
        <small>{{ currency }}</small>
      </span>
      <q-linear-progress
        v-if="progress"
        dark
        rounded
        :value="progress"
        color="white"
        class="q-my-xs"
        style="height: 3px"
      />
      <small
        v-if="progress"
        class="des-text text-white"
      >
        {{ description }}
      </small>
    </div>
  </q-card>
</template>

<script>
import { QCard, QIcon, QLinearProgress } from 'quasar'
export default {
  name: 'InfoBox',
  components: {
    QCard,
    QIcon,
    QLinearProgress,
  },
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    number: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    iconColor: {
      type: String,
      default: '',
    },
    iconBoxBg: {
      type: String,
      default: '',
    },
    currency: {
      type: String,
      default: '',
    },
    progress: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.info-box {
  display: block;
  min-height: 90px;
  background: #fff;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  margin-bottom: 15px;
}
.info-box-icon {
  border-radius: 0 !important;
  display: block;
  float: left;
  height: 90px;
  width: 90px;
  text-align: center;
  font-size: 45px;
  line-height: 90px;
  background: #fff;
}
.info-box-content {
  height: 90px;
  border-radius: 0 !important;
  padding: 5px 10px;
  margin-left: 90px;
}
.info-box-text {
  text-transform: uppercase;
  color: #fff;
  display: block;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info-box-number {
  color: #fff;
  display: block;
  font-weight: bold;
  font-size: 18px;
}
.des-text {
  display: block;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsi;
}
</style>
