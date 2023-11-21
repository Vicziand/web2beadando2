// table_dto.js től veszi az adatokat
function createIdopontTable() {
    return tableDatas();
}

// Táblázat hozzáadása az HTML-hez
var tablaContainer = document.getElementById('tabla-container');
var generatedTable = createIdopontTable();

tablaContainer.innerHTML = generatedTable;