export default defineEventHandler(async (event) => {
    const { id } = event.context.params as { id: string }
    // reading .env files
    const { myNum } = useRuntimeConfig()
    return { myNum }
})