document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('close-btn');
    const lightboxImg = document.getElementById('lightbox-img');

    // Add click event listeners to each image
    const images = document.querySelectorAll('.product-item img');
    images.forEach(function (image) {
        image.addEventListener('click', function () {
            openLightbox(image.src);
        });
    });

    // Close lightbox on close button click
    closeBtn.addEventListener('click', closeLightbox);

    // Close lightbox on outside click
    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Close lightbox on 'Escape' key press
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    });

    // Function to open the lightbox
    function openLightbox(imageSrc) {
        lightboxImg.src = imageSrc;
        lightbox.style.display = 'flex';
    }

    // Function to close the lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
    }
});

// Toggle dropdown menu on small screens
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

    // Close other open FAQ items
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(item => {
      if (item !== faqItem && item.classList.contains('open')) {
        item.classList.remove('open');
      }
    });
  }
  