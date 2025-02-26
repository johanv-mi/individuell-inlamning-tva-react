import { Link } from "react-router";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <footer>
      <StyledFooter>
        <Link to={{ pathname: "https://myanimelist.net/" }} target='_blank'>
          MyAnimeList
        </Link>
        <Link
          to={{ pathname: "https://github.com/johanv-mi/" }}
          target='_blank'
        >
          MyGitHubPage
        </Link>
        <Link
          to={{ pathname: "https://kitsu.docs.apiary.io/" }}
          target='_blank'
        >
          KitsuAPI
        </Link>
        <Link to={{ pathname: "https://jikan.moe/" }} target='_blank'>
          JikanAPI
        </Link>
      </StyledFooter>
    </footer>
  );
}
