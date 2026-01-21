let subs : number | string = '1M';
subs = 1000;

let apiReqStatus : 'pending' | 'success' | 'error' = 'pending';
apiReqStatus = 'success';

const orders = ['12', '40', '18', '22', '30', '45']

let currentOrder : string | undefined
;

for(let order of orders){
    if(order === '22'){
        currentOrder = order;
        break;
    }
    currentOrder = '11';
}

console.log(currentOrder)