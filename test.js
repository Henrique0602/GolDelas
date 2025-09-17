const axios = require("axios");
(async () => {
  try {
    const fixtureId = "871464";
    const fixtureRes = await axios.get("https://v3.football.api-sports.io/fixtures", {
      headers: { "x-apisports-key": "21ec046021d8390f3aada86d4a25005f" },
      params: { id: fixtureId }
    });
    console.log("fixture length", fixtureRes.data.response.length);
  } catch (err) {
    console.error(err.response?.status, err.response?.data || err.message);
  }
})();
