const rotateList=(head,k)=>{
    if(!head || !head.next|| k===0) return head;
    let length=1;
    let tail=head;
    while(tail.next){
        tail=tail.next;
        length++;
    }
    k=k%length;
    if(k===0) return head;
    let slow=head,fast=head;
    while(k>0){
        fast=fast.next;
        k--;
    }
    while(fast.next){
        slow=slow.next;
        fast=fast.next;
    }
    let newHead=slow.next;
    slow.next=null;
    fast.next=head;
    return newHead;
}