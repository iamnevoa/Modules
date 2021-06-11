function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
}

loadScript('a.js'); //загружается сам по себе

loadScript('c.js', step1); //d и b загружаются после c

function step1() {
    loadScript('d.js');
    loadScript('b.js')
};

loadScript('k.js', step2); // m загружается после k и l

function step2() {
    loadScript('l.js', () => loadScript('m.js'))

};