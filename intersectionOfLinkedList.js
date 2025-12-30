const getIntersectionNode=(headA,headB)=>{
    const set=new Set();
    let currentA=headA;
    while(currentA){
        set.add(currentA);
        currentA=currentA.next;
    }

    let currentB=headB;
    while(currentB){
        if(set.has(currentB)){
            return currentB
        }
        currentB=currentB.next;
    }
}

