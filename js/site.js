function toggleNav(btn){
  const links=document.getElementById('navLinks');
  const open=links.classList.toggle('open');
  btn.setAttribute('aria-expanded',open);
}
// close mobile menu on link tap
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{
  document.getElementById('navLinks').classList.remove('open');
}));
// scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
if(matchMedia('(prefers-reduced-motion: reduce)').matches){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'))}
// local preview: make folder links open index.html when viewed from disk
if(location.protocol==='file:'){document.querySelectorAll('a[href]').forEach(a=>{const h=a.getAttribute('href');if(/^[^:#?]*\/(#.*)?$/.test(h))a.setAttribute('href',h.replace(/\/(#.*)?$/,'/index.html$1'));});}
// hero video: respect reduced motion
(function(){const v=document.querySelector('.hero-video');if(!v)return;
 if(matchMedia('(prefers-reduced-motion: reduce)').matches){v.removeAttribute('autoplay');v.pause();}})();
