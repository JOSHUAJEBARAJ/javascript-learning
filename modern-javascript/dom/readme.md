## Dom

created by the browser
 It is the document

 First element is html  last element is text node 

 - What is the difference between the document.queryselectorall and document.getElementsByClassName

The former return the nodearray where the latter return the HTml collection

- What is the difference between css selector and javascript selector 

- inner text vs text content
```
innerText returns the visible text contained in a node, while textContent returns the full text. For example, on the following HTML <span>Hello <span style="display: none;">World</span></span>, innerText will return 'Hello', while textContent will return 'Hello World'.```
https://stackoverflow.com/questions/35213147/difference-between-textcontent-vs-innertext

- javascript event bubbling

Bubbling occurs when we attach the eventlistner to the child element the event listner of the parents will also get called
Refer bubble.js

- Delegation
DOM event delegation is a mechanism of responding to ui-events via a single common parent rather than each child, through the magic of event "bubbling" (aka event propagation).

