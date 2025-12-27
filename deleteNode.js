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

MyLinkedList.prototype.getNodeAtIndex=function(index){
    if(index<0 || index>=this.size){
        return -1;
    }
    let current=this.head,count=0;
    while(count<index){
        current=current.next;
        count++;
    }
    return current.value;
}

MyLinkedList.prototype.deleteNodeAtIndex=function(index){
    if(index<0 || index>=this.size){
        return;
    }else{
        if(index===0){
            this.head=this.head.next;
            this.size--;
            return;
        }
        let current=this.head,count=0;
        while(count<index-1){
            current=current.next;
            count++;
        }
        current.next=current.next.next;
        this.size--;
    }
}