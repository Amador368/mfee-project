import Post from '../models/post';
import Comment from '../models/comment';

const posts:Post[] = [];
const comments:Comment[] = [];

export const getPost = (id: string) => {
	return posts.find((p) => p.id === id);
};

//get all posts
const getPosts = (req, res) => {
    res.status(200).json(posts);
}

// Get post by id
const getPostById = (req, res) => {
    const { id } = req.params;
    const post = getPost(id);
  
    if (!post) {
      return res.status(404).json({ message: 'Ups, Post not found' });
    }
  
    // Return the post with a 200 status code
    res.status(200).json(post);
}

// Get posts by category
const getPostsByCategory = (req, res) => {
    const { category } = req.params;
    const postsByCategory = posts.filter((post) => post.category == category );
  
    if (postsByCategory.length == 0) {
      return res.status(404).json({ message: 'Posts not found' });
    }
  
    // Return an array of all the posts by category with status code 200
    res.status(200).json(postsByCategory);
}

//create post 
const createPost =  (req, res) => {
    // Retrieve the name from the request body
    const { title, image, description, category } = req.body;
  
    if (!title || !image || !description || !category) {
      // If body values are empty or undefined return a 400 status code with a message
      return res.status(400).json({ message: 'all fields are required.' });
    }
  
    // Generate a new post
    const newPost = {
      id: Date.now().toString(),
      title: title,
          image: image,
          description: description,
          category: category,
          comments: []
    };
    // Add the new post to our array
    posts.push(newPost);
  
    // Return the created post with a 201 status code
    res.status(201).json(newPost);
};

//create post comment
const createComment = (req, res) => {
	const { id } = req.params;
  const { author, content } = req.body;
  const post = getPost(id);

  if (!author || !content) {
    // If body values are empty or undefined return a 400 status code with a message
    return res.status(400).json({ message: 'all fields are required.' });
  }

  // Generate a new Comment
  const newComment = {
    id: Date.now().toString(),
    author: author,
		content: content,
  };
	console.log(post)
	comments.push(newComment);
	post.comments.push(newComment.id);

  // Return the created comment with a 201 status code
  res.status(201).json(newComment);
}

//delete post
const deletePost = (req, res) => {
    // Retrieve the id from the route params
    const { id } = req.params;
    // Retrieve the index of the Post in the array
    const postIndex = posts.findIndex((p) => p.id === id);
  
    // "findIndex" will return -1 if there is no match
    if (postIndex === -1) {
      // If we don't find the Post return a 404 status code with a message
      return res.status(404).json({ message: 'Post not found' });
    }
  
    // Remove the post from the array
    posts.splice(postIndex, 1);
  
    // Return a 204 status code
    res.status(204).send();
};

//update post
const updatePost = (req, res) => {
    // Retrieve the id from the route params
    const { id } = req.params;
    const postIndex = posts.findIndex((p) => p.id === id);
  
    // "findIndex" will return -1 if there is no match
    if (postIndex === -1) {
      return res.status(404).json({ message: 'post not found' });
    }
  
    // Generate a copy of our post
    const updatedPost = { ...posts[postIndex] };
    // Retrieve the name from the request body
    const { title, image, description, category } = req.body;
  
    if (!title) {
      // If body values are empty or undefined return a 400 status code with a message
      return res.status(400).json({ message: 'title required.' });
    }
  
    // Check if we have a name, if so update the property
    if (title) {
      updatedPost.title = title;
    }
    if (image) {
      updatedPost.image = image;
    }
    if (description) {
      updatedPost.description = description;
    }
    if (category) {
      updatedPost.category = category;
    }
  
  
    // Update the post in our array
    posts[postIndex] = updatedPost;
  
    // Return the updated post with a 200 status code
    res.status(200).json(updatedPost);
};


export default {
    getPosts,
    getPostById,
    getPostsByCategory,
    createPost,
    createComment,
    deletePost,
    updatePost
}



