// state
let current = -1

let images = [...document.querySelectorAll('#gallery img[data-src]')]
const slidecount = images.length + 1 // the last slide has no image
let slides = [...document.body.querySelectorAll('#gallery section')] // gallery pages
let d = slides.reduce((d, n, i) => {
  // dictionary project -> first page id
  if (!d[n.id]) d[n.id] = i
  return d
}, {})

let gallery = document.getElementById('gallery')
let overview = document.getElementById('overview')

// core
let loadgalleryimages = (i) => [i - 1, i, i + 1].forEach(loadimg) // index bounds are checked in loadimg

for (let i = 0; i < slidecount; i++) { // preload all gallery images
  loadimg(i)
}

function setslide(i, withscroll = true) {
  i = Math.min(i, slidecount - 1)
  i = Math.max(i, 0)
  if (i != current) {
    document.body.setAttribute('slide', i)
    document.body.setAttribute('slidename', slides[i].className)
    // document.title = slides[i].className
    loadgalleryimages(i)
    if (withscroll) gallery.scrollTo(i * gallery.offsetWidth, 0)
    current = i
  }
}

$('leftfield').onclick = () => setslide(current - 1)
$('rightfield').onclick = () => setslide(current + 1)
$('btnclose').onclick = close

// explain
let showexplain = () => { document.body.classList.add('showexplain') }
let hideexplain = () => { document.body.classList.remove('showexplain') }
let toggleexplain = () => { document.body.classList.toggle('showexplain') }
let isgalleryopen = () => { return document.body.classList.contains('showgallery') }

function loadimg(i) {
  let img = images[i]
  if (img && img.dataset.src) {
    img.src = img.dataset.src
    delete img.dataset.src
  }
}

// e is the link element inside a section in the overview
function opengallery(e) {
  let project = closest(e, (e) => e.tagName == 'SECTION').id
  let i = d[project]
  setslide(i)
  document.body.classList.add('showgallery')
  showexplain()
  //gallery.webkitRequestFullscreen({ navigationUI: 'hide' }) // navigationUI: 'hide' has no effect on ipad safari (well known issue)
}

function close(e) {
  let p = slides[current].id // current project
  document.body.classList.remove('showgallery')
  if (p) overview.querySelector('#' + p).scrollIntoView({ block: 'center' })
  e.cancelBubble = true
}

// event listeners
window.addEventListener('keydown', (e) => {
  if (!isgalleryopen()) return
  switch (e.code) {
    case 'ArrowLeft':
      setslide(current - 1)
      e.preventDefault() // it is better to prevent default action, arrows for instance could also affect scrollbars which could cause action twice
      break
    case 'Enter':
    case 'NumpadEnter':
    case 'ArrowRight':
      setslide(current + 1)
      e.preventDefault()
      break
    case 'Home':
      setslide(0)
      e.preventDefault()
      break
    case 'End':
      setslide(slidecount - 1)
      e.preventDefault()
      break
    case 'KeyE':
    case 'Space':
      toggleexplain()
      e.preventDefault()
      break
    case 'Escape':
      close(e)
      e.preventDefault()
      break
  }
})

document.addEventListener('wheel', (e) => {
  if (!isgalleryopen()) return
  if (e.deltaY > 0) setslide(current + 1)
  if (e.deltaY < 0) setslide(current - 1)
})

$('rewind').addEventListener('click', (e) => {
  setslide(0)
  e.cancelBubble = true
})

let scrolling = false
let istouchdevice = matchMedia('(hover: none)').matches
if (istouchdevice) {
  // touch devices change the slide only via scrolling
  scrolling = true
}
else {
  // only when the users scrolls with the scrollbar, the scroll event shall be active and call setslide
  // otherwise, key and click events would trigger setslide which causes scroll events which in turn calls setslide
  gallery.addEventListener('mousedown', e => { scrolling = e.target == gallery })
  gallery.addEventListener('mouseup', e => { scrolling = false })// always ends scrolling, no need to check e.target
}
gallery.addEventListener('scroll', (e) => {
  if (scrolling) {
    let i = Math.ceil((gallery.scrollLeft - gallery.offsetWidth / 2) / gallery.offsetWidth) // switch in the middle between slides
    setslide(i, false)
  }
})

// utils
function $(id) {
  return document.getElementById(id)
}

function closest(e, pred) {
  return e && ((pred(e) && e) || closest(e.parentElement, pred))
}
