let data = [
  {
    id: 1,
    title: "Setup project structure",
    status: "Todo",
  },
  {
    id: 2,
    title: "Design basic UI layout",
    status: "Doing",
  },
  {
    id: 3,
    title: "Create task data model",
    status: "Todo",
  },
  {
    id: 4,
    title: "Implement add task feature",
    status: "Done",
  },
  {
    id: 5,
    title: "Fix navbar responsiveness",
    status: "Todo",
  },
];
const containerTodo = document.querySelector(".containerTodo");
const containerDoing = document.querySelector(".containerDoing");
const containerDone = document.querySelector(".containerDone");
const lightMode = document.querySelector(".sunIcon");
const moonMode = document.querySelector(".moonIcon");
const mainContainer = document.querySelectorAll(".main-container");

let Mode = localStorage.getItem("mode");
if (Mode === "dark") {
  darkMode();
} else {
  lightModefn()
}

let savedData = localStorage.getItem("keys");
if (savedData) {
  data = JSON.parse(savedData);
}

containerTodo.dataset.status = "Todo";
containerDoing.dataset.status = "Doing";
containerDone.dataset.status = "Done";

[containerTodo, containerDoing, containerDone].forEach((container) => {
  new Sortable(container, {
    group: "kanban",
    animation: 150,

    onEnd: function (evt) {
      const id = Number(evt.item.dataset.id);

      let dropContainer = evt.to.closest(
        ".containerTodo, .containerDoing, .containerDone",
      );

      let newStatus = "";

      if (dropContainer.classList.contains("containerTodo")) newStatus = "Todo";
      else if (dropContainer.classList.contains("containerDoing"))
        newStatus = "Doing";
      else newStatus = "Done";

      let task = data.find((t) => t.id == id);
      if (task) task.status = newStatus;

      saveData();
      updateUI();
    },
  });
});

function updateUI() {
  containerTodo.innerHTML = "";
  containerDoing.innerHTML = "";
  containerDone.innerHTML = "";

  data.forEach((el) => {
    const card = createElements(el.title, el.status, el.id);

    if (el.status === "Todo") containerTodo.append(card);
    else if (el.status === "Doing") containerDoing.append(card);
    else containerDone.append(card);
  });
}

function createElements(title, status, id) {
  const div = document.createElement("div");
  div.classList.add("boxStyle");
  div.setAttribute("data-id", id);
  const list = document.createElement("p");
  list.classList.add("title");
  list.textContent = title;
  div.appendChild(list);
  createBtn(list, status, id);
  return div;
}
function createBtn(list, status, id) {
  if (status == "Todo") {
    const doingBtn = document.createElement("button");
    const doneBtn = document.createElement("button");
    doingBtn.classList.add("btnStyle");
    doneBtn.classList.add("btnStyle");
    doingBtn.textContent = "Doing";
    doneBtn.textContent = "Done";
    list.append(doingBtn, doneBtn);

    doingBtn.addEventListener("click", () => {
      let task = data.find((el) => el.id == id);
      task.status = "Doing";
      updateUI();
      saveData();
    });

    doneBtn.addEventListener("click", () => {
      let doneTask = data.find((el) => el.id == id);
      doneTask.status = "Done";
      updateUI();
      saveData();
    });
  } else if (status === "Done") {
    const dlt = document.createElement("button");
    dlt.classList.add("btnStyle");
    dlt.textContent = "Delete";
    list.append(dlt);

    dlt.addEventListener("click", (e) => {
      let dltTask = data.filter((el) => el.id !== id);
      data = dltTask;
      updateUI();
      saveData();
    });
  } else if (status == "Doing") {
    const DoneBtn = document.createElement("button");
    DoneBtn.classList.add("btnStyle");
    DoneBtn.textContent = "Done";
    list.append(DoneBtn);

    DoneBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      let doneTask = data.find((el) => el.id == id);
      doneTask.status = "Done";
      updateUI();
      saveData();
    });
  }
}

function addTask() {
  const button = document.querySelector(".btn");
  button.addEventListener("click", () => {
    let input = document.querySelector(".inputValue");
    if (input.value == "") return;
    const obj = {
      id: Date.now(),
      title: input.value,
      status: "Todo",
    };
    data.push(obj);
    input.value = "";
    updateUI();
    saveData();
  });
}

function saveData() {
  localStorage.setItem("keys", JSON.stringify(data));
}

updateUI();
addTask();

lightMode.addEventListener("click", () => {
  localStorage.setItem("mode", "light");
  lightModefn()
});

moonMode.addEventListener("click", (e) => {
  localStorage.setItem("mode", "dark");
  darkMode()
});

function lightModefn() {
  moonMode.classList.remove("hidden");
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  lightMode.classList.add("hidden");
  mainContainer.forEach((el) => {
    el.style.backgroundColor = "white";
  });

}

function darkMode() {
  moonMode.classList.add("hidden");
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  lightMode.classList.remove("hidden");
  mainContainer.forEach((el) => {
    el.style.backgroundColor = "black";
  });

}