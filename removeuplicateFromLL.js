const removeDuplicateFromLL=(head)=>{
    if(!head) return null;
    let current=head;
    while(current){
        if(current.next && current.value===current.next.value){
            current.next=current.next.next;
        }
        else{
            current=current.next;
        }
    }
    return head;
}