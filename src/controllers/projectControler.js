const insertData = require("../service/insertData");

let data = [];

// Menampilkan halaman proyek
function getProjects(req, res) {
  res.render("myProject", { data });
}

// Menampilkan halaman penambahan proyek
function addProjectGet(req, res) {
  res.render("addProject");
}

// Menambahkan proyek
function addProjectPost(req, res) {
  let body = req.body;
  let datum = insertData(body);
  if (datum !== undefined) {
    data.unshift(datum);
    res.redirect("/project");
  }
}

// Menampilkan halaman edit proyek
function editProjectGet(req, res) {
  let id = parseInt(req.params.id);
  let datum = data[id];
  res.render("editProject", { datum, id });
}

// Mengedit proyek
function editProjectPost(req, res) {
  let body = req.body;
  let datum = insertData(body);
  let id = parseInt(req.params.id);
  if (datum !== undefined) {
    data.splice(id, 1, datum);
    res.redirect("/project");
  }
}

// Menghapus proyek
function deleteProjectPost(req, res) {
  let id = parseInt(req.params.id);
  data.splice(id, 1);
  res.redirect("/project");
}

// Menampilkan halaman detail proyek
function viewProjectGet(req, res) {
  let id = parseInt(req.params.id);
  let datum = data[id];
  res.render("detilProject", { datum });
}

// Objek untuk mengekspor fungsi-fungsi
const projectController = {
  get: getProjects,
  add: {
    get: addProjectGet,
    post: addProjectPost
  },
  edit: {
    get: editProjectGet,
    post: editProjectPost
  },
  del: {
    post: deleteProjectPost
  },
  view: {
    viewProjectGet: viewProjectGet
  }
};

module.exports = projectController;
