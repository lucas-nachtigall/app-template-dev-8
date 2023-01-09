exports.handler = async (event) => {
    console.log("aaa");
    console.log("aaa");
    await console.log("aaa");
    await console.error("aaa");
    console.error("aaa");
    console.error("aaa");
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello World!!'),
    };
    return response;
};
