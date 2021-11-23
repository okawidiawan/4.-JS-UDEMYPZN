addEventListener('message', function (event) {
    const total = event.data;
    for (let i = 1; i <= total; i++) {
        postMessage(i);
    }
})