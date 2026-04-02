// Loan Calculator
function calculateLoan() {
  const amount = parseFloat(document.getElementById('loan-amount').value);
  const rate = parseFloat(document.getElementById('interest-rate').value);
  const years = parseInt(document.getElementById('loan-term').value);

  if (!amount || !rate || !years || amount <= 0 || rate <= 0 || years <= 0) {
    alert('Please enter valid values for all fields.');
    return;
  }

  const monthlyRate = rate / 100 / 12;
  const totalPayments = years * 12;

  const monthlyPayment =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  const totalPaid = monthlyPayment * totalPayments;
  const totalInterest = totalPaid - amount;

  document.getElementById('monthly-payment').textContent = '$' + monthlyPayment.toFixed(2);
  document.getElementById('total-paid').textContent = '$' + totalPaid.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  document.getElementById('total-interest').textContent = '$' + totalInterest.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  document.getElementById('effective-rate').textContent = ((totalInterest / amount) * 100).toFixed(1) + '%';

  document.getElementById('calc-results').classList.add('visible');

  // Scroll to results
  document.getElementById('calc-results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// FAQ Toggle
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    item.querySelector('.faq-question').addEventListener('click', function () {
      // Close others
      faqItems.forEach(function (other) {
        if (other !== item) other.classList.remove('open');
      });
      item.classList.toggle('open');
    });
  });

  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Format loan amount input with commas
  var amountInput = document.getElementById('loan-amount');
  if (amountInput) {
    amountInput.addEventListener('input', function () {
      // Allow only numbers and dots
      this.value = this.value.replace(/[^0-9.]/g, '');
    });
  }
});
