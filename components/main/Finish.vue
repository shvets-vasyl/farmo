<template>
  <div class="finish">
		<p>До збору</p>
		<div class="time">{{ countdown }}</div>
	</div>
</template>

<script lang="ts" setup>
onMounted(() => {
  updateCountdown();
  interval = window.setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (interval !== undefined) clearInterval(interval);
});

const countdown = ref("00 : 00 : 00");
const inputTime = "2:20";
let interval: number | undefined;

const parseTime = (timeStr: string): number => {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return (hours * 60 + minutes) * 60 * 1000;
};

const targetTime = new Date().getTime() + parseTime(inputTime);

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetTime - now;

  if (distance < 0) {
    countdown.value = "00 : 00 : 00";
    if (interval !== undefined) clearInterval(interval);
    return;
  }

  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((distance / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((distance / 1000) % 60)
    .toString()
    .padStart(2, "0");

  countdown.value = `${hours} : ${minutes} : ${seconds}`;
};
</script>

<style lang="scss" scoped>
.finish {
  margin-top: 1.5rem;
  text-align: center;
}
.finish p {
  font-size: 1.2rem;
  font-variation-settings: "wght" 700;
  text-transform: uppercase;
}
.time {
  font-size: 3.3125rem;
  font-variation-settings: "wght" 400;
  margin-top: 0.8rem;
  background: linear-gradient(63deg, #eef1f0 7.18%, #71757e 83.56%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
