window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    document.getElementById('ganesha').className="hidden";
    setTimeout(()=>{
        document.getElementById('ganesha').className="card";
        document.getElementById('loading').className="hidden";
    }, 5000)
});