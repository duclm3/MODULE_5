let y = 0;
async function r5() {
    y += 1;
    console.log(y);
    return 5;
}
(async () => {
    y += await r5();
    console.log(y);
})();
