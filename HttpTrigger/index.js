module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  return {
    status: 200,
    jsonBody: {
        key: "returning some dumb data from azure function"
    }
};
};
