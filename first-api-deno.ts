import { Application, Router } from "https://deno.land/x/oak/mod.ts";
// Model
interface City {
    name: string,
    uf: string,
    country: string,
    population: string,
    mayor: string,
    hdi: number,
    enabledOnDisplay: boolean,
}

// Data
let cities: Array<City> = [
    {
        name: "São Paulo",
        uf: "SP",
        country: 'Brazil',
        population: '12,18 millions',
        mayor: 'João Doria',
        hdi: 0.783,
        enabledOnDisplay: true,
    },
    
    {
        name: 'New York',
        uf: 'NY',
        country: 'USA',
        population: '8,39 millions',
        mayor: 'Bill de Blasio',
        hdi: 0.941,
        enabledOnDisplay: true,
    },
    {
        name: 'Hong Kong',
        uf: "HK",
        country: 'China',
        population: '7,45 millions',
        mayor: 'Carrie Lam',
        hdi: 0.910,
        enabledOnDisplay: true,
    },
];



// Controllers

// Get all cities      /cities
export const getCities = ({ response }: { response: any }) => {
    response.body = cities;
}

// Post new city      /create
export const addCities = async ({ request, response }: { request: any; response: any }) => {
    const body = request.body();
    const city: City = body.value;
    
    cities.push(city);
    response.body = { cityAdd: "Success" };
    response.status = 200;
    
}



// Server files
const router = new Router();
const app = new Application();
const PORT = 8000;

router
.get('/cities', getCities)
.get('/create', addCities)

app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Starting at: http://localhost:${PORT}`);
await app.listen({ port: PORT });