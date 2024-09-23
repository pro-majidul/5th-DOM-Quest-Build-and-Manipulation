function getValueByInput (id){
    const property = document.getElementById(id);
    const propertyValue = property.value;
    const values = parseInt(propertyValue);
    return values;
}

function getValueByTag (id){
    const property = document.getElementById(id).innerText;
    const values = parseFloat(property);
    return values;
}