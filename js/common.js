
// get value in input tag 

function getValueByInput (id){
    const property = document.getElementById(id);
    const propertyValue = property.value;
    const values = parseInt(propertyValue);
    return values;
}

// get value in html tag
function getValueByTag (id){
    const property = document.getElementById(id).innerText;
    const values = parseFloat(property);
    return values;
}

// modal button close customize 
document.getElementById('my_modal_6').addEventListener('click', function(){
    document.getElementById('my_modal_5').close();
})