class Node {
    constructor(value = "") {
        this.value = value;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(string) {
        let currenNode = this.root;

        for (const char of string) {
            if(!currenNode.children.has(char)) {
                currenNode.children.set(
                    char,
                    new Node(currenNode.value + char)
                );
            }

            currenNode = currenNode.children.get(char);
        }
    }
    has(string) {
        let currenNode = this.root;

        for(const char of string) {
            if(!currenNode.children.has(char)){
                return false;
            }
            currenNode = currenNode.children.get(char);
        }

        return true;
    }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");
console.log(trie.has("cat")); // true
console.log(trie.has("can")); // true
console.log(trie.has("cap")); // false