// Collection de produits
let productsCollection = [{
    "_id": "3850104053221",
    "product_name": "Tomatenmark"
  },
  {
    "_id": "0041000120039",
    "product_name": "Pulpe de tomate",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/004/100/012/0039/front_en.3.200.jpg"
  },
  {
    "_id": "0042010348901",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/004/201/034/8901/front_en.3.200.jpg"
  },
  {
    "_id": "0044152146346",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/004/415/214/6346/front_en.3.200.jpg"
  },
  {
    "_id": "8904293703414",
    "product_name": "Tomato Desi Local",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/890/429/370/3414/front_en.3.200.jpg"
  },
  {
    "_id": "5059697682940",
    "product_name": "Tomato, Mascarpone and Basil Risotto",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/505/969/768/2940/front_en.3.200.jpg"
  },
  {
    "_id": "03337172",
    "product_name": "Tomatoes",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/03337172/front_en.3.200.jpg"
  },
  {
    "_id": "8426756050137",
    "product_name": "Bio Pflaumen Tomaten",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/842/675/605/0137/front_en.3.200.jpg"
  },
  {
    "_id": "5010525179933",
    "product_name": "Tomato, Feta & Caramelized Onion Quice",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/501/052/517/9933/front_en.3.200.jpg"
  },
  {
    "_id": "7035620048814",
    "product_name": "Hakkede tomater - Spicy chili",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/703/562/004/8814/front_en.3.200.jpg"
  },
  {
    "_id": "0022314450739",
    "product_name": "Palets de tomate de provence surgelés",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/002/231/445/0739/front_fr.3.200.jpg"
  },
  {
    "_id": "8008857010038",
    "product_name": "Polpa Pomodoro",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/800/885/701/0038/front_fr.3.200.jpg"
  },
  {
    "_id": "7340083469619",
    "product_name": "ekologiska Passerade tomater"
  },
  {
    "_id": "4311527008698",
    "product_name": "Bio Rispentomaten",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/431/152/700/8698/front_en.5.200.jpg"
  },
  {
    "_id": "8850511321055",
    "product_name": ""
  },
  {
    "_id": "8858790900183",
    "product_name": "ปลากระป๋อง ไฮเชฟ",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/885/879/090/0183/front_th.3.200.jpg"
  },
  {
    "_id": "8857122646959",
    "product_name": "มะเขือเทศเชอร์รี่ พร้อมพริกเกลือ - 110 g",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/885/712/264/6959/front_th.5.200.jpg"
  },
  {
    "_id": "43084499",
    "product_name": "pasta sauce"
  },
  {
    "_id": "0072940100942",
    "product_name": "Enchilada Sauce",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/007/294/010/0942/front_en.6.200.jpg"
  },
  {
    "_id": "0057000039844",
    "product_name": "heinz"
  }
];

function displayProducts(products) {
  let tableBody = document.querySelector('.js-products-list tbody');
  let tableData = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    tableData.push(
      `<tr data-id="${product._id}">
          <td>${product.product_name}</td>
          <td><img src="${product.image_front_small_url}" /></td>
          <td><button class="js-delete-button">Supprimer</button></td>
          <td><button class="js-update-button">Modifier</button></td>
      </tr>`
    );
  }

  tableBody.innerHTML = tableData.join('');

  document.querySelectorAll('.js-delete-button').forEach(function(deleteButton) {
    deleteButton.addEventListener('click', onDeleteProduct);
  });
  document.querySelectorAll('.js-update-button').forEach(function(updateButton) {
    updateButton.addEventListener('click', onEditProduct);
  });
}

function onAddProduct() {
  let modale = document.querySelector('.js-modale-container');
  modale.classList.add('visible');

  document.querySelector('form[name="productForm"] .js-save-button')
    .addEventListener('click', onCreateProduct);

  // On vide les champs du formulaire
  document.forms["productForm"]["productName"].value = '';
  document.forms["productForm"]["id"].value = '';
}

function onCloseModale() {
  document.querySelector('.js-modale-container').classList.remove('visible');
}

function onCreateProduct(event) {
  event.preventDefault();

  // On récupère la saisie de l'utilisateur pour le nom du produit
  const productName = document.forms["productForm"]["productName"].value;
  // const productName = document.querySelector('#productNameId').value;

  // On génère un identifiant unique
  const id = productsCollection.length;

  // Créer le nouveau produit
  const newProduct = {
    _id: id,
    product_name: productName,
    image_front_small_url: ''
  };

  // On ajoute le nouveau produit à la collection
  productsCollection.push(newProduct);

  // On enlève le listener sur le bouton de soumission du formulaire (car partagé avec l'édition)
  document.querySelector('form .js-save-button').removeEventListener('click', onCreateProduct);

  displayProducts(productsCollection);

  onCloseModale();
}

function onDeleteProduct(event) {
  // On récupère l'identifiant du produit
  const id = event.target.closest('tr').dataset.id;

  // On recherche dans la collection l'index où se trouve le produit correspondant
  let productIndex = productsCollection.findIndex((p) => p._id === id);

  // On supprime le produit de la collection
  productsCollection.splice(productIndex, 1);

  // On rafraichi l'affichage
  displayProducts(productsCollection);
}
// Même chose que
/*
const onDeleteProduct = function () {
  console.log('toto');
}
*/

function onEditProduct(event) {
  const id = event.target.closest('tr').dataset.id;

  // On recherche dans la collection le produit correspondant
  const product = productsCollection.find((p) => p._id === id);

  // On rempli les champs du formulaire avec les données du produit
  document.forms["productForm"]["productName"].value = product.product_name;
  document.forms["productForm"]["id"].value = id;
  
  document.querySelector('form[name="productForm"] .js-save-button')
    .addEventListener('click', onUpdateProduct);

  // On affiche la modale contenant le formulaire
  document.querySelector('.js-modale-container').classList.add('visible');
}

function onSearchProducts() {
  let searchQuery = document.querySelector('.js-search-query').value;
  const apiUrl = `https://world.openfoodfacts.org/api/v2/search?categories_tags=${searchQuery}`;

  fetch(apiUrl)
    .then((response) => {
      if (response.ok === true) {
        response.json().then((data) => {
          productsCollection = data.products;
          displayProducts(productsCollection);
        });
      }
      else {
        console.error(response);
      }
    });

}

function onUpdateProduct(event) {
    // On désactive le comportement par défaut
    // (rafraichissement de la page après soumission du formulaire)
    event.preventDefault();

    // On récupère la saisie de l'utilisateur pour le nom du produit
    const productName = document.forms["productForm"]["productName"].value;
    // On récupère l'identifiant du produit modifié (depuis le champ caché)
    const id = document.forms["productForm"]["id"].value;

    // On recherche dans la collection le produit correspondant
    const product = productsCollection.find((p) => p._id === id);

    // On met à jour le produit avec la saisie de l'utilisateur
    product.product_name = productName;
    
    // On enlève le listener sur le bouton de soumission du formulaire (car partagé avec l'ajout)
    document.querySelector('form .js-save-button').removeEventListener('click', onUpdateProduct);
    
    // On cache la modale contenant le formulaire
    document.querySelector('.js-modale-container').classList.remove('visible');

    // On rafraichi l'affichage
    displayProducts(productsCollection);
}

document.addEventListener('DOMContentLoaded', function() {

  displayProducts(productsCollection);

  let addProductButton = document.querySelector('.js-add-product');
  addProductButton.addEventListener('click', onAddProduct);

  document.querySelector('.js-close-button').addEventListener('click', onCloseModale);
  document.querySelector('.js-search-products').addEventListener('click', onSearchProducts);
});
