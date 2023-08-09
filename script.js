function openPopup() {
  document.getElementById('popup').style.display = 'block'
  document.body.style.overflow = 'hidden' // Disable background scrolling
}

function closePopup() {
  document.getElementById('popup').style.display = 'none'
  document.body.style.overflow = 'auto' // Re-enable background scrolling
}

document.querySelector('.popup-text').addEventListener('click', openPopup)
