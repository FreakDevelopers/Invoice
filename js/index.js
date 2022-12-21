// Add Components
var count = 0;
function addComponent() {
  var i = ++count;
  // Creation of Divs
  var div = document.createElement("div");
  div.className = "component";
  div.id = "component" + i;
  var divwc = document.createElement("div");
  divwc.className = "wrap-column";
  var divwr = document.createElement("div");
  divwr.className = "wrap-row";

  // Creation of input od wrap-column
  var itemdesc = document.createElement("input");
  itemdesc.id = "itemdesc";
  itemdesc.type = "text";
  itemdesc.name = "itemdesc";
  itemdesc.placeholder = "Item Description";
  var itemdetails = document.createElement("textarea");
  itemdetails.id = "itemdetails";
  itemdetails.rows = "3";
  itemdetails.cols = "25";
  itemdetails.name = "itemdetails";
  itemdetails.placeholder = "Additional Details";
  itemdetails.style.padding = "0.7rem 1rem";
  itemdetails.style.resize = "none";

  // Creation of input od wrap-row
  var rate = document.createElement("input");
  rate.id = "rate";
  rate.type = "text";
  rate.name = "rate";
  rate.placeholder = "₹0.00";
  var quantity = document.createElement("input");
  quantity.id = "quantity";
  quantity.type = "text";
  quantity.name = "quantity";
  quantity.placeholder = "0";
  var amount = document.createElement("input");
  amount.id = "amount";
  amount.type = "text";
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

// Delete Component
function deleteComponent(ev) {
  var deletebtnid = ev.target.id;
  var componentid =
    document.getElementById(deletebtnid).parentElement.parentElement.id;
  var removeElement = document.getElementById(componentid);
  removeElement.remove();
}

// Pop-Up window for invoice print
function newWindow(){
  window.open("invoice.html", "invoice", "popup");
}

// Reset all fields
function resetFields(){
  let x=window.confirm('Are you sure?');
  console.log(x);
  if(x==true){
    for(i=0; i<=10; i++){
      var abc = document.getElementsByTagName('input')[i];
      console.log(abc);
    }
  }
}
