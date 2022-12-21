// Add Components
var count = 0;
function addComponent() {
  var i = ++count;

  // Creation of Divs
  var div = document.createElement("div");
  div.className = "component";
  div.id = "component" + i;
  div.style.borderBottom = "1px dotted rgba(0,0,0,0.8)";

  var divwc = document.createElement("div");
  divwc.className = "wrap-column";

  var divwr = document.createElement("div");
  divwr.className = "wrap-row";

  // Creation of input od wrap-column
  var itemdesc = document.createElement("input");
  itemdesc.id = "itemdesc" + i;
  itemdesc.type = "text";
  itemdesc.name = "itemdesc";
  itemdesc.placeholder = "Item Description";

  var itemdetails = document.createElement("textarea");
  itemdetails.id = "itemdetails" + i;
  itemdetails.rows = "3";
  itemdetails.cols = "25";
  itemdetails.style.width = "100%";
  itemdetails.name = "itemdetails";
  itemdetails.placeholder = "Additional Details";
  itemdetails.style.padding = "0.7rem 1rem";
  itemdetails.style.resize = "none";

  // Creation of input od wrap-row
  var rate = document.createElement("input");
  rate.id = "rate" + i;
  rate.className = "position1";
  rate.type = "text";
  rate.name = "rate";
  rate.setAttribute("onchange", "addFunction(this,"+ i +")");
  rate.placeholder = "₹0.00";

  var quantity = document.createElement("input");
  quantity.id = "quantity" + i;
  quantity.className = "position2";
  quantity.type = "number";
  quantity.min = "1";
  quantity.name = "quantity";
  quantity.value = 1;
  quantity.setAttribute("onchange", "addFunction(this,"+ i +")");


  var amount = document.createElement("input");
  amount.id = "amount" + i;
  amount.className = "position3";
  amount.type = "text";
  amount.readOnly = true;
  amount.name = "amount";
  amount.placeholder = "₹0.00";

  var deletebtn = document.createElement("input");
  deletebtn.id = "deletebtn" + i;
  deletebtn.className = "deletebtn";
  deletebtn.type = "button";
  deletebtn.value = "x";
  deletebtn.setAttribute("onclick", "deleteComponent(event)");

  // Append Component
  document.getElementById("wrap").appendChild(div);
  div.appendChild(divwc);
  div.appendChild(divwr);
  divwc.appendChild(itemdesc);
  divwc.appendChild(itemdetails);
  divwr.appendChild(rate);
  divwr.appendChild(quantity);
  divwr.appendChild(amount);
  divwr.appendChild(deletebtn);
}

// Amount calculation
var addRate = 0;
var addQuantity = 1;
function addFunction(input,i){
  var sum = document.getElementById('amount' + i);
  var rt = document.getElementById('rate' + i).value;
  var qty = document.getElementById('quantity' + i).value;
  if(input.type=="text" || input.type=="number"){
    addRate = parseInt(rt);
      addQuantity=parseInt(qty);
  }
  sum.value=(addRate*addQuantity);
}

// Delete Component
function deleteComponent(ev) {
  var deletebtnid = ev.target.id;
  var componentid =
    document.getElementById(deletebtnid).parentElement.parentElement.id;
  var removeElement = document.getElementById(componentid);
  removeElement.remove();
}

// Pop-Up window for invoice print
function newWindow() {
  window.open("invoice.html", "invoice", "popup");
}

// Reset all fields
function resetFields() {
  let x = window.confirm("Are you sure?");
  if (x == true) {
    document.getElementById("cname").value = "";
    document.getElementById("cemail").value = "";
    document.getElementById("ccontact").value = "";
    document.getElementById("caddress").value = "";
    document.getElementById("city-state").value = "";
    document.getElementById("zipcode").value = "";
    document.getElementById("invoiceno").value = "";
    document.getElementById("date").value = "";
    document.getElementById("note").value = "";
    for (i = 1; i <= count; i++) {
      document.getElementById("itemdesc" + i).value = "";
      document.getElementById("itemdetails" + i).value = "";
      document.getElementById("rate" + i).value = "";
      document.getElementById("quantity" + i).value = "";
      document.getElementById("amount" + i).value = "";
    }
  }
}
