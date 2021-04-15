import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://saif711:zarrai711@ecommerce-app.xxkpw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'test'
}