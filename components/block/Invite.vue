<template>
  <TemplateBlock class="invite-block">
    <CommonBack @click.native="store.show_block = 'main'" />

    <div class="invite__wrap">
      <div class="invite__title h2">Invite friends!</div>

      <div class="invite__descr h5">
        You and your friend will receive bonuses
      </div>

      <div class="invite__gift">
        <div class="invite__gift-img">
          <img src="/gift.png" alt="gift image" />
        </div>
        <div class="invite__gift-content">
          <div class="h5">Invite a friend</div>
          <div class="invite__gift-coins">
            <img src="/coin.png" alt="coin" class="invite__gift-coins-icon" />
            <span class="t1 invite__gift-coins-number">+1,000</span>
            <span class="t1 invite__gift-coins-text">
              for you and your friend
            </span>
          </div>
        </div>
      </div>

      <div class="invite__more-bonuses h4">More bonuses</div>

      <div class="invite__list-friends">
        <div class="h5">List of your friends</div>

        <div
          v-if="store.user.referrals && store.user.referrals.length"
          class="invite__invited-friends-list"
        >
          <div
            v-for="(item, i) in store.user.referrals"
            :key="i"
            class="invite__invited-friend-item"
          >
            <div class="invite__invited-friend-photo">
              <img
                class="inner-media"
                :src="getPhoto(item.user_id)"
                alt="friend photo"
              />
            </div>

            <div class="invite__invited-friend-info">
              <div class="invite__invited-friend-info-left">
                <div class="invite__invited-friend-name t1">
                  {{ item.username ? item.username : item.first_name }}
                </div>
                <div class="invite__invited-friend-wallet"></div>
              </div>
              <div class="invite__invited-friend-info-right">
                <div class="invite__invited-friend-online t1">
                  {{ item.is_online ? "Online" : "Offline" }}
                  <IconsCheckbox v-if="item.is_online" />
                </div>
                <div class="invite__invited-friend-coins">
                  <div class="invite__invited-friend-coins-icon">
                    <img src="/coin.png" draggable="false" alt="" />
                  </div>
                  <div class="invite__invited-friend-coins-number t1">
                    {{ formatCoins(item.balance) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="invite__invited-friends-empty t1">
          <span>You haven’t invited anyone yet</span>
        </div>
      </div>

      <div class="invite__btn">
        <CommonButton :is-red="true" @click="copyReferralLink">
          <template v-if="copySuccess">
            <span>Referral link copied!</span>
          </template>
          <template v-else>
            <span>Invite a friend</span>
            <span class="invite-icon">
              <IconsInvite />
            </span>
          </template>
        </CommonButton>
      </div>
    </div>
  </TemplateBlock>
</template>

<script lang="ts" setup>
import { store } from "@/store";
import { getPhoto } from "@/utils/getPhoto";

const formatCoins = (coins: number) => {
  const numStr = coins.toString();
  return numStr.replace(/(\d+)(\d{3})$/, "$1, $2");
};

const copySuccess = ref(false);

const copyReferralLink = async () => {
  const referralText = `
  🐼Tap Panda: Играй, Зарабатывай и Получай Вознаграждения - Каждая Игра Открывает Путь к Уникальным Бонусам!\n🎁Начни игру с Tap Panda прямо сейчас и зарабатывай вместе с нами!\nhttps://t.me/tappanda_bot?start=${store.user.profile?.user_id}
  `;

  await navigator.clipboard.writeText(referralText);
  copySuccess.value = true;

  setTimeout(() => {
    copySuccess.value = false;
  }, 2000);
};
</script>

<style lang="scss" scoped>
.invite__title {
  text-align: center;
  margin-bottom: rem(16);
}
.invite__wrap {
  padding-top: rem(70);
  display: flex;
  flex-direction: column;
}
.invite__descr {
  width: rem(288);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: rem(54);
}
.invite__gift {
  display: flex;
  padding: rem(19) rem(30);
  background: var(--c-grey-2);
  border-radius: rem(12);
  gap: rem(20);
  align-items: center;
}
.invite__gift-img {
  flex: 0 0 rem(66);
}
.invite__gift-content {
  flex: 1 1 auto;
}
.invite__gift-coins {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: rem(7);
  margin-top: rem(16);
}
.invite__gift-coins-icon {
  flex: 0 0 rem(20);
  width: rem(20);
  position: relative;
  top: rem(-2);
}
.invite__gift-coins-number {
  font-family: var(--font-700);
  color: #f4b92e;
}
.invite__more-bonuses {
  text-align: center;
  color: var(--c-red);
  letter-spacing: rem(-0.2);
  margin-top: rem(16);
}
.invite__list-friends {
  margin-top: rem(50);
}
.invite__invited-friends-empty {
  margin-top: rem(16);
  height: rem(61);
  border-radius: rem(12);
  background: var(--c-grey-2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.invite__invited-friends-empty span {
  opacity: 0.5;
}
.invite__btn {
  margin-top: rem(14);
}

// friends
.invite__invited-friends-list {
  margin-top: rem(16);
  margin-bottom: rem(10);
}
.invite__invited-friend-item {
  display: flex;
  align-items: center;
}
.invite__invited-friend-item:not(:last-child) {
  margin-bottom: rem(40);
}
.invite__invited-friend-photo {
  flex: 0 0 rem(50);
  margin-right: rem(16);
  height: rem(50);
  border-radius: 100%;
  overflow: hidden;
}
.invite__invited-friend-name {
  opacity: 0.8;
}
.invite__invited-friend-online {
  opacity: 0.2;
  display: flex;
  align-items: center;
  gap: rem(8);
}
.invite__invited-friend-info {
  display: flex;
  justify-content: space-between;
  flex: 1 1 auto;
  border-bottom: 1px solid var(--c-grey-5);
  padding-bottom: rem(16);
  align-items: center;
}
.invite__invited-friend-coins {
  display: flex;
  align-items: center;
  gap: rem(8);
  color: #f4b92e;
}
.invite__invited-friend-coins-icon {
  flex: 0 0 rem(20);
  width: rem(20);
  position: relative;
  top: rem(-2);
}
.invite__invited-friend-info-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: rem(8);
}
</style>
