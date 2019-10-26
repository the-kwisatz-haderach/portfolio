export default function freezeScroll () {
  const initialOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  return () => { document.body.style.overflow = initialOverflow }
}
