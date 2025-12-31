const removeNthElementFromEnd=(head,position)=>{
    if(!head) return null;
    let sentinalNone= new Node();
    sentinalNone.next=head;
    let current=sentinalNone;
    let count=0;
    while(current && current.next){
        current=current.next;
        count++;
    }
    let index=count-position;
    for(let i=0;i<index;i++){
        sentinalNone=sentinalNone.next;
    }
    sentinalNone.next=sentinalNone.next.next;
    return head;
}