let is_ok = true

let CustomFetch = (time, array) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (is_ok) {
                resolve(array)
            } else {
                reject("Error reading data")
            }
        }, time)
    })
}

export default CustomFetch