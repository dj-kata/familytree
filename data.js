// family-data.js
const familyData = [
  { 
    id: 1, 
    pids: [2], 
    name: "りん", 
    gender: "female", 
    born: "2017/08/23", 
    photo: ""
  },
  { 
    id: 2, 
    pids: [1], 
    name: "イシン", 
    gender: "male", 
    born: "2021/05/14", 
    photo: ""
  },
  { 
    id: 3, 
    mid: 1, 
    fid: 2, 
    pids: [4], 
    name: "つくし", 
    gender: "female", 
    born: "2020/09/03", 
    photo: ""
  },
  { 
    id: 4, 
    pids: [3], 
    name: "ライト", 
    gender: "male", 
    born: "2021/05/14", 
    photo: ""
  },
  { 
    id: 5, 
    mid: 3, 
    fid: 4, 
    name: "スミレ", 
    gender: "female", 
    born: "2024/09/11", 
    photo: ""
  }
];

// グローバルスコープで利用可能にする
window.familyData = familyData;