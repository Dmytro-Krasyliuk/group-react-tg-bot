import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";


const MainPage = () => {
    const [value, setValue] = useState('')
    function sendData() {
        let id = 957139896;
        let token = "6449761336:AAHE_3GEqCMhdeJy8Dp62SsbiJsSLNbJ9Tw";

        fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
          method: "POST",
          body: JSON.stringify({
            chat_id: id,
            photo: value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
        
    }
  return (
    <Stack
      sx={{
        width: "100vw",
        maxWidth: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <TextField
        onChange={(e)=>{setValue(e.target.value)}}
        sx={{ background: "white" }}
        label="write link to image"
        id="fullWidth"
      />
      <Button onClick={() => {sendData()}} variant="contained">Send to Telegram Bot</Button>
    </Stack>
  );
};
export default MainPage;
