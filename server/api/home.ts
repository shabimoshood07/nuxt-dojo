export default defineEventHandler(async (event) => {
    // Qurery parameters
  
    const { name } = getQuery(event);
  
    const body = await readBody(event);
    console.log("body", body);
    return {
      message: "me",
      name,
      body,
    };
  });
  