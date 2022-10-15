const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootA = null;
  }

  root() {
    return this.rootA;
  }

  add(data) {
    let newData = new Node(data);
    if (this.rootA === null) {
      this.rootA = newData;
      return this;
    }
    let current = this.rootA;
    const loop = true;
    while (loop) {
      if (data === current.data) {return null};
      if (data < current.data) {
        if (!current.left) {
          current.left = newData;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newData;
          return this;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    if (this.rootA === null) {
      return null;
    }
    let current = this.rootA;
    const search = true;
    while (search) {
      if (!current) return false;
      if (data === current.data) return true;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  find(data) {
    if (this.rootA === null) {
    return null;
    }
    let current = this.rootA;
    const search = true;
    while (search) {
      if (!current) return null;
      if (data === current.data) return current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  remove(data) {
    this.rootA = this.removeN(this.rootA, data);
  }

  removeN(node, key) {
    if (!node) {
      return null;
    }
    if (key < node.data) {
      node.left = this.removeN(node.left, key)
      return node;
    } else if (key > node.data) {
      node.right = this.removeN(node.right, key)
      return node;
    } else {
      if (node.left == null && node.right == null) {
        return null;
      }
      if (node.left == null) {
        node = node.right;
        return node;
      }
      else if (node.right == null) {
        node = node.left;
        return node;
      }

      let rightMin = node.right;
      while (rightMin.left) {
        rightMin = rightMin.left;
      }
      node.data = rightMin.data;
      node.right = this.removeN(node.right, rightMin.data);
      return node;
    }
  }

  min() {
    if (!this.rootA) {
      return;
    }
    let current = this.rootA;
    while (current.left) {
      current = current.left
    }
    return current.data;
  }

  max() {
    if (!this.rootA) {
      return;
    }
    let current = this.rootA;
    while (current.right) {
      current = current.right
    }
    return current.data;
  }
}
// npm run test
module.exports = {
  BinarySearchTree
};