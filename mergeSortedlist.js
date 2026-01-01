const mergeSortedList=(l1,l2)=>{
  if(!l1) return l2;
  if(!l2) return l1;
  let start= new ListNode(0);
  let current=start;
  while(l1 && l2){
    if(l1.value<l2.value){
        current.next=l1;
        l1=l1.next;
    }else{
        current.next=l2;
        l2=l2.next;
    }
    current=current.next;
  }
  if(l1) current.next=l1;
  if(l2) current.next=l2;
  return start.next;
}