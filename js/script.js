function changeImage(imagePath) {
    document.getElementById('mainImage').src = imagePath;

    // Remove the "active" class from all thumbnail images
    const thumbnailImages = document.getElementsByClassName('thumbnail-img');
    for (let i = 0; i < thumbnailImages.length; i++) {
      thumbnailImages[i].classList.remove('active');
    }

    // Add the "active" class to the clicked thumbnail image
    event.target.classList.add('active');
  }

  $(document).ready(function () {
    $('.custome-carousel-1').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 2
        }
      }
    });
  });

  $(document).ready(function() {
      $('.loop').owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
          300: {
              items: 2
            },
            768: {
              items: 4
            },
            992: {
              items: 6
            }
        }
      });
  });

  const mainImg = document.getElementById('main-Img');
  const hiddenContent = document.getElementById('hiddenContent');
  const showButton = document.getElementById('showButton');
  const hideButton = document.getElementById('hideButton');

  showButton.addEventListener('click', () => {
    hiddenContent.style.display = 'block';
    showButton.style.display = 'none';
  });

  hideButton.addEventListener('click', () => {
    hiddenContent.style.display = 'none';
    showButton.style.display = 'block';
  });