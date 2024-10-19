export default defineEventHandler(async (event) => {
  try {

		const body = await readBody(event)

		const { API } = useRuntimeConfig().public

    const response = await $fetch(`${API}/api/game/tap`, {
      method: "POST",
			headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: body.user_id,
				clicks_days: 2,
      }),
    })

    return response
  } catch (error) {
    return error
  }
})
