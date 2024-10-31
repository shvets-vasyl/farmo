<template>
  <TemplateBlock class="profile-block">
    <CommonBack @click.native="store.show_block = 'main'" />

    <div class="profile__wrap">
      <div class="profile__ava">
        <div class="profile__ava-media">
          <img
						v-if="store.user.profile?.photo"
            :src="store.user.profile?.photo"
            class="common-media"
            alt="ava photo"
          />
        </div>
      </div>

      <div class="profile__name">
        {{ store.user.profile?.first_name }}
      </div>
      <div v-if="store.user.profile?.last_name" class="profile__last-name h5">
        {{ store.user.profile?.last_name }}
      </div>

      <form class="profile__form" @submit.prevent="onSubmit">
        <div class="form__fields">
          <CommonInput
            class="form__field"
            name="phone"
            label="Phone Number"
            :readonly="true"
            v-model="formValues.phone"
          />

          <CommonInput
            class="form__field"
            name="age"
            label="Your Age"
            v-model="formValues.age"
          />

          <CommonInput
            class="form__field"
            :placeholder="formValues.country"
            name="country"
            label="Country"
            v-model="formValues.country"
          />

          <CommonInput
            class="form__field"
            :placeholder="formValues.region"
            name="region"
            label="Region"
            v-model="formValues.region"
          />
        </div>

        <div class="form__btn">
          <CommonButton type="submit" :is-red="true"> Save </CommonButton>
        </div>

        <div class="form__error">
          <CommonMessage
            v-if="messages.validation"
            :text="messages.validation"
            :status="messages.status"
          />
        </div>
      </form>
    </div>

    <div class="profile__wallet">
      <div class="profile__wallet-title t1">Wallet</div>
      <div class="profile__wallet-options">
        <CommonTonButton />
        <CommonConnectWalletButton />
      </div>
    </div>

		<form v-if="!store.user.card?.card_number || editCardInfo" class="card__form" @submit.prevent="onSubmitCard">
			<div class="form__fields">
				<CommonInput
					ref="cardNumberInput"
					class="form__field"
					placeholder="XXXX XXXX XXXX XXXX"
					name="cardNumber"
					label="Card number"
					:with-icon="true"
					v-model="formCardValues.cardNumber"
				>
					<IconsCard />
				</CommonInput>

				<CommonInput
					ref="expiryInput"
					class="form__field"
					placeholder="MM/YY"
					name="expirationDate"
					label="Expiration date"
					:with-icon="true"
					v-model="formCardValues.expirationDate"
				>
					<IconsCalendar />
				</CommonInput>

				<CommonInput
					ref="cvvInput"
					class="form__field"
					placeholder="•••"
					name="cvv"
					label="CVV"
					:with-icon="true"
					v-model="formCardValues.cvv"
				>
					<IconsInfo />
				</CommonInput>

			</div>

			<div class="form__btn">
				<CommonButton type="submit" :is-red="true"> Save card </CommonButton>
			</div>

			<div class="form__error">
				<CommonMessage
					v-if="messagesCard.validation"
					:text="messagesCard.validation"
					:status="messagesCard.status"
				/>
			</div>
		</form>

		<div v-if="store.user.card?.card_number && !editCardInfo" class="payment-method">
			<div class="payment-method__title t1">Payment method</div>
			<div class="payment-method__wrap">
				<div class="payment-method__left">
					<div class="payment-method__item">
						<IconsCard />
						<span>•••• •••• •••• {{ store.user.card?.card_number.slice(-4) }}</span>
					</div>
					<div class="payment-method__item">
						<IconsCalendar />
						<span>{{ store.user.card?.card_date }}</span>
					</div>
					<div class="payment-method__item">
						<span>CVV</span>
						<span>•••</span>
					</div>
				</div>
				<div class="payment-method__right">
					<button @click="editCardInfo = true" class="payment-method__change t1">Change</button>
				</div>
			</div>
		</div>

    <div class="profile__inst">
      <!-- <CommonConnectSocial /> -->
    </div>
  </TemplateBlock>
</template>

<script lang="ts" setup>
import { store } from "@/store";
import { paths } from "@/utils/api/paths";
import Cleave from 'cleave.js'
import type { ApiResponseInterface } from "@/types/common";

const { refreshData } = useUserData();

const cardNumberInput = ref()
const expiryInput = ref()
const cvvInput = ref()

const editCardInfo = ref(false)


onMounted(() => {
	if (!store.user.card?.card_number) {
		initCardMasks()
	}
})

watch(() => editCardInfo.value, (value) => {
	if (value) {
		nextTick(() => {
			initCardMasks()
		})
	}
})
const messages = reactive({
  validation: "",
  status: "",
});

const messagesCard = reactive({
  validation: "",
  status: "",
});

const formValues = reactive({
  phone: store.user.profile?.phone_number || "",
  age: store.user.profile?.age !== -1 ? store.user.profile?.age + "" : "",
  country: store.user.profile?.country || "",
  region: store.user.profile?.region || "",
});

const formCardValues = reactive({
  cardNumber: "",
  expirationDate: "",
  cvv: "",
});

const initCardMasks = () => {
	new Cleave(cardNumberInput.value.$el.querySelector(".input"), {
		blocks: [4, 4, 4, 4],
		numericOnly: true,
		delimiter: " ",
	})

	new Cleave(expiryInput.value.$el.querySelector(".input"), {
		date: true,
		datePattern: ['m', 'y']
	})

	new Cleave(cvvInput.value.$el.querySelector(".input"), {
		numericOnly: true,
		blocks: [3]
	})
}

const onSubmit = async () => {
  try {
    const response = await $fetch<ApiResponseInterface>("/api/update-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: `${paths.user_edit}/${store.user.profile?.user_id}`,
        age: Number(formValues.age) || "",
        country: formValues.country || "",
        region: formValues.region || "",
      }),
    });

    messages.status = response.status;

    if (response.message) {
      messages.validation = response.message;
    } else {
      messages.validation = "Profile updated successfully";
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const onSubmitCard = async () => {
	const cardNumber = cardNumberInput.value.$el.querySelector(".input").value.replace(/\s+/g, "")
	const cardDate = expiryInput.value.$el.querySelector(".input").value
	const cardCvv = cvvInput.value.$el.querySelector(".input").value

  try {
    const response = await $fetch<ApiResponseInterface>("/api/update-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: `${paths.add_card}/${store.user.profile?.user_id}`,
        card_number: cardNumber,
        card_date: cardDate,
        card_cvv: cardCvv,
      }),
    });

    messagesCard.status = response.status;

    if (response.message) {
      messagesCard.validation = response.message;
    } else {
      messagesCard.validation = "Card added successfully";

			await refreshData({ card: true })

			editCardInfo.value = false
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
</script>

<style lang="scss" scoped>
.profile__wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: rem(34);
  flex-direction: column;
}
.profile__ava {
  width: rem(104);
  flex: 0 0 rem(104);
  height: rem(104);
  border-radius: 100%;
  border: 1px solid var(--c-grey-5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: rem(20);
}
.profile__ava-media {
  height: 100%;
  overflow: hidden;
  border-radius: 100%;
}
.profile__name {
  font-size: rem(20);
  font-family: var(--font-700);
  text-align: center;
}
.profile__last-name {
  text-align: center;
  opacity: 0.7;
  margin-top: rem(4);
}
.profile__form {
  width: 100%;
  margin-top: rem(32);
}
.form__btn {
  padding-left: rem(26);
  padding-right: rem(26);
  margin-top: rem(24);
}
.profile__form .form__field:not(:last-child) {
  margin-bottom: rem(20);
}
.profile__wallet,
.profile__inst {
  padding-left: rem(26);
  padding-right: rem(26);
  margin-top: rem(32);
}
.profile__wallet-options {
  margin-top: rem(24);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(24);
}
.form__error {
  padding-left: rem(26);
  padding-right: rem(26);
  margin-top: rem(8);
}
.card__form {
	margin-top: rem(24);

}
.card__form .form__fields {
	display: grid;
	grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
	column-gap: rem(24);
	row-gap: rem(14);
}
.card__form .form__field:nth-child(1) {
  grid-column: 1 / -1;
}
.card__form .form__field:nth-child(2),
.card__form .form__field:nth-child(3) {
  grid-column: span 1;
}

// payment
.payment-method {
	padding-left: rem(26);
  padding-right: rem(26);
	margin-top: rem(32);
}
.payment-method__change {
	border-bottom: 1px solid var(--c-red);
}
.payment-method__item {
	display: flex;
	align-items: center;
	pointer-events: none;
	opacity: 0.5;
	gap: rem(8);
}
.payment-method__title {
	margin-bottom: rem(24);
}
.payment-method__right {
	display: flex;
	justify-content: flex-end;
}
.payment-method__left {
	display: grid;
	grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
	row-gap: rem(16);
}
.payment-method__item:nth-child(1) {
  grid-column: 1 / -1;
}
.payment-method__item:nth-child(2),
.payment-method__item:nth-child(3) {
  grid-column: span 1;
}
.payment-method__item:nth-child(3) {
	justify-content: flex-end;
}
.payment-method__wrap {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: rem(24);
	align-items: flex-end;
}
</style>
