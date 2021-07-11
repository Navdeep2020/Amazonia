import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
    name: 'Navdeep',
    email: 'example@gmail.com',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: true,
    },
    
    {
      name: 'King',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
      },
  ],
    products: [
        {
      
          name: 'Nike Slim Shirt',
          category: 'Shirts',
          image: '/images/p1.jpg',
          price: 120,
          countInStock:10,
          brand: 'Nike',
          rating: 4.5,
          numReviews: 12,
          description: 'high quality product',
        },
        {
           
            name: 'Addidas Slim Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 140,
            countInStock:18,
            brand: 'Addidas',
            rating: 4.2,
            numReviews: 17,
            description: 'high quality product',
          },
          {
           
            name: 'H&M Slim Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 110,
            countInStock:14,
            brand: 'H&M',
            rating: 4.2,
            numReviews: 12,
            description: 'high quality product',
          },
          {
           
            name: 'Puma pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 200,
            countInStock:50,
            brand: 'Flying',
            rating: 4.9,
            numReviews: 19,
            description: 'high quality product',
          },
          {
           
            name: 'Roadstar slim pant',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 70,
            countInStock:0,
            brand: 'Roadstar',
            rating: 4.6,
            numReviews: 10,
            description: 'high quality product',
          },
    ],
}

export default data;