function luzes() {

    let body = document.body;

    for (let quant = 0; quant < 300; quant++) {

        let i = document.createElement('i');
        let x = Math.round(Math.random() * window.innerWidth);
        let y = Math.round(Math.random() * window.innerHeight);

        let size = Math.round(Math.random() * 4 + 1);

        i.style.left = x + "px";
        i.style.top = y + "px";

        let animationDuration = Math.round(Math.random() * 5);

        i.style.animationDuration = 2 + animationDuration + "s";

        i.style.width = 1 + size + "px";
        i.style.height = 1 + size + "px";

        body.append(i);
    }
}

luzes()