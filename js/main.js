const mb=document.getElementById('mb'),cm=document.getElementById('cm'),mn=document.getElementById('mn'),mo=document.getElementById('mo'),ml=document.querySelectorAll('.mobile-link'),st=document.getElementById('scrollTop'),sp=document.querySelector('.scroll-progress');
function openM(){mn.classList.add('active');mo.classList.add('active');document.body.style.overflow='hidden';mb.setAttribute('aria-expanded','true')}
function closeM(){mn.classList.remove('active');mo.classList.remove('active');document.body.style.overflow='';mb.setAttribute('aria-expanded','false')}
mb.addEventListener('click',openM);
cm.addEventListener('click',closeM);
mo.addEventListener('click',closeM);
ml.forEach(l=>l.addEventListener('click',closeM));
st.addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'})});
st.addEventListener('keydown',(e)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}});
document.getElementById('cf').addEventListener('submit',function(e){e.preventDefault();alert('Thank you for your message! I will get back to you soon.');this.reset()});
document.addEventListener('keydown',(e)=>{if(e.key==='Escape'){if(mn.classList.contains('active'))closeM()}});
document.addEventListener('mousemove',(e)=>{const shapes=document.querySelectorAll('.geometric-shape');shapes.forEach((shape,i)=>{const speed=(i+1)*0.02;shape.style.transform=`translate(${e.clientX*speed}px,${e.clientY*speed}px) rotate(${45+i*15}deg)`})});
const unifiedObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){const target=entry.target;if(target.classList.contains('stat-number')&&!target.classList.contains('counted')){const text=target.textContent;const num=parseInt(text);const hasPlus=text.includes('+');let current=0;const increment=num/50;const timer=setInterval(()=>{current+=increment;if(current>=num){target.textContent=num+(hasPlus?'+':'');clearInterval(timer);target.classList.add('counted')}else{target.textContent=Math.floor(current)+(hasPlus?'+':'')}},30)}else{target.classList.add('visible')}}})},{threshold:0.1});
document.querySelectorAll('.stat-number,.about,.services,.portfolio,.testimonials,.early-adopter,.faq,.contact').forEach(el=>unifiedObserver.observe(el));
document.querySelectorAll('.faq-question').forEach(btn=>{btn.addEventListener('click',()=>{const item=btn.parentElement;const wasActive=item.classList.contains('active');document.querySelectorAll('.faq-item').forEach(i=>{i.classList.remove('active');i.querySelector('.faq-question').setAttribute('aria-expanded','false')});if(!wasActive){item.classList.add('active');btn.setAttribute('aria-expanded','true')}})});
let ticking=false;
window.addEventListener('scroll',()=>{if(!ticking){window.requestAnimationFrame(()=>{const scrollY=window.scrollY;const h=document.getElementById('hdr');h.classList.toggle('scrolled',scrollY>50);const winScroll=document.documentElement.scrollTop;const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;sp.style.width=(winScroll/height)*100+'%';st.classList.toggle('visible',scrollY>500);let cur='';document.querySelectorAll('section[id]').forEach(s=>{const st=s.offsetTop;if(scrollY>=(st-200))cur=s.getAttribute('id')});document.querySelectorAll('.nav-links a').forEach(l=>{l.classList.remove('active');if(l.getAttribute('href')===`#${cur}`)l.classList.add('active')});ticking=false});ticking=true}});
setTimeout(()=>{document.querySelectorAll('.code-line').forEach((line,i)=>{setTimeout(()=>line.classList.add('typed'),i*150)})},1200);
