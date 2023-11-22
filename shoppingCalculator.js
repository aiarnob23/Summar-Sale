var total_price = 0;
const coupon_apply_btn = document.getElementById('coupon-btn');
const make_purchase_btn = document.getElementById('purchase-btn');


function addToCart(target) {
    const price = parseFloat(target.querySelector('.price').innerText);
    const product_name = target.querySelector('.product-name').innerText;
    updateCart(product_name, price);
}


function updateCart(product_name, price) {
    total_price = parseFloat(document.getElementById('total-price').innerText);
    total_price += price;
    if (total_price >= 200) {
       
        coupon_apply_btn.removeAttribute('disabled');
        coupon_apply_btn.style.backgroundColor='#E527B2';

    }
    document.getElementById('total-price').innerText = total_price.toFixed(2);
    document.getElementById('total').innerText = total_price.toFixed(2);
    make_purchase_btn.removeAttribute('disabled');
    make_purchase_btn.style.backgroundColor='#E527B2';
    const selected_product_field = document.getElementById('selected-product-list');
    const count = selected_product_field.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${product_name}`;
    selected_product_field.appendChild(p);
    document.getElementById('pricelist-hr').style.display = 'block';
}


function applyCoupon() {
    const code = document.getElementById('coupon-code').value;
    if (code === 'SELL200') {
        const discount_received = (total_price * 20) / 100;
        document.getElementById('discount').innerText = discount_received.toFixed(2);
        const payable = total_price - discount_received;
        document.getElementById('total').innerText = payable.toFixed(2);
    }
    else {
        alert('invalid coupon')
    }
    document.getElementById('coupon-code').value = '';
}


function resetCart() {
    document.getElementById('selected-product-list').innerText = '';
    document.getElementById('pricelist-hr').style.display = 'none';
    document.getElementById('total-price').innerText = '00';
    document.getElementById('discount').innerText = '00';
    document.getElementById('total').innerText = '00';
    coupon_apply_btn.setAttribute('disabled', true);
    coupon_apply_btn.style.backgroundColor='#cccccc';
    make_purchase_btn.setAttribute('disabled', true);
    make_purchase_btn.style.backgroundColor='#cccccc';
}