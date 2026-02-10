let order = [];
let total = 0;
let orderId = "ORD-" + Math.floor(Math.random() * 100000);

const restaurants = {
    "KFC Pakistan": [
        ["Zinger Burger", 550],
        ["Mighty Zinger", 750],
        ["Twister", 420],
        ["Hot Wings", 390],
        ["Krunch Burger", 320],
        ["Fries", 250]
    ],
    "McDonald's": [
        ["Big Mac", 600],
        ["McChicken", 550],
        ["McRoyal", 650],
        ["Nuggets", 450],
        ["Fries", 250],
        ["McFlurry", 300]
    ],
    "Burger Lab": [
        ["Doppler", 850],
        ["Firehouse", 720],
        ["Atomic", 780],
        ["Smash Burger", 690],
        ["Loaded Fries", 420],
        ["Milkshake", 350]
    ],
    "Student Biryani": [
        ["Chicken Biryani", 320],
        ["Beef Biryani", 420],
        ["Qorma", 380],
        ["Kabab", 250],
        ["Raita", 80],
        ["Kheer", 150]
    ],
    "Kolachi": [
        ["Chicken Karahi", 1400],
        ["BBQ Platter", 2100],
        ["Handi", 1350],
        ["Reshmi Kabab", 850],
        ["Daal", 420],
        ["Naan", 60]
    ],
    "Al-Habib Burns Road": [
        ["Nihari", 450],
        ["Maghaz Fry", 650],
        ["Chicken Korma", 480],
        ["Biryani", 350],
        ["Sheermal", 70],
        ["Kabab", 300]
    ],
    "Cafe Student": [
        ["Beef Biryani", 400],
        ["Chicken Karahi", 1200],
        ["Daal Fry", 350],
        ["BBQ", 900],
        ["Roti", 40],
        ["Kheer", 150]
    ],
    "Burns Road Delight": [
        ["Nalli Nihari", 550],
        ["Haleem", 380],
        ["Qorma", 450],
        ["Biryani", 350],
        ["Kabab", 300],
        ["Kulfi", 120]
    ],
    "Pizza Hut": [
        ["Pepperoni Pizza", 1200],
        ["Fajita Pizza", 1350],
        ["Cheese Pizza", 1100],
        ["Pasta", 850],
        ["Wings", 650],
        ["Garlic Bread", 450]
    ],
    "Savour Foods": [
        ["Chicken Pulao", 450],
        ["Beef Pulao", 550],
        ["Raita", 80],
        ["Salad", 60],
        ["Qorma", 380],
        ["Zarda", 150]
    ]
};

/* LOAD RESTAURANTS */
const bar = document.getElementById("restaurants");
Object.keys(restaurants).forEach(r => {
    bar.innerHTML += `<button onclick="loadMenu('${r}')">${r}</button>`;
});

function loadMenu(name) {
    document.getElementById("restaurantName").innerText = name;
    const menu = document.getElementById("menu");
    menu.innerHTML = "";

    restaurants[name].forEach(item => {
        menu.innerHTML += `
      <div class="food">
        <b>${item[0]}</b>
        <p>Rs ${item[1]}</p>
        <button onclick="addItem('${item[0]}', ${item[1]})">Add</button>
      </div>
    `;
    });
}

function addItem(name, price) {
    order.push({ name, price });
    total += price;
    renderOrder();
}

function renderOrder() {
    const list = document.getElementById("orderList");
    list.innerHTML = "";
    order.forEach(i => list.innerHTML += `<li>${i.name} - Rs ${i.price}</li>`);
    document.getElementById("total").innerText = total;
}

function placeOrder() {
    const owner = document.getElementById("owner").value;
    if (!owner || order.length === 0) {
        alert("Enter owner name and add items");
        return;
    }

    const record = {
        orderId,
        owner,
        note: document.getElementById("note").value,
        items: order,
        total,
        date: new Date().toISOString()
    };

    const saved = JSON.parse(localStorage.getItem("orders")) || [];
    saved.push(record);
    localStorage.setItem("orders", JSON.stringify(saved));

    document.getElementById("msg").innerText = "✅ Order placed successfully!";
    order = [];
    total = 0;
    renderOrder();
}
