import axios from "axios";

const home = async (req, res) => {
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");

    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    console.log(error);
  }
};

export { home };
