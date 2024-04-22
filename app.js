let btnHutCheese = document.getElementById('btnHutCheese');
let btnPackFamiliar = document.getElementById('btnPackFamiliar');
let btnHutFamiliar = document.getElementById('btnHutFamiliar');
let btnHutComboMediano = document.getElementById('btnHutComboMediano');



let listProduct = document.getElementById('listProduct');
let Etotal = document.getElementById('total');


let btnLimpiar = document.getElementById('btnLimpiar');
let btnRegistros = document.getElementById('btnRegistros');
let btnAgregar = document.getElementById('btnAgregar');
let btnImprimir = document.getElementById('btnImprimir');
btnImprimir.addEventListener('click', () => {
  imprimir();
})


let listVenta = document.getElementById('listVentas');
let listVentaDetalle = document.getElementById('listItemDetalle');



function agregarSalsaMediterranea(item) {
    let card = item.parentElement.parentElement.parentElement.parentElement.parentElement;
  let index = Array.prototype.indexOf.call(listProduct.children, card);
  products[index] = new SalsaMediterranea(products[index]);
  let subElemet = card.querySelector('#subtotal');
  let cantElemet = card.querySelector('#Salsa');
  let cantidad = Number(cantElemet.textContent);
  cantElemet.innerHTML = String( cantidad + 1);
  console.log(products[index].Costo());
  subElemet.innerHTML = 'S/' + products[index].Costo().toFixed(2);
  calcularTotal();
}



function agregarVolcanDeChocolate(item) {
    let card = item.parentElement.parentElement.parentElement.parentElement.parentElement;
  let index = Array.prototype.indexOf.call(listProduct.children, card);
  console.log(card);

  products[index] = new VolcanDeChocalate(products[index]);
  let subElemet = card.querySelector('#subtotal');
  let cantElemet = card.querySelector('#Chocolate');
  let cantidad = Number(cantElemet.textContent);
  cantElemet.innerHTML = String(cantidad + 1);
  console.log(products[index].Costo());
  subElemet.innerHTML = 'S/' + products[index].Costo().toFixed(2);
  calcularTotal();
}
function agregarCocaCola(item) {
    let card = item.parentElement.parentElement.parentElement.parentElement.parentElement;
  let index = Array.prototype.indexOf.call(listProduct.children, card);
  products[index] = new CocaCola(products[index]);
  let subElemet = card.querySelector('#subtotal');
  let cantElemet = card.querySelector('#CocaCola');
  let cantidad = Number(cantElemet.textContent);
  cantElemet.innerHTML = String(cantidad + 1);
  console.log(products[index].Costo());
  subElemet.innerHTML = 'S/' + products[index].Costo().toFixed(2);
  calcularTotal();
}
function agregarIncaKola(item) {
    let card = item.parentElement.parentElement.parentElement.parentElement.parentElement;
  let index = Array.prototype.indexOf.call(listProduct.children, card);
  products[index] = new IncaKola(products[index]);
  let subElemet = card.querySelector('#subtotal');
  let cantElemet = card.querySelector('#IncaKola');
  let cantidad = Number(cantElemet.textContent);
  cantElemet.innerHTML = String(cantidad + 1);
  console.log(products[index].Costo());
  subElemet.innerHTML = 'S/' + products[index].Costo().toFixed(2);
  calcularTotal();
}


btnHutCheese.addEventListener('click', () => {
    let combo = new ComboHutCheese();
  agregarProducto(combo);
})


btnHutFamiliar.addEventListener('click', () => {
    let combo = new HutComboMediano();
  agregarProducto(combo);
})
function agregarProducto(combo) {
    listProduct.insertAdjacentHTML('beforeend', itemCombo(combo));
  products.push(combo);
  calcularTotal();
}

btnPackFamiliar.addEventListener('click', () => {
    let combo = new PackFamiliar();
  agregarProducto(combo);
})

btnHutComboMediano.addEventListener('click', () => {
    let combo = new HutComboMediano();
  agregarProducto(combo);
})

function itemCombo(combo )  {
  return `<div class="card mb-3" style="max-width: 100%;">
    <div class="row no-gutters">
      <div class="col-md-3">
        <img src="${combo.getDescription()}.jpg" alt="..." height="120" width="120" >
              </div>
        <div class="col-md-7" >
          <h5 class="card-title">${combo.getDescription()}</h5>
          <div class="row">
            <div class="col-sm-6">
              <button type="button" id="btnMoka" onclick='agregarSalsaMediterranea(this);' class="btn btn-primary btn-block btn-sm">
                <i class="fas fa-plus"></i>
                        Salsa <span class="badge badge-light" id="Salsa">0</span>
              </button>
              <button type="button" id="btnCrema" onclick='agregarCocaCola(this);' class="btn btn-primary btn-block btn-sm">
                <i class="fas fa-plus"></i>
                        Coca Cola <span class="badge badge-light" id="CocaCola" >0</span>
              </button>
            </div>
            <div class="col-sm-6">
              <button type="button" onclick='agregarVolcanDeChocolate(this);' class="btn btn-primary btn-block btn-sm" >
                <i class="fas fa-plus"></i>
                        V.Chocolate  <span class="badge badge-light" id="Chocolate"  >0</span>
              </button>
              <button type="button" onclick='agregarIncaKola(this);' class="btn btn-primary btn-block btn-sm">
                <i class="fas fa-plus"></i>
                        Inca Kola <span class="badge badge-light" id="IncaKola" >0</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <button type="button" id="subtotal" class="btn btn-danger btn-block btn-sm">
            S/ ${combo.Costo().toFixed(2)}
          </button>
          <button type="button" onclick='quitarItem(this);' class="btn btn-danger btn-block btn-sm">
            <i class="fas fa-times"></i>
                  Quitar
                </button>
        </div>
      </div>
    </div>`;
}

function quitarItem(item) {
      let button = item.parentElement.parentElement.parentElement;
  let index = Array.prototype.indexOf.call(listProduct.children, button);
  products.splice(index);
  listProduct.removeChild(button);
  console.log(listProduct);
  calcularTotal();
}

function calcularTotal() {
      let total = 0;
  products.forEach(element => {
      total += element.Costo();
  });
  Etotal.innerHTML = "Total: " + total.toFixed(2);
}
function calcularTotalVentas(arr) {
      let total = 0;
  arr.forEach(element => {
      total += element.Costo();
  });
  return total.toFixed(2);
}

function limpiar() {
      listProduct.innerHTML = "";
  products = [];
  Etotal.innerHTML = "Total: S/0.00"
}

btnLimpiar.addEventListener("click", () => {
      limpiar();
} )

btnRegistros.addEventListener("click", () => {
      listVenta.innerHTML = "";
  ventas.forEach(element => {
      listVenta.insertAdjacentHTML('beforeend', agregarItemVenta(element));
    console.log(element);
  });

})
btnAgregar.addEventListener("click", ()=>{
      ventas.push(products);
  limpiar();
})

function agregarItemVenta(combo) {
      let item = `<div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Venta</h5>
              <div class="row">
                <button type="button" class="btn btn-primary">
                  Total <span class="badge badge-light">S/${calcularTotalVentas(combo)}</span>
                </button>
                <button class="btn btn-info" onclick='verDetalle(this)' data-toggle="modal" data-target="#modalDetalles"  ><i class="fas fa-info-circle"></i> Detalles </button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  return item;
}

let content = document.getElementById('contenido');
var html = document.getElementById('listaCards');

function verDetalle(item) {
  html.innerHTML = '';
  let card = item.parentElement.parentElement.parentElement.parentElement.parentElement;
  let index = Array.prototype.indexOf.call(listVenta.children, card);
  console.log(card);
  listVentaDetalle.innerHTML = '';
  
  ventas[index].forEach((element,index) => {
    listVentaDetalle.insertAdjacentHTML('beforeend', itemComboDetalle(element));
    html.insertAdjacentHTML("beforeend", `<th>${index + 1}</th>
      <td>${element.getDescription()}</td>
      <td>S/${element.Costo()}</td>`);
    console.log(html);
  })
  let detTotal = document.getElementById('detalleTotal')
  detTotal.innerHTML = 'S/' + calcularTotalVentas(ventas[index]);
  document.getElementById('ITotal').textContent = calcularTotalVentas(ventas[index]);
  var f = new Date();
  document.getElementById('Fecha').textContent = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear() + "-" + f.getHours() + ":" + f.getMinutes();

  //let index = Array.prototype.indexOf.call(listProduct.children, card);
}
function itemComboDetalle(combo) {
  return `<div class="card mb-3" style="max-width: 100%;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${getCombo(combo.getDescription())}.jpg" alt="..." height="120" width="120" >
              </div>
            <div class="col-md-6" >
              <h5 class="card-title">${combo.getDescription()}</h5>
            </div>
            <div class="col-sm-2">
              <button type="button" id="subtotal" class="btn btn-danger btn-block btn-sm">
                S/ ${combo.Costo().toFixed(2)}
              </button>
            </div>
          </div>
        </div>`;
}
function getCombo(description) {
  let index = description.indexOf(',');
  if (index > -1) {
    return description.substring(0, index )
  } else {
    return description;
  }
}

function imprimir() {
  content.style.display = 'block';
  html2pdf(content);
  console.log(content);
}