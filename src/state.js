export const state = {
  postsData: [
    {
      id: 1,
      title: "The new Post",
      body: "This is the body of the post!",
      likesCount: 99,
    },
    {
      id: 2,
      title: "The old Post",
      body: "This is the body of the post!",
      likesCount: 20,
    },
    {
      id: 3,
      title: "The newiest Post",
      body: "This is the body of the post!",
      likesCount: 5,
    },
  ],

  dialogData: [
    { id: 1, name: "Abdulaziz" },
    { id: 2, name: "Abdulmalik" },
    { id: 3, name: "Abdulhafiz" },
    { id: 4, name: "Abdulmanon" },
    { id: 5, name: "Abdurasul" },
    { id: 6, name: "Aziz" },
  ],

  messageData: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hi" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "Iam good!" },
  ],
};

export const addPost = (title, body) => {
  if (title == "" && body == " ") {
    alert("Post can not be empty");
    return;
  }
  const newPost = {
    id: state.postsData.length + 1,
    title: title,
    body: body,
    likesCount: 0,
  };
  state.postsData.push(newPost);
  console.log("New Post added: ", newPost);
};
