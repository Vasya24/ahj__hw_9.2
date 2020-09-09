const dot = document.getElementById('dot');
const feed = document.getElementById('feedback');
const close = document.getElementById('close')
const btn = document.getElementById('btn')

function showFeedback() {
  dot.style.opacity = "0";
  feed.style.opacity = "1"
};

function hideFeedback() {
  dot.style.opacity = "1";
  feed.style.opacity = "0"
}

dot.addEventListener('click', showFeedback)

close.addEventListener('click', hideFeedback)

btn.addEventListener('click', () => {
  alert('Отправлено!');
  hideFeedback()
})