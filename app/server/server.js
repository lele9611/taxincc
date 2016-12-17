import express from 'express'
import path from 'path'

let app = express()
const htmlFile = path.resolve('./dist/index.html')

console.log('Starting to feel better')

app.use('/j', express.static(path.resolve('./dist/j')))

app.get('/', (req, res) => {
	res.sendFile(htmlFile)
})

app.listen(3000, () => console.log('magic appening here on 3000'))