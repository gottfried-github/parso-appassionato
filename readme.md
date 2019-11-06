# meta
The function of the parser is to establish a relation between a certain syntactic structure and the semantic structure of tree.
In a closed **syntactic structure**, there should be *an even number of open and close tokens*. Every opening token should at some point be succeeded by one closing token (every closing token should at some point be preceeded by one opening token). **Semantic structure** consists of *nodes*, possibly containing other nodes. A syntactic representation of one node is a valid syntactic structure, where *the first token is an opening token, the last token is a closing token*, and *everything in between is a valid syntactic structure*.

# parseNodes, closeNode
**closeNode** seeks for a first-occuring closing token: if it finds such, it returns the rest of the sequence; else, it passes the sequence to the `parseNodes` callback which it pipes to the `closeNode` callback which it returns the result of;

**parseNodes** seeks for first-occuring opening token. If it finds such, it passes the rest of the sequence to the `closeNode` callback, which is then piped to `parseNodes`.

If the effect of `closeNode` is to remove more closing tokens than opening ones by one token, then the call to it can be interpreted by the user of `parseNodes` as corresponding to one *node*.
