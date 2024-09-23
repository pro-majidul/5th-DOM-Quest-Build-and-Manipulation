
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





// 1st modal button close 
document.getElementById('my_modal_2').addEventListener('click', function(){
    document.getElementById('my_modal_1').close();
})


// 1st modal button close 
document.getElementById('my_modal_4').addEventListener('click', function(){
    document.getElementById('my_modal_3').close();
})


// 3rd modal button close customize 
document.getElementById('my_modal_6').addEventListener('click', function(){
    document.getElementById('my_modal_5').close();
})