const axios = require("axios");
const { getUsers } = require("../helpers");

const fetchNews = async (preference) => {
  const apiKey = process.env.NEWS_API_KEY;
  const baseUrl = "https://newsapi.org/v2/top-headlines";
  const response = await axios.get(baseUrl, {
    params: {
      apiKey,
      category: preference,
      pageSize: 5,
      page: 1,
    },
  });

  if (response.data.status === "ok") return response.data.articles;
  else return [];
};

exports.getNews = async (req, res) => {
  try {
    const { email } = req.user;
    const users = getUsers();
    const user = users.find((user) => user.email == email);
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    let data = [];
    const fetchPromises = user?.preferences?.map(async (preference) => {
      const response = await fetchNews(preference);
      data.push(...response);
    });

    Promise.all(fetchPromises).then(() => {
      res.json({ data });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
};
