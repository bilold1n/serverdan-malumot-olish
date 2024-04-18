const product = document.querySelector("#productList");
const loader = document.querySelector("#loader");
const erorel = document.querySelector("#eror");
const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
function crattodos(todoarr) {
  todoarr.forEach(({ id, userId, title, body }) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.innerHTML = `
   
    <p> ID:${id}</p>
    <p>${title}</p>
    <p>body: ${body}</p>;
    <p>User:${userId}</p>`;
    product.appendChild(li);
  });
}
btn.addEventListener("click", () => {
  loader.classList.remove("hidden");
  product.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      loader.classList.add("hidden");
      crattodos(data.slice(0, 20));
    })
    .catch((eror) => {
      loader.classList.add("hidden");
      erorel.classList.remove("hidden");
    });
});
////////
function crattodos1(todoarr) {
  todoarr.forEach(({ postId, id, name, email, body }) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.innerHTML = `
    <p>PostId:${postId}</p>
    <p>ID:${id}</p>
    <p>${name}</p>
    <p>Email:${email}</p>
    <p>body: ${body}</p>`;
    product.appendChild(li);
  });
}
btn1.addEventListener("click", () => {
  loader.classList.remove("hidden");
  product.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => {
      loader.classList.add("hidden");
      crattodos1(data.slice(0, 25));
    })
    .catch((eror) => {
      loader.classList.add("hidden");
      erorel.classList.remove("hidden");
    });
});
//////////////////////
function crattodos2(todoarr) {
  todoarr.forEach(({ userId, id, title }) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.innerHTML = `
    <p>UserId:${userId}</p>
    <p>ID:${id}</p>
    <p>${title}</p>`;
    product.appendChild(li);
  });
}
btn2.addEventListener("click", () => {
  loader.classList.remove("hidden");
  product.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res) => res.json())
    .then((data) => {
      loader.classList.add("hidden");
      crattodos2(data.slice(0, 15));
    })
    .catch((eror) => {
      loader.classList.add("hidden");
      erorel.classList.remove("hidden");
    });
});
///////////////////
function crattodos3(todoarr) {
  todoarr.forEach(({ albumId, id, title, thumbnailUrl }) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.innerHTML = `
    <p>AlbumId:${albumId}</p>
    <p>ID:${id}</p>
    <p>${title}</p>
    <img class="k" src =${thumbnailUrl}/>`;
    product.appendChild(li);
  });
}
btn3.addEventListener("click", () => {
  loader.classList.remove("hidden");
  product.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => {
      loader.classList.add("hidden");
      crattodos3(data.slice(0, 15));
    })
    .catch((eror) => {
      loader.classList.add("hidden");
      erorel.classList.remove("hidden");
    });
});
////////////////////////
function crattodos4(todoarr) {
  todoarr.forEach(({ userId, id, title, completed }) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.innerHTML = `
    <p>UserId:${userId}</p>
    <p>ID:${id}</p>
    <p>${title}</p>
    <p>Completed:${completed}</p>`;
    product.appendChild(li);
  });
}
btn4.addEventListener("click", () => {
  loader.classList.remove("hidden");
  product.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => {
      loader.classList.add("hidden");
      crattodos4(data.slice(0, 15));
    })
    .catch((eror) => {
      loader.classList.add("hidden");
      erorel.classList.remove("hidden");
    });
});
/////////////////////
function crattodos5(todoarr) {
  todoarr.forEach(
    ({ id, name, username, email, address, phone, website, company }) => {
      const li = document.createElement("li");
      li.classList.add("item");
      li.innerHTML = `
    <p>Id:${id}</p>
    <p>Name:${name}</p>
    <p>Username${username}</p>
    <p>Email:${email}</p>
    <p>${"Address:"}{</p>
    <p>Street:${address.street}</p>
    <p>Suite${address.suite}</p>
    <p>City:${address.city}</p>
    <p>Zipcode:${address.zipcode}</p>{
    <p>Geo lat:${address.geo.lat}</p>
    <p>Geo lng:${address.geo.lng}</p>}}
    <p>Phone:${phone}</p>
    <p>Website:${website}</p>
    <p>${"company"}{</p>
    <p>company name:${company.name}</p>
    <p>company catchPhrase:${company.catchPhrase}</p>
    <p>company bs:${company.bs}</p>}
    `;
      product.appendChild(li);
    }
  );
}
btn5.addEventListener("click", () => {
  loader.classList.remove("hidden");
  product.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      loader.classList.add("hidden");
      crattodos5(data);
    })
    .catch((eror) => {
      loader.classList.add("hidden");
      erorel.classList.remove("hidden");
    });
});
