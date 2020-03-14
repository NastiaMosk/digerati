const express = require('express')
const sendMail = require('./mail.js')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.post('/email', (req, res) => {
    const { subject, email, text } = req.body;
    console.log('Data: ', req.body)
    
    sendMail(email, subject, text, function(err, data) {
        if (err) {
            res.status(500).json({message :'Internal Error'})
        } else {
            res.json({message: 'Email sent!!'})
        }
    })
    

})

//app.get('/contact',(req,res) => {
//    res.sendFile(path.join(__dirname, 'views', 'pages', 'contact.ejs'))
//})

app.use(express.static(path.join(__dirname, 'views')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.get('/menus', (req, res) => res.render('pages/menus'))
app.get('/contact', (req, res) => res.render('pages/contact'))
app.get('/about', (req, res) => res.render('pages/about'))    



app.listen(PORT, () => console.log(`Listerning on ${ PORT }`))
