const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Serve JSON data for menu items
app.get('/menu', (req, res) => {
    const menuData = {
        appetizers: [
            { name: 'Caprese Salad', price: '$8', description: 'Fresh tomatoes, mozzarella, basil' },
            { name: 'Garlic Bread', price: '$5', description: 'Crunchy baguette with garlic butter' },
            { name: 'Bruschetta', price: '$7', description: 'Grilled bread topped with tomatoes, basil, and balsamic glaze' }
        ],
        mainCourses: [
            { name: 'Spaghetti Bolognese', price: '$15', description: 'Traditional pasta with meat sauce' },
            { name: 'Grilled Salmon', price: '$18', description: 'Fresh grilled salmon with lemon butter sauce' },
            { name: 'Chicken Alfredo', price: '$16', description: 'Creamy Alfredo sauce with grilled chicken' }
        ],
        desserts: [
            { name: 'Tiramisu', price: '$7', description: 'Coffee-flavored Italian dessert' },
            { name: 'Cheesecake', price: '$6', description: 'Creamy cheesecake with fruit topping' },
            { name: 'Chocolate Mousse', price: '$6', description: 'Rich and creamy chocolate dessert' }
        ]
    };

    res.json(menuData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
