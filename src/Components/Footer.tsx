import { Link } from "react-router";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Link to={{ pathname: "https://myanimelist.net/" }} target='_blank'>
        Click to open MyAnimeList
      </Link>
      <Link to={{ pathname: "https://github.com/johanv-mi/" }} target='_blank'>
        Click to open MyGitHubPage
      </Link>
      <Link to={{ pathname: "https://kitsu.docs.apiary.io/" }} target='_blank'>
        Click to open KitsuAPI
      </Link>
    </StyledFooter>
  );
}
