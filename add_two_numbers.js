// I can not finish it in 2017.12.20
// Travaling list = list.next or l1 = l1.next l2 = l2.next are all OK

// nearly 212ms beats almost 50% people
var addTwoNumbers = function(l1, l2) {
    var list = new ListNode(0);
    var result = list;
    var sum,carry = 0;
    while(l1 || l2 || carry > 0){
        sum = 0;
        if(l1!== null){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum += l2.val;
            l2 = l2.next;
        }
        sum += carry;
        list.next = new ListNode(sum%10);
        carry = parseInt(sum/10);
        list = list.next;
    }
    return result.next;
}


// use recursion nearly 212ms 性能差不多；
var addTwoNumbers = function(l1, l2) {
    var list = new ListNode(0);
    var result = list;
    add(l1,l2,0);
    return result.next;

    function add(l1,l2,gap){
        var sum = 0;
        if(l1 === null && l2 === null && gap === 0){
            return 0;
        }

        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }
        sum += gap;
        list.next = new ListNode(sum%10);
        gap = parseInt(sum/10);
        list = list.next;
        add(l1,l2,gap);
    }
};

function ListNode(val){
    this.val = val;
    this.next = null;
}

// test ！！！
let l1 = new ListNode(1);
let l2 = new ListNode(2);
console.log(addTwoNumbers(l1, l2));