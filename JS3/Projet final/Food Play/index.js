// Collection de produits
/*let productsCollection = [{
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
*/
/********variables****************/
let productsCollection = [];


let modal = document.querySelector('.js-modale-container');
let ajouterButton = document.querySelector('.js-add-product');

let ButtonfermerModal = document.querySelector('.js-close-button');
let SaveButton = document.querySelector('.js-save-button');

let InputSearch = document.querySelector('#productNameId');

let tbody = document.querySelector('tbody');


const ApiUrl = "https://world.openfoodfacts.org/api/v2/search?categories_tags=";

let SearchButton = document.querySelector('.js-search-products');

let modalIDinput = document.querySelector('#productID');


/*******fonctions*****************/

function ModifyModal() {
  SaveButton.removeEventListener('click', AddProduct);
  let modifyButtons = document.querySelectorAll('.modify');
  modifyButtons.forEach((Modifyelement, index) => Modifyelement.addEventListener('click', function() {
    //on applique une écoute à tous les boutons modifier
    //on affiche le label de l'id dans la modale et l'input de l'id qui etait caché
    //on enlève l'écoute déjà présente sur la modale avec "Ajouter"




    //on recupere l'id le plus proche cad productElement
    const productId = Modifyelement.closest('.productElement').dataset.id;

    //on attribut a savebutton l'id;
    SaveButton.dataset.id = productId;
    console.log(productId);

    //on ouvre la modale
    ouvrirModal();



    //on ajoute une écoute au click sur cette nouvelle fonction
    SaveButton.addEventListener('click', function() {
      event.preventDefault();
      SaveModify(Modifyelement, productId);


    });
    SaveButton.removeEventListener('click', SaveModify);
  }));

  InputSearch.value = "";
  modalIDinput.value = "";
}

function SaveModify(Modifyelement, productId) {

  //on empeche la page de se rafraichir ??

  //récupérer les valeurs des champs du form
  let ModifyName = InputSearch.value;


  //récuperer l'id dataset de l'element du DOM le plus proche (closest) de l'élément modifier

  //cherche dans le tableau productsCollection, l'index de l'objet qui possede le meme id que productId
  let productIndex = productsCollection.findIndex(p => p._id === productId);
  console.log(productIndex);

  //selectionne le tr avec le même id dataset que productId
  let productTarget = document.querySelector(`tr[data-id="${productId}"]`);


  // créer un objet sur le modèle des objets de productsCollection {...}
  //puis lui change les propriétés avec les nouvelles valeurs
  if (productIndex !== -1) {
    let modifiedProduct = { ...productsCollection[productIndex] };
    modifiedProduct.product_name = ModifyName;


    console.log(modifiedProduct)
    //remplace l'ancien objet dans le tableau par le nouvel objet avec les nouvelles valeurs
    productsCollection[productIndex] = modifiedProduct;

    console.log(productsCollection)
  }
  else {

    console.log('product not found');

  }




  //on selectionne le premier td qui a le nom hérité de l'objet
  let td0select = productTarget.querySelector('td:nth-child(1)');
  console.log(td0select);

  //on change aussi le dataset id de l'element;
  //on crée un nouveau td
  let newtd = document.createElement('td');

  //il prend le nouveau nom du champ comme text
  newtd.innerText = ModifyName;

  //on remplace le premier td du nom par le nouveau td avec le nom modifié
  productTarget.replaceChild(newtd, td0select);

  console.log(productTarget);

  console.log(Modifyelement.event);

  //on ferme la modale
  fermerModal();



};




function deletebutton() {


  let supButton = document.querySelectorAll('.sup');

  supButton.forEach((element, index) => element.addEventListener('click', function() {
    //chope l'id du productelement le plus proche;
    const productId = element.closest('.productElement').dataset.id;
    const productElement = element.closest('.productElement')
    let productIndex = productsCollection.findIndex(p => p._id === productId);
    if (productsCollection[productIndex]._id === productId) {

      console.log(productId);

      productsCollection.splice(productIndex, 1);
      productElement.remove();


    }




  }));

}

function clean() {

  productsCollection = [];
  let productsremove = document.querySelectorAll('.productElement');
  for (let i = 0; i < productsremove.length; i++) {

    productsremove[i].remove();


  }



}



function SearchProducts() {

  clean();
  let SearchInput = document.querySelector('.js-search-query').value;


  fetch(ApiUrl + SearchInput)
    .then((response) => {
      console.log(response);
      if (response.ok) {

        response.json().then((data) => {


          let ApiProductList = data.products

          ApiProductList.forEach((elementProduct, index) => {

            let product = {

              "_id": elementProduct._id,
              "product_name": elementProduct.product_name,
              "image_front_small_url": elementProduct.image_front_small_url


            };


            productsCollection.push(product);
          });



          displayProducts();
          deletebutton();
          ModifyModal();
        });
      }
      else {

        console.log('La requête a échoué');
        console.log(response);

      }
    })




}

function displayProducts() {



  for (let i = 0; i < productsCollection.length; i++) {

    let tr = document.createElement('tr');
    tr.classList = "productElement";
    tbody.appendChild(tr);
    let td0 = document.createElement('td');
    tr.appendChild(td0);
    td0.innerText = productsCollection[i].product_name;
    let td = document.createElement('td');
    tr.appendChild(td);
    let img = document.createElement('img');
    td.appendChild(img);
    tr.dataset.id = productsCollection[i]._id;
    img.src = productsCollection[i].image_front_small_url;

    let td2 = document.createElement('td');
    tr.appendChild(td2);
    let buttonsup = document.createElement('button');
    buttonsup.classList = 'sup';
    buttonsup.innerText = "Supprimer";
    td2.appendChild(buttonsup);

    let td3 = document.createElement('td');
    tr.appendChild(td3);
    let buttonModify = document.createElement('button');
    buttonModify.classList = 'modify';
    buttonModify.innerText = "Modifier";
    td3.appendChild(buttonModify);


  }





}

function ouvrirModal() {


  modal.style.display = 'block';




}

function fermerModal() {

  modal.style.display = 'none';



}

function AddProduct() {



  SaveButton.value = "Add";
  let search = InputSearch.value;
  console.log(search);
  let generateID = productsCollection.length + 1;


  event.preventDefault();
  let newProduct = {

    "_id": String(generateID),
    "product_name": search,
    "image_front_small_url": ""
  }

  productsCollection.push(newProduct);
  console.log(productsCollection);

  let tr = document.createElement('tr');
  tbody.appendChild(tr);

  tr.innerText = newProduct.product_name;
  let td = document.createElement('td');
  tr.appendChild(td);
  let img = document.createElement('img');
  td.appendChild(img);

  img.src = newProduct.image_front_small_url;

  fermerModal();
}




/*******général******************/

document.addEventListener('DOMContentLoaded', function() {

  displayProducts();
  event.preventDefault;
  ButtonfermerModal.addEventListener('click', fermerModal);

  ajouterButton.addEventListener('click', ouvrirModal);

  SaveButton.addEventListener('click', AddProduct);



  SearchButton.addEventListener('click', SearchProducts);






});
