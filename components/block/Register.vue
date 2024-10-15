<template>
  <TemplateBlock class="register-block">
    <CommonBack />

    <div class="register__wrap">
      <div class="register__title h2">Hello! Register to continue a game</div>

			<Form
        class="register__form"
        :validation-schema="formSchema"
        @submit="onSubmit"
      >
        <div class="form__fields">
					<CommonInput
            class="form__field"
            placeholder="Enter your first name"
            type="text"
            name="name"
          />

					<CommonInput
            class="form__field"
            placeholder="Enter your last name"
            type="text"
            name="last_name"
          />

          <CommonInput
            class="form__field"
            placeholder="Enter your phone number"
            type="text"
            name="phone"
          />

					<CommonInput
            class="form__field"
            placeholder="Enter your password"
            type="text"
            name="password"
          />

					<CommonInput
            class="form__field"
            placeholder="Confirm password"
            type="text"
            name="confirm_password"
          />
        </div>

				<div class="form__btn">
					<CommonButton type="submit" :is-red="true">
						Register
					</CommonButton>
				</div>

				<div class="form__question">
					<CommonAccountExistQuestion text_1="Already have an account?" text_2="Login Now" />
				</div>
      </Form>
    </div>
  </TemplateBlock>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import * as Yup from "yup";
import type { RegisterValues } from "@/types/forms";

const formSchema = Yup.object().shape({
	name: Yup.string().required("Is a required field"),
	last_name: Yup.string().required("Is a required field"),
  phone: Yup.string()
    .required("Is a required field")
    .min(10, "Must be at least 10 characters")
    .max(15, "Must be at most 15 characters"),
  password: Yup.string()
    .required("Is a required field")
    .min(6, "Password must be at least 6 characters"),
	confirm_password: Yup.string()
    .required("Is a required field")
    .oneOf([Yup.ref('password')], "Password do not match!"),
});

const onSubmit = async (values: RegisterValues) => {
  console.log(values);
};
</script>

<style lang="scss" scoped>
.register__title {
  text-align: center;
	margin-bottom: rem(36);
}
.register__wrap {
  padding-top: rem(70);
  display: flex;
  flex-direction: column;
}
.register__form {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
</style>
