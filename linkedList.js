
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
    }else{
        const newNode = new Node(value);
        let current=this.head,previous=null,count=0;
        while(count<index){
            previous=current;
            current=current.next;
            count++;
        }
        newNode.next=current;
        previous.next=newNode;
        this.size++;
    }
}