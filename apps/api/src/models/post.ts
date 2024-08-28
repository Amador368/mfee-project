interface Post {
    id: string,
    title: string,
    image: string,
    description: string,
    category: string, //string Id of the category
    comments: string[], //array Array of comment ids
}

export default Post