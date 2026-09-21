// Front end for the Products API. Talks to GET/POST /products on the same
// server (same origin), so plain relative fetch() calls work.

const addForm = document.getElementById('add-form');
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const addStatus = document.getElementById('add-status');

const refreshBtn = document.getElementById('refresh-btn');
const listStatus = document.getElementById('list-status');
const productListEl = document.getElementById('product-list');

function setStatus(el, message, type) {
  el.textContent = message;
  el.className = 'status' + (type ? ' ' + type : '');
}

/**
 * GET /products and render the results as a list.
 */
async function loadProducts() {
  setStatus(listStatus, 'Loading…');
  try {
    const response = await fetch('/products');
    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }
    const products = await response.json();

    productListEl.innerHTML = '';
    if (products.length === 0) {
      productListEl.innerHTML = '<li>No products yet.</li>';
    } else {
      for (const product of products) {
        const li = document.createElement('li');
        li.innerHTML = `<span>#${product.id} &mdash; ${product.name}</span>
          <span class="price">$${Number(product.price).toFixed(2)}</span>`;
        productListEl.appendChild(li);
      }
    }
    setStatus(listStatus, '', undefined);
  } catch (err) {
    console.error('Failed to load products:', err);
    setStatus(listStatus, 'Could not load products. Is the server running?', 'error');
  }
}

/**
 * POST /products with the form's name/price, then refresh the list.
 */
async function handleAddSubmit(event) {
  event.preventDefault(); // don't let the browser do a full page reload

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);

  if (!name || Number.isNaN(price)) {
    setStatus(addStatus, 'Please enter a valid name and price.', 'error');
    return;
  }

  try {
    const response = await fetch('/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price }),
    });

    const data = await response.json();

    if (!response.ok) {
      // e.g. the server's 400 validation error
      throw new Error(data.error || `Server responded with status ${response.status}`);
    }

    setStatus(addStatus, `Added "${data.product.name}".`, 'success');
    addForm.reset();
    loadProducts(); // refresh the list to show the new product
  } catch (err) {
    console.error('Failed to add product:', err);
    setStatus(addStatus, `Could not add product: ${err.message}`, 'error');
  }
}

addForm.addEventListener('submit', handleAddSubmit);
refreshBtn.addEventListener('click', loadProducts);

// Load the list as soon as the page opens.
loadProducts();
