import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Avatar } from "@mui/material";
import styled from "@emotion/styled";
const AvatarImg=styled(Avatar)`
  transition: filter 0.3s ease-in-out;
:hover{
  /* filter: blur(2px); */
  filter: opacity(30%);

  &::after {
      content: "Upload Image"; /* Add content to the pseudo-element */
      position: absolute; /* Set position to absolute to position the text */
      top: 50%; /* Position text vertically at the center */
      left: 50%; /* Position text horizontally at the center */
      transform: translate(-50%, -50%); /* Center the text */
      color: #fff; /* Set text color */
      background-color: rgba(0, 0, 0, 0.7); 
      padding: 8px; /* Add padding to the text */
      border-radius: 4px; /* Add border-radius to the text */
    }
}
`
const AvatarImage = (props) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const tablet = useMediaQuery(theme.breakpoints.up("sm"));
  const mobile = useMediaQuery(theme.breakpoints.up("xs"));

  const sizes = () => {
    if (desktop) return { width: 150, height: 150 };

    if (tablet) return { width: 150, height: 150 };
    if (mobile) return { width: 150, height: 150 };
  };

  return <AvatarImg src={props.src} className={props.class} sx={sizes()} />;
};
export default AvatarImage;
