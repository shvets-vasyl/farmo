<template>
  <main class="main-page">
    <div class="wrap">
      <div class="name">
        <img src="/logo.png" alt="" />
        <span>FARMOOO</span>
      </div>

      <div class="balance">
        <p class="balance-title">Total Balance</p>
        <div class="balance-total">
          <img src="/item.svg" alt="" />
          <span class="balance-number">150.59</span>
        </div>
      </div>
      <div class="today">
        <div class="today-percentage">
          <svg
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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

      <div class="items">
        <div v-for="(item, i) in info" :key="i" class="item">
          <p class="item-type">{{ item.type }}</p>
          <p class="item-number-wrap">
            <img src="/item.svg" alt="" />
            <span class="item-number">{{ item.number }}</span>
          </p>
          <p class="item-percent">{{ item.percent }}</p>
        </div>
      </div>

      <div
        class="tap"
        @pointerup="onMouseUp"
        @pointerdown="onMouseDown"
        @click="vibrate"
      >
        <img v-if="tapDisabled" src="/tap-unactive.png" alt="" />
        <img v-else src="/tap-active.png" alt="" />
      </div>

      <div class="finish">
        <p>До збору</p>
        <div class="time">{{ countdown }}</div>
      </div>

      <button
        class="get-btn"
        :disabled="btnDisabled"
        @pointerup="onMouseUpGetBtn"
        @pointerdown="onMouseDownGetBtn"
      >
        Забрати FPI BANKI
      </button>

      <div class="info">
        <div class="head">
          <div class="invited">
            <svg
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9207 15.1165C18.3543 15.1165 21.1377 12.3331 21.1377 8.89951C21.1377 5.46594 18.3543 2.68248 14.9207 2.68248C11.4872 2.68248 8.70369 5.46594 8.70369 8.89951C8.70369 12.3331 11.4872 15.1165 14.9207 15.1165Z"
                stroke="#B6FB4C"
                stroke-width="2.03435"
              />
              <path
                d="M21.1379 17.6033H21.5756C22.4846 17.6036 23.3622 17.9358 24.0436 18.5375C24.725 19.1392 25.1632 19.969 25.2759 20.871L25.7621 24.7554C25.8058 25.1053 25.7746 25.4606 25.6706 25.7975C25.5665 26.1345 25.392 26.4454 25.1586 26.7098C24.9252 26.9741 24.6382 27.1858 24.3167 27.3308C23.9952 27.4757 23.6466 27.5507 23.294 27.5506H6.54778C6.19512 27.5507 5.84649 27.4757 5.52501 27.3308C5.20353 27.1858 4.91656 26.9741 4.68314 26.7098C4.44972 26.4454 4.27519 26.1345 4.17114 25.7975C4.06709 25.4606 4.03589 25.1053 4.07962 24.7554L4.56455 20.871C4.67732 19.9686 5.11589 19.1384 5.79779 18.5367C6.4797 17.9349 7.35795 17.603 8.26741 17.6033H8.70384"
                stroke="#B6FB4C"
                stroke-width="2.03435"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div class="invited-text">
              <p class="invited-count">5/10</p>
              <p class="invited-status">INVITED</p>
            </div>
          </div>
          <div class="invited">
            <svg
              viewBox="0 0 25 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7321 12.1378C19.7193 13.1822 19.0205 14.5917 17.4399 14.9528C17.331 14.9777 17.2316 14.8832 17.2551 14.7765C17.562 13.3842 18.7634 5.74979 9.58906 0.912127C9.36651 0.79492 9.1133 1.00988 9.20375 1.24031C9.84993 2.88819 10.9123 7.2897 6.38572 11.862C2.87526 15.4079 0 18.7977 0 23.1256C0 27.4536 2.69359 31.8354 7.84954 33.3434C8.09892 33.4164 8.26066 33.0912 8.04526 32.9484C6.65605 32.0264 5.55148 30.5728 5.24435 28.5127C4.8128 25.6179 5.85528 23.5735 6.40616 22.7291C6.49917 22.5865 6.72351 22.6359 6.74241 22.8039C6.81702 23.4678 7.11367 24.6147 8.24507 25.1885C8.41754 25.276 8.62093 25.1386 8.59563 24.9506C8.41371 23.593 8.16586 19.1211 12.0062 15.4895C12.1247 15.3772 12.324 15.465 12.3161 15.6259C12.2637 16.6845 12.403 19.3613 14.8411 21.3169C16.8039 22.8915 18.7905 24.8568 18.7905 28.0967C18.7905 29.9671 17.9634 31.6513 16.529 32.7755C16.3302 32.9314 16.4976 33.2419 16.739 33.1618C21.7475 31.4987 24.3749 27.2586 24.5597 22.9818C24.7649 18.2281 22.962 14.262 20.1828 11.9426C20.008 11.7967 19.7349 11.9134 19.7321 12.1378Z"
                fill="url(#paint0_linear_10_872)"
              />
              <path
                d="M19.7321 12.1378C19.7193 13.1822 19.0205 14.5917 17.4399 14.9528C17.331 14.9777 17.2316 14.8832 17.2551 14.7765C17.562 13.3842 18.7634 5.74979 9.58906 0.912127C9.36651 0.79492 9.1133 1.00988 9.20375 1.24031C9.84993 2.88819 10.9123 7.2897 6.38572 11.862C2.87526 15.4079 0 18.7977 0 23.1256C0 27.4536 2.69359 31.8354 7.84954 33.3434C8.09892 33.4164 8.26066 33.0912 8.04526 32.9484C6.65605 32.0264 5.55148 30.5728 5.24435 28.5127C4.8128 25.6179 5.85528 23.5735 6.40616 22.7291C6.49917 22.5865 6.72351 22.6359 6.74241 22.8039C6.81702 23.4678 7.11367 24.6147 8.24507 25.1885C8.41754 25.276 8.62093 25.1386 8.59563 24.9506C8.41371 23.593 8.16586 19.1211 12.0062 15.4895C12.1247 15.3772 12.324 15.465 12.3161 15.6259C12.2637 16.6845 12.403 19.3613 14.8411 21.3169C16.8039 22.8915 18.7905 24.8568 18.7905 28.0967C18.7905 29.9671 17.9634 31.6513 16.529 32.7755C16.3302 32.9314 16.4976 33.2419 16.739 33.1618C21.7475 31.4987 24.3749 27.2586 24.5597 22.9818C24.7649 18.2281 22.962 14.262 20.1828 11.9426C20.008 11.7967 19.7349 11.9134 19.7321 12.1378Z"
                fill="#B6FB4C"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_10_872"
                  x1="12.2878"
                  y1="0.879105"
                  x2="12.2878"
                  y2="33.3539"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="1" stop-color="#666666" />
                </linearGradient>
              </defs>
            </svg>

            <div class="invited-text">
              <p class="invited-count">2 days</p>
              <p class="invited-status">streak</p>
            </div>
          </div>
        </div>
        <div class="foot" @click="copyReferralLink">
          <div class="copy">
            <span v-if="copySuccess" class="copy-status">Copied!</span>
            <svg
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.50205 5.95348C3.50205 4.59118 4.59118 3.50205 5.95348 3.50205H18.5608C19.9231 3.50205 21.0122 4.59118 21.0122 5.95348V7.00409C21.0122 7.23404 21.0575 7.46173 21.1455 7.67417C21.2335 7.88662 21.3625 8.07965 21.5251 8.24225C21.6877 8.40484 21.8807 8.53382 22.0932 8.62182C22.3056 8.70982 22.5333 8.75511 22.7633 8.75511C22.9932 8.75511 23.2209 8.70982 23.4334 8.62182C23.6458 8.53382 23.8388 8.40484 24.0014 8.24225C24.164 8.07965 24.293 7.88662 24.381 7.67417C24.469 7.46173 24.5143 7.23404 24.5143 7.00409V5.95348C24.5143 2.65806 21.8562 9.30379e-06 18.5608 9.30379e-06H5.95348C5.17127 -0.00137473 4.39648 0.151672 3.67355 0.450371C2.95061 0.749071 2.29376 1.18755 1.74065 1.74065C1.18755 2.29376 0.749071 2.95061 0.450371 3.67355C0.151672 4.39648 -0.00137473 5.17127 9.30379e-06 5.95348V18.5608C9.30379e-06 21.8562 2.65806 24.5143 5.95348 24.5143H7.00409C7.46849 24.5143 7.91387 24.3298 8.24225 24.0014C8.57063 23.673 8.75511 23.2277 8.75511 22.7633C8.75511 22.2989 8.57063 21.8535 8.24225 21.5251C7.91387 21.1967 7.46849 21.0122 7.00409 21.0122H5.95348C4.59118 21.0122 3.50205 19.9231 3.50205 18.5608V5.95348Z"
                fill="#B6FB4C"
              />
              <path
                d="M12.2571 16.4057C12.2571 15.3054 12.6942 14.2502 13.4722 13.4722C14.2502 12.6942 15.3054 12.2571 16.4057 12.2571H28.8514C29.9517 12.2571 31.0069 12.6942 31.7849 13.4722C32.5629 14.2502 33 15.3054 33 16.4057V28.8514C33 29.9517 32.5629 31.0069 31.7849 31.7849C31.0069 32.5629 29.9517 33 28.8514 33H16.4057C15.3054 33 14.2502 32.5629 13.4722 31.7849C12.6942 31.0069 12.2571 29.9517 12.2571 28.8514V16.4057Z"
                fill="#B6FB4C"
              />
            </svg>

            <span class="copy-title">Copy link</span>
          </div>
          <p class="copy-info">1 друг = +1 FPI BANKI +1% до фарму</p>

          <div class="soc">
            <a href="https://x.com/home" target="_blank">
              <svg
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.3132 46.4895H23.211C10.4259 46.4895 0.0241394 36.0847 0.0241394 23.2959V23.1936C0.0241394 10.4048 10.4259 0 23.211 0H23.3132C36.0983 0 46.5 10.4048 46.5 23.1936V23.2959C46.5 36.0847 36.0983 46.4895 23.3132 46.4895ZM23.211 1.57362C11.2927 1.57362 1.5973 11.2719 1.5973 23.1936V23.2959C1.5973 35.2177 11.2927 44.9159 23.211 44.9159H23.3132C35.2315 44.9159 44.9268 35.2177 44.9268 23.2959V23.1936C44.9268 11.2719 35.2315 1.57362 23.3132 1.57362H23.211Z"
                  fill="#E9E9E9"
                />
                <path
                  d="M9.91775 10.9556L20.2723 24.8035L9.85324 36.0627H12.1988L21.3216 26.2056L28.6918 36.0627H36.6725L25.7359 21.4359L35.4344 10.9556H33.0888L24.6881 20.0338L17.9 10.9556H9.91931H9.91775ZM13.3661 12.6834H17.0316L33.221 34.3349H29.5555L13.3661 12.6834Z"
                  fill="#E9E9E9"
                />
              </svg>
            </a>
            <a href="https://web.telegram.org/" target="_blank">
              <svg
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7891 46.4895H23.6868C10.9017 46.4895 0.5 36.0848 0.5 23.2959V23.1936C0.5 10.4048 10.9017 0 23.6868 0H23.7891C36.5741 0 46.9759 10.4048 46.9759 23.1936V23.2959C46.9759 36.0848 36.5741 46.4895 23.7891 46.4895ZM23.6868 1.57362C11.7685 1.57362 2.07316 11.2718 2.07316 23.1936V23.2959C2.07316 35.2177 11.7685 44.9159 23.6868 44.9159H23.7891C35.7073 44.9159 45.4027 35.2177 45.4027 23.2959V23.1936C45.4027 11.2718 35.7073 1.57362 23.7891 1.57362H23.6868Z"
                  fill="#E9E9E9"
                />
                <path
                  d="M9.79104 22.4776C9.85397 22.4462 9.91693 22.4162 9.97828 22.3879C11.0449 21.8938 12.1256 21.4312 13.2048 20.9685C13.263 20.9685 13.3605 20.9008 13.4156 20.8788C13.499 20.8426 13.5824 20.808 13.6658 20.7718C13.8262 20.7026 13.9867 20.6349 14.1456 20.5657C14.4665 20.4288 14.7858 20.2919 15.1068 20.155C15.747 19.8812 16.3873 19.6073 17.0276 19.332C18.3081 18.7843 19.5903 18.2351 20.8708 17.6875C22.1514 17.1399 23.4335 16.5907 24.7141 16.0431C25.9946 15.4954 27.2767 14.9463 28.5573 14.3986C29.8378 13.851 31.12 13.3018 32.4005 12.7542C32.6853 12.6315 32.9936 12.4489 33.2988 12.3954C33.5552 12.3498 33.8053 12.2617 34.0633 12.2129C34.5526 12.12 35.0922 12.0823 35.561 12.2853C35.723 12.3561 35.8725 12.4552 35.9968 12.5795C36.5914 13.1681 36.508 14.1343 36.3822 14.962C35.5059 20.7309 34.6297 26.5014 33.7519 32.2703C33.6323 33.0618 33.4687 33.9305 32.8441 34.4309C32.3156 34.8542 31.5636 34.9014 30.9107 34.722C30.2579 34.541 29.6821 34.1618 29.1173 33.7888C26.7749 32.2372 24.4309 30.6856 22.0885 29.134C21.5316 28.7658 20.9117 28.2843 20.918 27.6155C20.9212 27.2127 21.1619 26.8538 21.4073 26.5344C23.4429 23.8781 26.38 22.0527 28.5652 19.5192C28.8735 19.162 29.1158 18.5168 28.6926 18.3107C28.4409 18.1879 28.1514 18.3547 27.9217 18.5136C25.0334 20.52 22.1467 22.528 19.2584 24.5343C18.316 25.189 17.3281 25.8625 16.1923 26.023C15.176 26.1677 14.1535 25.8845 13.1702 25.595C12.3459 25.3526 11.5231 25.104 10.7035 24.8475C10.2677 24.7121 9.81779 24.5658 9.48114 24.2589C9.14448 23.9521 8.95101 23.436 9.15394 23.0268C9.28137 22.7703 9.52836 22.6082 9.78793 22.4761L9.79104 22.4776Z"
                  fill="#E9E9E9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import gsap from "gsap";

declare global {
  interface Window {
    TapticEngine?: { impact: (style: "light" | "medium" | "heavy") => void };
  }
}

const info = [
  {
    type: "24 Hours Balance",
    from: "FPI BANKI",
    number: "1560.60",
    percent: "+4.64%",
  },
  {
    type: "Referral Bonus",
    from: "FPI BANKI",
    number: "61.45",
    percent: "+0.62%",
  },
];

const vibrate = () => {
  if ("vibrate" in navigator) {
    navigator.vibrate(50);
  } else if (window.TapticEngine) {
    window.TapticEngine?.impact("light");
  }
};

const tapDisabled = ref(false);

const onMouseDown = () => {
  if (tapDisabled.value) return;

  gsap.to(".tap", {
    scale: 0.95,
    duration: 0.25,
  });
};
const onMouseUp = () => {
  if (tapDisabled.value) return;

  gsap.to(".tap", {
    scale: 1,
    duration: 0.25,
  });
};

const btnDisabled = ref(false);

const onMouseDownGetBtn = () => {
  if (btnDisabled.value) return;

  const btn = document.querySelector(".get-btn");
  btn?.classList.add("_active");
};
const onMouseUpGetBtn = () => {
  if (btnDisabled.value) return;

  const btn = document.querySelector(".get-btn");
  btn?.classList.remove("_active");
};

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

const copySuccess = ref(false);

const copyReferralLink = async () => {
  const referralText = `copied text!`;

  await navigator.clipboard.writeText(referralText);
  copySuccess.value = true;

  setTimeout(() => {
    copySuccess.value = false;
  }, 800);
};

onMounted(() => {
  updateCountdown();
  interval = window.setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (interval !== undefined) clearInterval(interval);
});
</script>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  background: #0f0f0f;
  color: white;
  padding-bottom: 2.8125rem;
}
.wrap {
  width: 21rem;
  margin: 0 auto;
  padding-top: 4rem;
}
.name {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4375rem;
  font-variation-settings: "wght" 800;
  margin-bottom: 1.4375rem;
  font-size: 1.25rem;
}
.name img {
  width: 2rem;
}
.balance-total {
  display: flex;
  align-items: center;
  font-variation-settings: "wght" 800;
  gap: 0.3125rem;
}
.balance-total img {
  width: 2.5625rem;
}
.balance-title {
  font-size: 0.875rem;
  font-variation-settings: "wght" 400;
  margin-bottom: 0.6875rem;
}
.balance-number {
  font-size: 3.3125rem;
  font-variation-settings: "wght" 800;
}
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
.item-type {
  font-size: 1.125rem;
}
.item-number-wrap {
  width: 1.125rem;
  display: flex;
  gap: 0.3125rem;
  margin-top: 0.375rem;
}
.item-number-wrap img {
  width: 0.875rem;
}
.item-number {
  font-variation-settings: "wght" 600;
  color: #e4e4f0;
}
.item-percent {
  font-family: var(--nunito);
  color: #7e47be;
  font-size: 0.9375rem;
}
.item-type {
  font-variation-settings: "wght" 600;
  color: #e4e4f0;
}
.items {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}
.tap {
  width: 100%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
}
.tap img {
  width: 105%;
}
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
.get-btn {
  margin-top: 1.875rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 0.9375rem;
  border: 1px solid rgba(white, 0.8);

  padding: 1.4375rem 0;
  text-align: center;
  font-size: 1.25rem;

  text-transform: uppercase;
  font-family: var(--inter);
  font-variation-settings: "wght" 700;
  width: 100%;

  color: white;
  background: linear-gradient(
    144deg,
    rgba(161, 230, 53, 0.4) 9.13%,
    rgba(93, 139, 20, 0.4) 62.89%
  );
  transition: all 0.3s ease;
}
.get-btn[disabled] {
  background: linear-gradient(144deg, #28272f 9.13%, #040404 62.89%),
    linear-gradient(
      90deg,
      rgba(65, 65, 65, 0.4) 0%,
      rgba(167, 167, 167, 0.4) 100%
    );
  color: rgba(white, 0.5);
  border-color: rgba(white, 0.4);
}
.get-btn._active {
  transform: scale(0.95);
  background: linear-gradient(
    144deg,
    rgba(206, 255, 129, 0.4) 9.13%,
    rgba(142, 191, 64, 0.4) 62.89%
  );
}
.info {
  background: linear-gradient(144deg, #28272f 9.13%, #040404 62.89%),
    linear-gradient(107deg, #2c2c2c 0%, #242424 100.86%);
  border-radius: 0.9375rem;
  margin-top: 1.125rem;
  box-shadow: 0px 0px 1.875rem 0px rgba(#a1e635, 0.3);
}
.invited svg {
  width: 1.875rem;
}
.invited {
  display: flex;
  gap: 0.6875rem;
  border-radius: 15px;
  align-items: center;
}
.invited:nth-child(2) svg {
  width: 1.5625rem;
}
.invited-count,
.invited-status {
  font-size: 1rem;
  font-variation-settings: "wght" 600;
}
.invited-status {
  text-transform: uppercase;
}
.invited-count {
  text-transform: capitalize;
}
.head {
  padding: 1.5625rem 1.4375rem 1.3125rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #6e6e6e;
}
.soc {
  margin-top: 1.25rem;
  display: flex;
  justify-content: center;
  gap: 3.75rem;
}
.soc svg {
  width: 2.8rem;
}
.invited-status {
  color: #c4c4c4;
}
.copy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;
}
.copy svg {
  width: 2.0625rem;
}
.foot {
  padding: 1.25rem 0;
}
.copy-title {
  font-size: 0.875rem;
  font-variation-settings: "wght" 600;
}
.copy-info {
  text-align: center;
  font-size: 0.625rem;
  font-variation-settings: "wght" 400;
  color: #c4c4c4;
  margin-top: 1rem;
}
.copy-status {
  font-size: 0.625rem;
  font-variation-settings: "wght" 400;
  position: absolute;
  top: 50%;
  left: 4rem;
  transform: translateY(-50%);
}
</style>
