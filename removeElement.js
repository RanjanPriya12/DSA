const removeElement=(head,value)=>{
    if(!head) return null;
    let sentinalNone=new Node();
    sentinalNone.next=head;
    while(sentinalNone.next && sentinalNone.next.next){
        if(sentinalNone.next.val===value){
            sentinalNone.next=sentinalNone.next.next;
        }
        else{
            sentinalNone=sentinalNone.next;
        }
    }
    return sentinalNone.next;
}