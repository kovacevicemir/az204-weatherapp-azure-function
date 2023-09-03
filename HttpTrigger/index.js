module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  // Set the Content-Type header to indicate JSON response
  context.res = {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      azurefunction: "returning some dumb data from azure function",
    },
  };
};
