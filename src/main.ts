import './style.css';

import Alpine from 'alpinejs';
Alpine.start();

const URL = "http://localhost:3000";
const AuthToken = "as33dienWJawEgm!@44SDeuasrl48zdsl!_"; // Ideally you'd want to get this token from an auth server, but hardcoded for simplicity in this challenge

const headers = new Headers({
    "Authorization": `Bearer ${AuthToken}`
});

export async function getAllUsers() {
    const response = await fetch(`${URL}/users`, { headers });
    return await response.json();
}

export async function getAllOrders() {
    const response = await fetch(`${URL}/orders`, { headers });
    return await response.json();
}

export async function getOrdersFilteredByUserId(userId: number) {
    const response = await fetch(`${URL}/orders?userId=${userId}`, { headers });
    return await response.json();
}