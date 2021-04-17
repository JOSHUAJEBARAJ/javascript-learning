## Call back

basically tells what to do after the async function execution

## Chapter-1.04

Callback --> function passed as paramter to the 

```
function get(url,callback){

    xhr.open("GET",url)
    xhr.send()
    xhr.onload=function(){
        console.log(xhr.status)
    callback(xhr.responseText)
}
}
```


```
 get(url,successHandler)
```
