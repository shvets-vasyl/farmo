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
            <span class="t1 invite__gift-coins-number">+5,000</span>
            <span class="t1 invite__gift-coins-text">
              for you and your friend
            </span>
          </div>
        </div>
      </div>

      <div class="invite__more-bonuses h4">More bonuses</div>

      <div class="invite__list-friends">
        <div class="h5">List of your friends</div>

        <div v-if="friends.length" class="invite__invited-friends-list">
          <div
            v-for="(item, i) in friends"
            :key="i"
            class="invite__invited-friend-item"
          >
            <div class="invite__invited-friend-photo">
              <img
                v-if="item.photo"
                class="inner-media"
                :src="item.photo"
                alt="friend photo"
              />
              <span v-else>{{ item.name[0] }}</span>
            </div>

            <div class="invite__invited-friend-info">
              <div class="invite__invited-friend-info-left">
                <div class="invite__invited-friend-name t1">
                  {{ item.name }}
                </div>
                <div class="invite__invited-friend-wallet"></div>
              </div>
              <div class="invite__invited-friend-info-right">
                <div class="invite__invited-friend-online t1">
                  {{ item.online ? "Online" : "Offline" }}
                  <IconsCheckbox v-if="item.online" />
                </div>
								<div class="invite__invited-friend-coins">
									<div class="invite__invited-friend-coins-icon">
										<img src="/coin.png" draggable="false" alt="" />
									</div>
									<div class="invite__invited-friend-coins-number t1">
										{{ formatCoins(item.coins) }}
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
        <CommonButton :is-red="true">
          <span>Invite a friend</span>
          <span class="invite-icon">
            <IconsInvite />
          </span>
        </CommonButton>
      </div>
    </div>
  </TemplateBlock>
</template>

<script lang="ts" setup>
const friends = [
  {
    name: "Friend Name",
    photo: "/ava.jpeg",
    connected_wallet: "ton",
    online: true,
    coins: 254000,
  },
  {
    name: "Friend Name",
    photo: "",
    connected_wallet: "ethereum",
    online: false,
    coins: 25000,
  },
];

const formatCoins = (coins: number) => {
	const numStr = coins.toString()
	return numStr.replace(/(\d+)(\d{3})$/, '$1, $2')
}
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
.invite__invited-friend-photo span {
  font-size: rem(20);
  font-family: var(--font-700);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: var(--c-pink);
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
}
.invite__invited-friend-info-right {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: rem(4);
}
</style>
