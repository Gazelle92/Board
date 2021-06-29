function filter() {
  let value, name, item, i, writer;
  value = document.getElementById("value").value.toUpperCase();
  item = document.getElementsByClassName("item");
  
  
  for (i = 0; i < item.length; i++) {
    name = item[i].getElementsByClassName("name");
    writer = item[i].getElementsByClassName("writer");  

    if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
      item[i].style.display = "flex"
    } else {
      if (writer[0].innerHTML.toUpperCase().indexOf(value) > -1) {
        item[i].style.display = "flex"
      } else {
        item[i].style.display = "none";
      };
    };
  }
}


const searchButton = document.getElementById("search_button");    
searchButton.addEventListener('click', filter);

