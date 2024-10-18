export default defineEventHandler(async (event) => {
  try {

		const body = await readBody(event)

		const { API } = useRuntimeConfig().public

    const response = await $fetch(`${API}/api/users/info/edit/${body.user_id}`, {
      method: "POST",
			headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: Number(body.age) || "",
        country: body.country || "",
        region: body.region || "",
      }),
    })

    return response
  } catch (error) {
    return error
  }
})
