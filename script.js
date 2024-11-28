setInterval(() => {
    a = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let date = a.toLocaleDateString('en-GB', options);
    let time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById('time').innerHTML = time + " on " + date;
}, 1000);

