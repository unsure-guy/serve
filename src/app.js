const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT || 3000


const dir = path.join(__dirname , '../public')
const viewsPath = path.join(__dirname , '../templates/views')
const partialsPath = path.join(__dirname , '../templates/partials')


//register partials 
hbs.registerPartials(partialsPath)

//set engines
app.set('view engine' , 'hbs')
app.set('views' , viewsPath)


//setup static directory to serve
app.use(express.static(dir , {extensions: ['html', 'htm']}))



app.get('', (req , res)=>{
        res.render('index')


    }
)

app.get('/about' , (req , res)=>{
    res.render('about' , {
        num:req.query.num
        
    })
    console.log(req.params)
})

app.post('/help' , (req , res)=>{
    res.render('help' , {
        num:req.query.num
        
    })
    console.log(req.query)
})

app.get('/file' , (req, res)=>{
    res.render('file')
})




app.get('/help' , (req , res)=>{
    res.render('help' )
})
app.get('*' , (req , res)=>{
    res.send('<h1>Error 404. This is a ghost page.</h1>')
})
app.listen(port , ()=>{
    console.log('Server Started')
})