## Promises

Promise has two property
- State --> pending fulfillied rejected
- result --> undefined value error

resolve
```
On success
state = fullfilled 
result = value
```

reject
```
on failure
state = rejected
result = error
```

- Promises are returned 
- with new constructor taking anonymouys function as the argument and that function has resolve reject

## Handling the response

Think the handler response in the reverse way we are getting the result and passing to the anoymous function

3 step
--
    |
    V
```
get(url).then(function(response){
success(result)
})
```

### Rejected
```
  get(url).
    then(function(result){
successHandler(result)
    })
    .catch(function(reject){
        failHandler(reject)
    })
```

###  finally
```
 get(url).
    then(function(result){
successHandler(result)
    })
    .catch(function(reject){
        failHandler(reject)
    })
    .finally(function(){
        console.log("TEst")
    })
```