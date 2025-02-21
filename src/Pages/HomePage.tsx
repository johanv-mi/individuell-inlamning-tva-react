import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../ApiData";

import {
  StyledHomePage,
  StyledHomePageImage,
  StyledHomePageParts,
  StyledNavLink,
} from "../Components/styles/HomePage.styled";

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ["animeData"],
    queryFn: getTrending,
  });

  return (
    <StyledHomePage>
      <StyledHomePageParts>
        <StyledNavLink to='/getintoit'>
          <StyledHomePageImage
            src={data?.data[9]?.attributes?.posterImage?.medium}
            alt=''
          />
          <h2>SHOULD I GIVE IT A TRY?</h2>
        </StyledNavLink>
      </StyledHomePageParts>
      <StyledHomePageParts>
        <img src={data?.data[1]?.attributes?.posterImage?.medium} alt='' />
      </StyledHomePageParts>
    </StyledHomePage>
  );
}

<StyledNavLink to='/getintoit'>GET IN TO IT?</StyledNavLink>;
