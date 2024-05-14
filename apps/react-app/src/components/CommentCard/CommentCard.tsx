import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Container, Content, Author } from "./CommentCard.styles";

// const comment = {
//   _id: "",
//   author: "",
//   content: "",
//   createdAt: "",
//   updatedAt: "",
//   __v: "",
// }; // ACT 1 - Fill all the properties with random data

function CommentCard() {
  return (
    <Container item sm={8}>
      <AccountCircleIcon />
      <Content>
        <Author>{/* ACT 1 - Render comment author */}</Author>
        <Typography>{/* ACT 1 - Render comment content */}</Typography>
      </Content>
    </Container>
  );
}

export default CommentCard;
