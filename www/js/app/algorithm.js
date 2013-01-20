// mimic character array
function reverse(str) {
	var strLength = str.length,
		lastIndex = strLength - 1,
		midCount = strLength / 2,
		tmpChar,
		newStr = [strLength];
	for (var i = 0; i < midCount; i++) {
		newStr[i] = str[lastIndex - i];
		newStr[lastIndex - i] = str[i];
	}
	return newStr.join('');
}

// tree

function node(root) {
	this.text = root;
	this.left = null;
	this.right = null;
}

function createTree() {
	var node1 = new node(1),
		node2 = new node(2),
		node3 = new node(3),
		node4 = new node(4),
		node5 = new node(5),
		node6 = new node(6);
		
	node1.left = node2;
	node2.left = node3;
	node2.right = node4;
	node1.right = node5;
	node5.left = node6;
	
	return node1;
}

var _list = [];
function addToList(node) {
	_list.push(node.text);
}

function preOrder(node) {
	if (node === null) {
		return;
	}
	addToList(node);
	preOrder(node.left);
	preOrder(node.right);
}

function inOrder(node) {
	if (node === null) {
		return;
	}
	inOrder(node.left);
	addToList(node);
	inOrder(node.right);
}

function postOrder(node) {
	if (node === null) {
		return;
	}
	postOrder(node.left);
	postOrder(node.right);
	addToList(node);
}


var root = createTree();
_list = [];
preOrder(root);
console.log(_list);
_list = [];
inOrder(root);
console.log(_list);
_list = [];
postOrder(root);
console.log(_list);