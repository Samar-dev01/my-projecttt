const products = [{ id: 1, name: "iphone 15", price: 999 },
{ id: 2, name: "Samsung Galaxy A36", price: 799 },
{id: 3, name: 'Redmi note 12 pro', price: 200}
];

products.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${p.id}</td>
    <td>${p.name}</td>
    <td>${p.price}</td>
`;
const tbody = document.getElementById('table-body');
tbody.appendChild(tr);
});



const shoppingCart = {
    cart: [],
    
    addProduct: function (productId, quantity) {
        if(products.length ===0) {
            alert(`Mahsulot mavjud emas.`);
            return;
        }

        const product = products.find(p => p.id === productId);
        const savat = this.cart.find(p => p.id === productId);
        
        if (quantity < 1) {
            alert(`quantity birdan kichik bo'lishi mumkin emas`);
            return;
        }
        else if(savat) {
            savat.quantity += quantity;
        }

        else {
            this.cart.push({ ...product, quantity: quantity });
        }
    },

    removeProduct: function (productId) {
        if(products.length ===0) {
            alert(`Mahsulot mavjud emas.`);
            return;
        };
        this.cart = this.cart.filter(p => p.id !== productId);
        
        if (this.cart) {
            alert(`Mahsulot o'chirildi`);
            return;
        }
    },

    viewCart: function () {
        if(products.length ===0) {
            alert(`Mahsulot mavjud emas.`);
            return;
        }
        console.log(this.cart);
    },
    getTotalPrice: function () {
        if(products.length ===0) {
            alert(`Mahsulot mavjud emas.`);
            return;
        }
        const yigindi = this.cart.reduce((sum, element) => sum + element.price * element.quantity, 0);
        console.log(yigindi);
    },
    clearCart: function () {
        this.cart.length === 0;
        console.log(this.cart);
    }
}
//shoppingCart.addProduct(3,1);
/* shoppingCart.removeProduct(2);    
console.log(shoppingCart.cart); */

// shoppingCart.viewCart();

// shoppingCart.getTotalPrice();
//shoppingCart.clearCart();




function myFunction() {
    const id = document.getElementById('mahsulot-id');
    const kiritish1 = Number(id.value);
    const soni = document.getElementById('mahsulot-soni');
    const kiritish2 = Number(soni.value);

    const tbody2 = document.getElementById('t-body_s');
    tbody2.innerHTML = '';

    shoppingCart.addProduct(kiritish1,kiritish2);
    shoppingCart.cart.forEach(d => {
    const tr = document.createElement('tr');
    tr.innerHTML = 
    `<td>${d.id}</td>
    <td>${d.name}</td>
    <td>${d.price}</td>
    <td>${d.quantity}</td>
    `;
    const tbody2 = document.getElementById('t-body_s'); 
    tbody2.appendChild(tr);
});
    
    console.log(shoppingCart.cart);
}


function myFunction2() {
    const id2 = document.getElementById('mahsulot-och-id');
    const qiymatber = Number(id2.value);
    shoppingCart.removeProduct(qiymatber);

    const tbody2 = document.getElementById('t-body_s');
    tbody2.innerHTML = '';

    shoppingCart.cart.forEach(d => {
    const tr = document.createElement('tr');
    tr.innerHTML = 
    `<td>${d.id}</td>
    <td>${d.name}</td>
    <td>${d.price}</td>
    <td>${d.quantity}</td>
    `;
    const tbody2 = document.getElementById('t-body_s'); 
    tbody2.appendChild(tr);
});
    
}

function myFunction3() {
    shoppingCart.clearCart();

    const tbody2 = document.getElementById('t-body_s');
    tbody2.innerHTML = '';
}


const btn = document.getElementById('btn');
btn.addEventListener('click', myFunction);

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', myFunction2);

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', myFunction3);






