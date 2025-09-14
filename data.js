const familyData = [
  { 
    id: 1, 
    pids: [2,3], 
    name: "りん", 
    gender: "female", 
    born: "2017/08/23", 
    locate: "東山動植物園",
    photo: ""
  },
  { 
    id: 2, 
    pids: [1], 
    name: "イシン", 
    gender: "male", 
    born: "2021/05/14", 
    locate: "東山動植物園",
    photo: ""
  },
  { 
    id: 3, 
    pids: [1], 
    name: "タイチ", 
    gender: "male", 
    born: "2012/05/03", 
    locate: "東山動植物園",
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
    locate: "平川動物公園",
    photo: ""
  },
  { 
    id: 4, 
    mid: 1, 
    fid: 3, 
    name: "だいふく", 
    gender: "male", 
    born: "2022/03/14", 
    locate: "東山動植物園",
    photo: ""
  },
  { 
    id: 5, 
    mid: 1, 
    fid: 2, 
    name: "もなか", 
    gender: "male", 
    born: "2023/10/20", 
    locate: "東山動植物園",
    photo: ""
  },
  { 
    id: 6, 
    pids: [3], 
    name: "ライト", 
    gender: "male", 
    born: "2021/05/14", 
    locate: "平川動物公園",
    photo: ""
  },
  { 
    id: 7, 
    mid: 3, 
    fid: 6, 
    name: "スミレ", 
    gender: "female", 
    born: "2024/09/11", 
    locate: "平川動物公園",
    photo: ""
  }
];

// グローバルスコープで利用可能にする
window.familyData = familyData;