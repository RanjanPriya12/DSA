function MyLinkedList(){
    this.head=null;
    this.size=0;
}
function Node(value){
    this.value=value;
    this.next=null;
}

MyLinkedList.prototype.addNodeAtHead=function(value){
    const newNode = new Node(5);
    newNode.next= this.head;
    this.head=newNode;
    this.size++;

}
MyLinkedList.prototype.addNewNodeAtTail=function(value){
    const newNode=new Node(10);
    if(!this.head){
        this.head=newNode;
    }else{
        let current = this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newNode;
    }
    this.size++;
}


MyLinkedList.prototype.addNewNodeAtIndex=function(index,value){
    if(index<0 || index>this.size){
        return;
    }
    if(index===0){
        this.addNodeAtHead(value);
        return;
    }else if(index===this.size){
        this.addNewNodeAtTail(value);
    }
    else{
        const newNode = new Node(value);
        let current=this.head,count=0;
        while(count<index-1){
            current=current.next;
            count++;
        }
        newNode.next=current.next;
        current.next=newNode;
        this.size++;
    }
}


// New method to find the middle node of the linked list
MyLinkedList.prototype.getMiddleNode=function(){
    if(!this.head){
        return null;
    }
    let slow=this.head,fast=this.head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow.value;
}