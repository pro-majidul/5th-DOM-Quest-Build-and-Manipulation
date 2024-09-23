







document.getElementById('donate-button').addEventListener('click', function (e) {
    e.preventDefault();
    const time = new Date();
    const inputText = getValueByInput('donate-amount');
    const mainBallanceEl = getValueByTag('main-ballance');
    if (inputText === 'number' || inputText > 0) {
        const totalDonateEl = getValueByTag('total-donate-amount');
        const totalDonateBalance = inputText + totalDonateEl;
        const remainingMainBallance = mainBallanceEl - inputText;
        document.getElementById('donate-amount').value = '';
        if (remainingMainBallance < 0) {
            alert('you dont have suffecient ballance')
            return
        } else {
            document.getElementById('total-donate-amount').innerText = totalDonateBalance;
            document.getElementById('main-ballance').innerText = remainingMainBallance;
            const historyEl = document.getElementById('history-section');
            historyEl.innerHTML += `<div class="border p-4 bg-white space-y-4 text-center rounded-xl">
                <p class=" text-xl font-bold "> 
                <span>${inputText.toFixed(2)}</span> 
                Taka is Donated for famine-2024 at Feni, Bangladesh</p>
                <p>${time.toUTCString()}</p>
                </div>`;
            document.getElementById('show-modal-amount').innerText = inputText;
            document.getElementById('my_modal_5').showModal();




        }
    } else {
        alert('Wrong input')
    }

})

