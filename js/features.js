// Donation Button Customize 
document.getElementById('Donation-btn').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('history-btn').classList.remove('bg-comonButton');
    document.getElementById('Donation-btn').classList.add('bg-comonButton');
    const DonationEl = document.getElementById('Donation-section');
    DonationEl.classList.remove('hidden');
    const historyEl = document.getElementById('history-section');
    historyEl.classList.add('hidden');
})

// history button customize
document.getElementById('history-btn').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('history-btn').classList.add('bg-comonButton');
    document.getElementById('history-btn').classList.remove('bg-transparent');
    document.getElementById('Donation-btn').classList.remove('bg-comonButton');
    const DonationEl = document.getElementById('Donation-section');
    DonationEl.classList.add('hidden');
    const historyEl =document.getElementById('history-section');
    historyEl.classList.remove('hidden');
  

})