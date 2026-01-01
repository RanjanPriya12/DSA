
const oddEvenList=(head)=>{
    if(!head || !head.next) return head;
    const odd= head,even=head.next;
    const evenStart=even;
    while(odd && odd.next && even && even.next ){
        odd=odd.next.next;
        even=even.next.next;
    }
    odd.next=evenStart;
    return head;
}