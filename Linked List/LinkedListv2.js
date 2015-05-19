function LinkedList(){  
  this.head = null;
}


LinkedList.prototype.push = function(val){
    var node = {
        value: val,
        next: null
    };
    if(!this.head){
        this.head = node;      
    }
    else{
        current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }
};

LinkedList.prototype.remove = function(val){
    var current = this.head;
    //case-1
    if(current.value == val){
        this.head = current.next;     
    }
    else{
        var previous = current;

        while(current.next){
            //case-3
            if(current.value == val){
                previous.next = current.next;          
                break;
            }
            previous = current;
            current = current.next;
        }
        //case -2
        if(current.value == val){
            previous.next == null;
        }
    }
};


function reversesll(sll){
    if(!sll.head || !sll.head.next) return sll;

    var nodes=[], 
    current = sll.head;
    //storing all the nodes in an array
    while(current){
        nodes.push(current);
        current = current.next;
    }

    var reversedLL = new LinkedList();

    reversedLL.head = nodes.pop();
    current = reversedLL.head;

    var node = nodes.pop();  
    //make sure to make next of the newly inserted node to be null
    //other wise the last node of your SLL will retain its old next.
    while(node){
        node.next = null;
        current.next = node;

        current = current.next;
        node = nodes.pop();
    }
    return reversedLL;
}