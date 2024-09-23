document.getElementById('Donation-btn').addEventListener('click', function(event){
    event.preventDefault();
    const DonationEl = document.getElementById('Donation-section');
    DonationEl.classList.remove('hidden');
    const historyEl = document.getElementById('history-section');
    historyEl.classList.add('hidden');
})


document.getElementById('history-btn').addEventListener('click', function(event){
    event.preventDefault();
    const DonationEl = document.getElementById('Donation-section');
    DonationEl.classList.add('hidden');
    const historyEl =document.getElementById('history-section');
    historyEl.classList.remove('hidden');
  

})