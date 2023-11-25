function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function toggleFaq(faqItem) {
    faqItem.classList.toggle('open');

    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(item => {
      if (item !== faqItem && item.classList.contains('open')) {
        item.classList.remove('open');
      }
    });
  }
  