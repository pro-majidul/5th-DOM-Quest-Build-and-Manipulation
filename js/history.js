




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
            document.getElementById('total-donate-amount').innerText = totalDonateBalance.toFixed(2);
            // set remaining balance value
            document.getElementById('main-ballance').innerText = remainingMainBallance.toFixed(2);
            const donateTitle = document.getElementById('donate-title').innerText;
            const historyEl = document.getElementById('history-section');
            historyEl.innerHTML += `<div class="border p-4 bg-white space-y-4  rounded-xl">
                <p class=" text-xl font-bold "> 
                <span>${inputText}</span> Taka is Donated for 
                ${donateTitle}
                 </p>
                <p class="text-xl">${time.toString()}</p>
                </div>`;


            document.getElementById('show-modal-amount').innerText = inputText;
            document.getElementById('my_modal_5').showModal();




        }
    } else {
        alert('Wrong input')
    }

})

