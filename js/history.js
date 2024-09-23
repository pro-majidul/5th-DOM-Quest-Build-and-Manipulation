// catch 1st donation button 

document.getElementById('Donate-now-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const time = new Date();
    const donateInput = getValueByInput('donate-input');
    const mainBallanceEl = getValueByTag('main-ballance');

    if (donateInput === 'number' || donateInput > 0) {
        const nitDonateAmount = getValueByTag('nit-donate-amount');
        const newNitDonateBallance = donateInput + nitDonateAmount;
        const remainingTotalballance = mainBallanceEl - donateInput;
        if (remainingTotalballance < 0) {
            alert('You Dont have suffecient ballance');
            return;
        } else {
            document.getElementById('main-ballance').innerText = remainingTotalballance;
            document.getElementById('nit-donate-amount').innerText = newNitDonateBallance;
            const myModal = document.getElementById('my_modal_1');
            myModal.showModal();
            const donate1stTitle = document.getElementById('donate-1st-title').innerText;
            const historyEl = document.getElementById('history-section');
            historyEl.innerHTML += `<div class="border p-4 bg-white space-y-4  rounded-xl">
                <p class=" text-xl font-bold "> 
                <span>${donateInput}</span> Taka is Donated for 
                ${donate1stTitle}
                 </p>
                <p class="text-xl">${time.toString()}</p>
                </div>`;

            document.getElementById('donate-input').value = '';
        }
    } else {
        alert('Invalid Input');
        return;
    }
})























// catch 3rd donate button

document.getElementById('donate-button').addEventListener('click', function (e) {
    e.preventDefault();
    const time = new Date();
    const inputText = getValueByInput('donate-amount');
    const mainBallanceEl = getValueByTag('main-ballance');

    // check input value
    if (inputText === 'number' || inputText > 0) {
        const totalDonateEl = getValueByTag('total-donate-amount');
        const totalDonateBalance = inputText + totalDonateEl;
        const remainingMainBallance = mainBallanceEl - inputText;
        document.getElementById('donate-amount').value = '';

        // check  total balance and input value

        if (remainingMainBallance < 0) {
            alert('you dont have suffecient ballance')
            return
        } else {
            // set total Donate balance value 
            document.getElementById('total-donate-amount').innerText = totalDonateBalance;
            // set remaining balance value
            document.getElementById('main-ballance').innerText = remainingMainBallance;
            const donateTitle = document.getElementById('donate-title').innerText;
            const historyEl = document.getElementById('history-section');
            historyEl.innerHTML += `<div class="border p-4 bg-white space-y-4  rounded-xl">
                <p class=" text-xl font-bold "> 
                <span>${inputText}</span> Taka is Donated for 
                ${donateTitle}
                 </p>
                <p class="text-xl">${time.toString()}</p>
                </div>`;
            document.getElementById('my_modal_5').showModal();
        }
    } else {
        alert('Wrong input')
    }

})






