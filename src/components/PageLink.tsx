import Phonelink from "@mui/icons-material/Phonelink";
import Article from "@mui/icons-material/Article";
import ReceiptLong from "@mui/icons-material/ReceiptLong";
import Box from "@mui/material/Box";
import { Link as ReactLink } from "react-router-dom";

interface Link {
  index: number;
  link: string;
}

export default function PageLink(props:Link){
  const icons = [<ReceiptLong fontSize="large"/>, <Phonelink fontSize="large"/>, <Article fontSize="large"/>];
  return(
    <ReactLink style={{textDecoration: 'none', color: 'inherit'}}to={props.link.toLowerCase()}>
      <Box sx={{
        position: 'relative',
        backgroundColor: '#ffffff',
        top: '25vh',
        width: "25vw",
        height: "33vh",
        borderRadius: '27px',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
          <h2>{props.link}</h2>
          {icons[props.index]}
      </Box>
    </ReactLink>
  )
}