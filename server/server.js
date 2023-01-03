import express from "express"
import axios from "axios"
import cors from "cors"
import "dotenv/config"

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/recipes/:diet', async (req, res) => {
    const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&ingr=0-5&diet=${req.params.diet}&random=true`
    )
    console.log(response.data.hits)
    res.json(response.data.hits)
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})