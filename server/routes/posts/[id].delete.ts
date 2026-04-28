export default defineEventHandler(async (event) => {
	const params = getRouterParams(event)

	await prisma.post.delete({ where: { id: params.id } })

	return true
})
