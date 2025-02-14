<template>
  <div class="info">
    <div class="head">
      <div class="invited">

				<div class="invited-icon">
					<IconInvited />
				</div>

        <div class="invited-text">
          <p class="invited-count">5/10</p>
          <p class="invited-status">INVITED</p>
        </div>
      </div>
      <div class="invited">
        <div class="invited-icon">
					<IconStreak />
				</div>

        <div class="invited-text">
          <p class="invited-count">2 days</p>
          <p class="invited-status">streak</p>
        </div>
      </div>
    </div>
    <div class="foot">

      <div class="copy">
				<div class="copy-link" @click="copyLink('Copied Link Success')">
					<span v-if="copyLinkSuccess" class="copy-status">Copied!</span>

					<span class="copy-icon">
						<IconCopyLink />
					</span>

					<span class="copy-title">Copy link</span>
				</div>

				<div class="copy-promo" @click="copyPromo('Copied Promo Success')">
					<span v-if="copyPromoSuccess" class="copy-status">Copied!</span>

					<span class="copy-icon">
						<IconCopyPromo />
					</span>

					<span class="copy-title">Copy Promo</span>
				</div>
      </div>
      <p class="copy-info">1 друг = +1 FPI BANKI +1% до фарму</p>

      <div class="soc">
        <a href="https://x.com/home" target="_blank">
          <IconSocX />
        </a>
        <a href="https://web.telegram.org/" target="_blank">
          <IconSocTg />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const copyLinkSuccess = ref(false);
const copyPromoSuccess = ref(false);

const copyLink = async (text: string) => {
  await navigator.clipboard.writeText(text);

	copyLinkSuccess.value = true;

	setTimeout(() => {
		copyLinkSuccess.value = false;
	}, 800);
};

const copyPromo = async (text: string) => {
  await navigator.clipboard.writeText(text);

	copyPromoSuccess.value = true;

	setTimeout(() => {
		copyPromoSuccess.value = false;
	}, 800);
};

</script>

<style lang="scss" scoped>
.info {
  background: linear-gradient(144deg, #28272f 9.13%, #040404 62.89%),
    linear-gradient(107deg, #2c2c2c 0%, #242424 100.86%);
  border-radius: 0.9375rem;
  margin-top: 1.125rem;
  box-shadow: 0px 0px 1.875rem 0px rgba(#a1e635, 0.3);
}
.invited-icon {
  width: 1.875rem;
}
.invited {
  display: flex;
  gap: 0.6875rem;
  border-radius: 15px;
  align-items: center;
}
.invited:nth-child(2) .invited-icon {
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
.soc a {
  width: 2.8rem;
	display: inline-flex;
}
.invited-status {
  color: #c4c4c4;
}
.copy-link, .copy-promo {
	display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
	position: relative;
}
.copy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  position: relative;
}
.copy-icon {
  width: 2.0625rem;
}
.copy-promo .copy-icon {
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
  top: 100%;
	margin-top: -0.5rem;
  left: 2.87rem;
}
</style>
