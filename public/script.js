let editCatId = null;
let editProdId = null;
let page = 1;
function loadCategories() {
    fetch('/api/categories')
        .then(res => res.json())
        .then(data => {

            const catTable = document.getElementById('catTable');
            const catSelect = document.getElementById('catSelect');

            if (catTable) catTable.innerHTML = '';
            if (catSelect) catSelect.innerHTML = '';

            data.forEach(c => {

                if (catTable) {
                    catTable.innerHTML += `
                    <tr>
                        <td>${c.category_id}</td>
                        <td>${c.category_name}</td>
                        <td>
                            <button class="edit" onclick="editCategory(${c.category_id}, '${c.category_name}')">Edit</button>
                            <button class="delete" onclick="deleteCategory(${c.category_id})">Delete</button>
                        </td>
                    </tr>`;
                }

                if (catSelect) {
                    catSelect.innerHTML += `
                        <option value="${c.category_id}">
                            ${c.category_name}
                        </option>`;
                }

            });
        });
}

function saveCategory() {
    const input = document.getElementById('catName');
    const name = input.value;

    if (editCatId == null) {
        fetch('/api/categories', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });
    } else {
        fetch('/api/categories/' + editCatId, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });
        editCatId = null;
    }

    input.value = '';
    loadCategories();
}

function editCategory(id, name) {
    editCatId = id;
    document.getElementById('catName').value = name;
}

function deleteCategory(id) {
    fetch('/api/categories/' + id, { method: 'DELETE' })
        .then(loadCategories);
}

function loadProducts() {
    const prodTable = document.getElementById('prodTable');
    if (!prodTable) return;

    fetch('/api/products?page=' + page)
        .then(res => res.json())
        .then(data => {

            prodTable.innerHTML = '';

            data.forEach(p => {
                prodTable.innerHTML += `
                <tr>
                    <td>${p.product_id}</td>
                    <td>${p.product_name}</td>
                    <td>${p.category_id}</td>
                    <td>${p.category_name}</td>
                    <td>
                        <button class="edit" onclick="editProduct(${p.product_id}, '${p.product_name}', ${p.category_id})">Edit</button>
                        <button class="delete" onclick="deleteProduct(${p.product_id})">Delete</button>
                    </td>
                </tr>`;
            });
        });
}

function saveProduct() {
    const prodName = document.getElementById('prodName').value;
    const catId = document.getElementById('catSelect').value;

    if (editProdId == null) {
        fetch('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: prodName, category_id: catId })
        });
    } else {
        fetch('/api/products/' + editProdId, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: prodName, category_id: catId })
        });
        editProdId = null;
    }

    document.getElementById('prodName').value = '';
    loadProducts();
}

function editProduct(id, name, cid) {
    editProdId = id;
    document.getElementById('prodName').value = name;
    document.getElementById('catSelect').value = cid;
}

function deleteProduct(id) {
    fetch('/api/products/' + id, { method: 'DELETE' })
        .then(loadProducts);
}

function nextPage() {
    page++;
    loadProducts();
}

function prevPage() {
    if (page > 1) {
        page--;
        loadProducts();
    }
}

loadCategories();
loadProducts();
