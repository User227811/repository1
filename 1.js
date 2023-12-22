
const isHappyTicket = (a) => {
    const b = (a.length)/2;
    let i = 0;
    let d = 0;
    let id = 0;
    const q = true;
    while(i < b){
        d = d + Number(a[i]);
        i = i + 1;
    }
    while(i >= b && i !== a.length){
        id = id + Number(a[i]);
        i = i + 1;
    }
    if (d === id){
        return(true);
    }
    else{
        return(false);
    }
}
export default isHappyTicket
