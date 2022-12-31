import express from "express"
import axios from "axios"
import cors from "cors"
import "dotenv/config"

const app = express()
const PORT = process.env.PORT || 5000
//const target = document.getElementById('submit')

app.use(cors)

var diet = ['']
var health = ['vegan']

// target.addEventListener('click', (e) =>{
//     e.preventDefault()
//     fetchAPI()
// })

app.get('/recipes/chicken', async (req, res) =>{
    console.log('in')
    const response = await axios.get(`https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)
    console.log(response.data)
    res.json(response.data)
})


// async function fetchAPI() {
//     const response = await axios.get(`https://api.edamam.com/search?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&health=${health}`)
//     console.log(response.data)
// }

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})
