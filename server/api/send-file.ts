/* eslint-disable @typescript-eslint/no-explicit-any */
export default defineEventHandler(async (event) => {
  try {
    const body = await readFormData(event)

		const { API } = useRuntimeConfig().public;

    const formData = new FormData()

    const file = body.get("document")
    formData.append("document", file!)

    const response = await fetch(API + "/api/users/user_photo/992580016", {
      method: "POST",
      body: formData,
    })

    return response
  } catch (error) {
    return error;
  }
})
