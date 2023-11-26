function search() {
    let searchValue = document.getElementById("searchProduct").value;
    let resultSearch = productStockList.filter((itemSearch) => {
      return itemSearch.name.indexOf(searchValue) != -1;
    });
    console.log(resultSearch);
    showProduct(resultSearch);
    totalPageCurrent(resultSearch);
    showListPage();
  }