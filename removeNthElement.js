const removeElement=(head,position)=>{
    if(!head) return null;
    let sentinalNone= new Node();
    sentinalNone.next=head;
    let current=sentinalNone;
    let index=0;
  while(current && current.next){
    index++;
    if(index===position){
        current.next=current.next.next;
        break;
    }
    else{
        current=current.next;
    }
  }
  return sentinalNone.next;
}