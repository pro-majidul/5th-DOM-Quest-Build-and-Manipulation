function getValueByInput (id){
    const property = document.getElementById(id).value;
    const values = parseFloat(property);
    return values;
}

function getValueByTag (id){
    const property = document.getElementById(id).innerText;
    const values = parseFloat(property);
    return values;
}