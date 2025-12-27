
function MyLinkedList(){
    this.head=null;
    this.size=0;
}
function Node(value){
    this.value=value;
    this.next=null;
}

const addNodeAtHead=function(value){
    const newNode = new Node(5);
    newNode.next= this.head;
    this.head=newNode;
    this.size++;

}

const addNewNodeAtTail=function(value){
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
}