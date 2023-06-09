const data = [
  {
    name: "React JS",
    id: 1,
    imageSrc:
      "https://th.bing.com/th/id/OIP.z73sRumf-85R0GgrVRhS5gHaDF?pid=ImgDet&rs=1",
    skillRating: 70,
  },
  {
    name: "JavaScript",
    id: 2,
    imageSrc: "https://wallpapercave.com/wp/wp2465927.jpg",
    skillRating: 70,
  },
  {
    name: "Html/Css",
    id: 3,
    imageSrc:
      "https://www.codentricks.com/wp-content/uploads/2012/07/html5-css-640x350.png",
    skillRating: 80,
  },
  // {
  //   name: "React Native",
  //   id: 4,
  //   imageSrc: "https://wallpapercave.com/wp/wp6953020.jpg",
  //   skillRating: 70,
  // },
  // {
  //   name: "Node JS",
  //   id: 5,
  //   imageSrc:
  //     "https://th.bing.com/th/id/OIP.aPNnDXsjoLGMFiOkbE_pfwHaD4?pid=ImgDet&rs=1",
  //   skillRating: 90,
  // },
  {
    name: "BootStrap",
    id: 6,
    imageSrc: "https://www.codentricks.com/wp-content/uploads/2018/06/bootstrap-500x360.png",
    skillRating: 60,
  },
  {
    name: "GitHub",
    id: 7,
    imageSrc: "https://www.teahub.io/photos/full/149-1499935_github-logo.jpg",
    skillRating: 60,
  },
  {
    name: "Material-UI",
    id: 8,
    imageSrc:
      "https://th.bing.com/th/id/OIP._mdpsmNUZ05vQb-q09t3jAHaDc?w=336&h=163&c=7&r=0&o=5&pid=1.7",
    skillRating: 50,
  },
  {
    name: "Redux",
    id: 9,
    imageSrc:
      "data:image/jpeg;base64,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VjbdSQYdUS5HP0yGN/u+sud39RjHfS46a3Y/eqySTkkknxO/71ZGfj07rj7/AHlLyrHtDqTXGGMd3SsBI2a4t0xtH6LfFUU9P8Me+Sacajn0Q4GVx6nPh/8AeC0kVduXOS8TkjcR8e0I+e57dF9rlB9GVpH6bS0/Zss47boGqeUaQcnSNI97nLniepaMNmlA6B7h/FZBz3jL3Occ/KJP71Oc3Gj6op3/AC75U/w3qmrjbEYKbAbpLS4ZAA+az+JXLVrvVd7FUs2bNbNO7ITMzIiIqXBERAREQEREBERBClEQEREBERAREQEREBERAUKUQEREBERBCyHJQpHJBbusS3KxDyNvBWAg8kFRBHNQrsA81WWfNQYohBHMIgK0DAAWDRk58MqxBi/1T57KtZPO+OixQEREBERAREQEREBERBClQpQEREBERAREQEREEKVClAUKVCCUREBERBCyHJYrIckEKQSNwsVKCwPB8islSpBI5FBbhMDoFXr6hTrHT7UGaxLsDz8FiXk8tliUDnv1REQEREBERAREQEREBERARQpQEREBERAREQEREBFClARFCCUREBERAUjksVYxj3DLQSM4Qf/Z",
    skillRating: 50,
  },
];

export { data };
