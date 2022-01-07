function repeatStr (n, s) {
    let b ='';
    for (let i = 1;  i<=n; i++) {
        b=b+s;
    }
    return b ;
}
repeatStr (5, '*');