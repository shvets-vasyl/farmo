<template>
  <div class="today">
    <div class="today-percentage">
      <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="22" height="22" rx="11" fill="#7E47BE" />
        <path
          d="M11 18.0714V4.32141"
          stroke="#B6FB4C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.5 9.42859L11 3.92859L5.5 9.42859"
          stroke="#B6FB4C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <span>1.2%</span>
    </div>
    <p class="today-title">Today</p>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.today-percentage svg {
  width: 1.375rem;
}
.today {
  display: flex;
  align-items: center;
  color: black;
  margin-top: 0.7rem;
}
.today-percentage {
  background: white;
  border-radius: 2.375rem;
  padding: 0.125rem 0.625rem 0.125rem 0.125rem;
  font-size: 0.875rem;
  font-variation-settings: "wght" 700;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.today-title {
  color: white;
  margin-left: 0.6875rem;
}
</style>
