import { Box } from "@mui/system";
import PageLink from "../components/PageLink";

export default function HomeView(){
  return(
    <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
      {['Ordenes', 'Aplicaciones', 'Reportes'].map((text, index) => (
        <PageLink link={text} index={index} />
      ))}
    </Box>
  )
}