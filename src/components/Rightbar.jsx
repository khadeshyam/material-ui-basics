import React from "react";
import { Box ,Typography,Avatar,AvatarGroup, ImageList} from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block"} }} >
      <Box sx={{ position:"fixed" }} >
       <Typography variant="h6" fontWeight={200} mb={2}>Online Friend</Typography>
       <AvatarGroup max={7}>
       <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" />
       <Avatar alt="Remy Sharp" src="https://images.unsplash.com/profile-1601046858289-1cfe4daf681fimage?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
       <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
       <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
       <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
       <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
       <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" />
       <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" />
       <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" />
     </AvatarGroup>
     <Typography variant="h6" fontWeight={200} m={2}>Latest Photos</Typography>
     <ImageList>

     </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
