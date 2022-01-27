document.getElementById('about').addEventListener('mousemove',(e) =>{
        const x = e.pageX / 500;
        const y = e.pageY / 500;
        e.target.style = `background-position: top ${100 - y}px left ${100 - x}px`;
})
