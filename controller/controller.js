const axios = require('axios');

const getNews = async (req, res) => {
    try {
        const { page, category } = req.query;
        const response = await axios.get(
            "https://newsapi.org/v2/top-headlines",
            {
                params: {
                    country: "us",
                    category: category || "general",
                    page: page || 1,
                    pageSize: 10,
                    apiKey: process.env.API_KEY
                }
            }
        );
        return res.json({
            success: true,
            articles: response.data.articles,
            totalResults: response.data.totalResults
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to fetch news"
        });
        console.log(error)
    }
};

module.exports = getNews