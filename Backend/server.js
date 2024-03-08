import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bcrypt from 'bcrypt';

const app = express();
app.use(cors());
app.use(express.json());

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: 'partnerportal',
// });

const connection = mysql.createConnection({
    host: 'ls-b120627a54c35ec7aa532f95056b0e3ba1d5b806.cx8km2ky23qf.ap-south-1.rds.amazonaws.com',
    user: 'dbmasteruser',
    password: 'IndoWings',
    database: 'partnerportal'
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database: ', err.stack);
      return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId);
  });

// Login Partner
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(username); 
    console.log(password);
    const sql = 'SELECT * FROM partner WHERE username = ?';
    db.query(sql, [username], async (err, result) => {
        
        const user = result[0];  
        console.log(user.username);
        console.log(user.password);
        console.log(user.category);
        if (err) {
            return res.status(500).json({ message: 'Error in server' });
        }

        if (result.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        const isValidPassword = password === user.password;
        console.log(isValidPassword);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        return res.status(200).json({ message: 'Login successful', username: user.username });
    });
});

// Partner Handling

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM partner';
    db.query(sql,(err,result)=>{
        if(err) return res.json({Message: "Error in server"});
        return res.json(result);
        
    })
});

app.post('/partner', (req, res) => {
    const sql = "INSERT INTO partner (`username`, `password`,`category`,`commission`) VALUES (?)";
    console.log(req.body)
    const values = [
        req.body.username,
        req.body.password,
        req.body.category,
        req.body.commission
    ]
    db.query(sql,[values], (err,result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
});

app.get('/read/:id', (req, res) => {
    const sql = 'SELECT * FROM partner WHERE id =?';
    const id = req.params.id;
    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({Message: "Error in server"});
        return res.json(result);
    })
});

app.put('/update/:id', (req, res) => {
    const sql = 'UPDATE partner SET `username`=?, `password`=?, `category`=?, `commission`=? WHERE id =?';
    const id = req.params.id;
    db.query(sql,[req.body.username, req.body.password,req.body.category, req.body.commission, id], (err,result)=>{
        if(err) return res.json({Message: "Error in server"});
        return res.json(result);
    })
});

app.delete('/delete/:id',(req,res)=>{
    const sql = 'DELETE FROM partner WHERE id =?';
    const id = req.params.id;
    db.query(sql,[id], (err,result)=>{
        if(err) return res.json({Message: "Error in server"});
        return res.json(result);
    })
})

// Products Handling

app.get('/products_create', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql,(err,result)=>{
        if(err) return res.json({Message: "Error in server"});
        return res.json(result);
        
    })
});

app.get('/products_filter', (req, res) => {
    const userCategory = req.query.category; 
    console.log(userCategory)
    const sql = 'SELECT * FROM products WHERE category = ?'; 
    db.query(sql, [userCategory], (err, result) => {
        if (err) return res.json({ message: "Error in server" });
        return res.json(result);
    });
});


// app.get('/products_filter', (req, res) => {
//     const partnerCategory = partner.category; 
//     console.log(user.category);
//     const sql = 'SELECT * FROM products WHERE category = partnerCategory';
//     db.query(sql, [partnerCategory], (err, result) => {
//         if (err) {
//             return res.status(500).json({ Message: "Error in server" });
//         }
//         return res.json(result);
//     });
// });


app.post('/products', (req, res) => {
    const sql = "INSERT INTO products (`name`, `brochure`,`stock`,`retail_price`, `partner_price`,`category`) VALUES (?)";
    console.log(req.body)
    const values = [
        req.body.name,
        req.body.brochure,
        req.body.stock,
        req.body.retail_price,
        req.body.partner_price,
        req.body.category
    ]
    db.query(sql,[values], (err,result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
});

app.get('/read_products/:product_id', (req, res) => {
    const sql = 'SELECT * FROM products WHERE product_id =?';
    const id = req.params.product_id;
    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({Message: "Error in server"});
        return res.json(result);
    })
});

app.put('/update_products/:product_id', (req, res) => {
    const sql = 'UPDATE products SET `name`=?, `brochure`=?, `stock`=?, `retail_price`=?, `partner_price`=?, `category`=? WHERE product_id =?';
    const id = req.params.product_id;
    const { name, brochure, stock, retail_price, partner_price, category } = req.body; 
    db.query(sql, [name, brochure, stock, retail_price, partner_price, category, id], (err, result) => {
        if (err) {
            console.error('Error updating product:', err);
            return res.status(500).json({ Message: "Error in server" }); 
        }
        return res.json(result); 
    });
});

app.delete('/delete_products/:product_id',(req,res)=>{
    const sql = 'DELETE FROM products WHERE product_id =?';
    const id = req.params.product_id;
    db.query(sql,[id], (err,result)=>{
        if(err) return res.json({Message: "Error in server"});
        return res.json(result);
    })
})


app.listen(8081, () => {
    console.log("Listening: server is live");
});
