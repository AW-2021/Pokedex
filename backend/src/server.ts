import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
    origin: '*'
}));
//app.use(cors());
app.use(express.json());

app.get('/api/cards', async (req, res) => {
    const url = "https://api.pokemontcg.io/v2/cards?q=supertype:pokemon types:fire";

    try {
        const response = await fetch(url, {
            headers: {
                'X-Api-Key': process.env.POKEMONTCG_API_KEY!
            }
        });

        if (!response.ok) {
            throw new Error(`Pokemon TCG API error: ${response.status}`);
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch card data' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server running on port: ${PORT}`);
});