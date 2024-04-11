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
let form = document.querySelector('.js-form-modale form');

const ApiUrl = "https://world.openfoodfacts.org/api/v2/search?categories_tags="

let SearchButton = document.querySelector('.js-search-products');

let modalIDinput = document.querySelector('#productID');
let labelID = document.querySelector('#labelID');

/*******fonctions*****************/

function ModifyModal() {

  let modifyButtons = document.querySelectorAll('.modify');
  modifyButtons.forEach((Modifyelement, index) => Modifyelement.addEventListener('click', function() {


    modalIDinput.type = "text";
    labelID.style.display= "block";
    
    
    ouvrirModal();
    SaveButton.value = "Modify";
    SaveButton.removeEventListener('click', AddProduct);
    
    SaveButton.addEventListener('click', function(){
      event.preventDefault();
      
      
      
    
    let ModifyName = InputSearch.value;
    let ModifyId = modalIDinput.value;
    Modifyelement.product_name = ModifyName;
    Modifyelement._id = ModifyId; 

      console.log(ModifyName);
      console.log(ModifyId);
      console.log(Modifyelement.product_name);
      
      const productId = Modifyelement.closest('.productElement').dataset.id;
      console.log(productId);
      let productTarget  = document.querySelector(`tr[data-id="${productId}"]`);
      productTarget.dataset.id = ModifyId;
      
      productTarget.innerText = ModifyName;
      fermerModal();
      labelID.style.display= "none";
      modalIDinput.type = "hidden";
    })
  }));


}






function deletebutton() {


  let supButton = document.querySelectorAll('.sup');
  let productList = document.querySelectorAll('.productElement');
  supButton.forEach((element, index) => element.addEventListener('click', function() {

    let productID = productList[index].dataset.id;
    productList[index].remove();



  }));

}
function clean(){
  
 productsCollection = [];
 let productsremove = document.querySelectorAll('.productElement');
 for (let i = 0; i < productsremove.length; i++){
   
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

    tr.innerText = productsCollection[i].product_name;
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
