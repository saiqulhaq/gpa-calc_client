module.exports = function(app) {
  var express = require('express');
  var importRouter = express.Router();

  importRouter.get('/', function(req, res) {
    res.send({
      'import': {
        "gpa":3.7,
        "totalCourses":54,
        "totalCreditHours":148,
        "totalQualityPoints":547.0,
        "gradePointValue":[
          {"id":1,"letter":"A","point":4},{"id":2,"letter":"B","point":3},{"id":3,"letter":"C","point":2},{"id":4,"letter":"D","point":1},{"id":5,"letter":"E","point":0}],"data":[{"semesterName":"Semester 1","courses":[{"courseName":"PENDIDIKAN DAN KEWARGANEGARAAN","creditHour":2,"grade":2},{"courseName":"PRAK QIROAH","creditHour":0,"grade":1},{"courseName":"PRAKTEK IBADAH","creditHour":0,"grade":1},{"courseName":"PENGANTAR BISNIS","creditHour":2,"grade":1},{"courseName":"STUDI ISLAM","creditHour":4,"grade":1},{"courseName":"BAHASA INDONESIA","creditHour":2,"grade":2},{"courseName":"BAHASA ARAB","creditHour":4,"grade":1},{"courseName":"FILSAFAT SAINS DAN KONSEP TEKNOLOGI","creditHour":2,"grade":1},{"courseName":"BAHASA INGGRIS","creditHour":4,"grade":1}]},{"semesterName":"Semester 2","courses":[{"courseName":"KONSEP SISTEM INFORMASI","creditHour":2,"grade":1},{"courseName":"PENGANTAR SISTEM INFORMASI GEOGRAFIS","creditHour":2,"grade":2},{"courseName":"AKUNTANSI","creditHour":3,"grade":1},{"courseName":"SISTEM BASIS DATA","creditHour":4,"grade":2},{"courseName":"ALGORITMA","creditHour":3,"grade":1},{"courseName":"PRAKTIKUM SISTEM BASIS DATA","creditHour":0,"grade":1},{"courseName":"SISTEM OPERASI","creditHour":2,"grade":1},{"courseName":"PRAKTIKUM AKUNTANSI","creditHour":1,"grade":2},{"courseName":"SISTEM MULTIMEDIA","creditHour":2,"grade":2},{"courseName":"PRAKTIKUM SISTEM MULTIMEDIA","creditHour":0,"grade":2},{"courseName":"PRAKTIKUM ALGORITMA","creditHour":0,"grade":1},{"courseName":"ALJABAR LINEAR","creditHour":2,"grade":1}]},{"semesterName":"Semester 3","courses":[{"courseName":"MATEMATIKA DISKRIT","creditHour":4,"grade":2},{"courseName":"STATISTIKA DAN PROBABILITAS","creditHour":3,"grade":1},{"courseName":"IT INFRASTRUCTURE","creditHour":4,"grade":3},{"courseName":"DASAR-DASAR EKONOMI ISLAM","creditHour":2,"grade":1},{"courseName":"SISTEM INFORMASI MANAJEMEN","creditHour":3,"grade":1},{"courseName":"MANAGEMENT SCIENCE","creditHour":3,"grade":2},{"courseName":"BUSINESS PROCESS MANAGEMENT","creditHour":3,"grade":3}]},{"semesterName":"Semester 4","courses":[{"courseName":"DASAR-DASAR PEMROGRAMAN","creditHour":4,"grade":1},{"courseName":"AUDIT SISTEM INFORMASI","creditHour":3,"grade":1},{"courseName":"ANALISIS DAN PERANCANGAN SISTEM INFORMASI","creditHour":6,"grade":1},{"courseName":"DATA MINING DAN WAREHOUSE","creditHour":6,"grade":1},{"courseName":"SISTEM PENUNJANG KEPUTUSAN DAN SISTEM CERDAS","creditHour":4,"grade":1}]},{"semesterName":"Semester 5","courses":[{"courseName":"PENELUSURAN KEMBALI SISTEM INFORMASI","creditHour":3,"grade":1},{"courseName":"APLIKASI SIG","creditHour":3,"grade":2},{"courseName":"SISTEM INFORMASI AKUNTANSI","creditHour":2,"grade":1},{"courseName":"PRAKTIK SISTEM INFORMASI AKUNTASI","creditHour":1,"grade":1},{"courseName":"ARSITEKTUR ENTERPRISE","creditHour":4,"grade":1},{"courseName":"REKAYASA PERANGKAT LUNAK","creditHour":3,"grade":2},{"courseName":"MANAJEMEN PROYEK SISTEM INFORMASI","creditHour":3,"grade":1},{"courseName":"KECAKAPAN ANTAR PERSONAL","creditHour":2,"grade":1},{"courseName":"INTERAKSI MANUSIA DAN KOMPUTER","creditHour":2,"grade":1}]},{"semesterName":"Semester 6","courses":[{"courseName":"CUSTOMER RELATIONSHIP MANAGEMENT","creditHour":3,"grade":1},{"courseName":"PERENCANAAN STRATEGI SISTEM INFORMASI","creditHour":3,"grade":2},{"courseName":"ETIKA PROFESI","creditHour":2,"grade":1},{"courseName":"SUPPLY CHAIN MANAGEMENT","creditHour":3,"grade":1},{"courseName":"IT SECURITY DAN MANAJEMEN RESIKO","creditHour":4,"grade":1},{"courseName":"SISTEM ENTERPRISE","creditHour":6,"grade":1}]},{"semesterName":"Semester 7","courses":[{"courseName":"SISTEM BASIS DATA SPASIAL","creditHour":3,"grade":1},{"courseName":"METODOLOGI PENELITIAN","creditHour":2,"grade":2},{"courseName":"MANAJEMEN PENGETAHUAN","creditHour":3,"grade":1},{"courseName":"KULIAH KERJA NYATA (KKN)","creditHour":3,"grade":1},{"courseName":"PROYEK MINOR SISTEM INFORMASI","creditHour":4,"grade":1},{"courseName":"PRAKTEK KERJA LAPANGAN (PKL)","creditHour":3,"grade":1}]}
        ],
        "processStatus":true
      }
    });
  });

  importRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  importRouter.get('/:id', function(req, res) {
    res.send({
      'import': {
        id: req.params.id
      }
    });
  });

  importRouter.put('/:id', function(req, res) {
    res.send({
      'import': {
        id: req.params.id
      }
    });
  });

  importRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/import', importRouter);
};
