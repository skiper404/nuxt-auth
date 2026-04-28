export default defineEventHandler(async (event) => {
	const session = await getUserSession(event)
	const body = await readBody(event)

	if (!session.user) {
		throw createError({ statusCode: 400, statusMessage: 'Not Found' })
	}

	const user = await prisma.user.update({
		where: { id: session.user.id },
		data: { plan: body.plan },
	})

	await setUserSession(event, { user })

	return true
})
