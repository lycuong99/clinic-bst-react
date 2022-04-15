import bstServer from "apis/btsServer";

const verify = async (token: string) => {
  try {
    const response = await bstServer.post(
      "/auth/verify",
      {
        token: token,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
    
        },
      }
    );
    console.log("Verify Success", response);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Server Verify Error");
  }
};

export { verify };
