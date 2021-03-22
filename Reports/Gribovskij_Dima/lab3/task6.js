function task6() {
    function delTripl(arr) {
        let res = [];
        let repeats = [];

        if (!(Array.isArray(arr))) {
            arr = arr.split('');
        }

        for (let value of arr) {
            repeats[value] = (repeats[value] || 0) + 1;
        }

        for(let i in arr) {
            if (repeats[arr[i]] < 3) {
                res.push(arr[i]);
            }
        }

        return(`[`+ res +`]`);
    }
    alert(delTripl([1, 2, 1, 3, 1, 3, 1, 4]));
    alert(delTripl("mama ramu"));
    alert(delTripl("mamaramu"));
}