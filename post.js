const data = {
    userId: 11,
    id: 101,
    title: "Hello Developers.",
    body: "Hello Developers I'm a Hacker! You guys are hacked Hahaha!"
}

console.log(data);

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
        'Counter-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
  console.log('Succes:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
