import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../ApiData";

import { Suspense } from "react";
import {
  StyledChangeImageFunc,
  StyledHomePage,
  StyledHomePageImageRound,
  StyledHomePageParts,
  StyledNavLink,
} from "../Components/styles/HomePage.styled";

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ["animeData"],
    queryFn: getTrending,
  });

  const pictures = [
    data?.data[2]?.attributes?.posterImage?.medium,
    data?.data[6]?.attributes?.posterImage?.medium,
    data?.data[5]?.attributes?.posterImage?.medium,
  ];

  function Loading() {
    return <h2>Loading...</h2>;
  }

  return (
    <StyledHomePage>
      <StyledHomePageParts>
        <StyledNavLink to='/getintoit'>
          <StyledHomePageImageRound
            src={data?.data[9]?.attributes?.posterImage?.medium}
            alt=''
          />
          <h2>SHOULD I GIVE IT A TRY?</h2>
        </StyledNavLink>
      </StyledHomePageParts>
      <StyledHomePageParts>
        <Suspense fallback={<Loading />}>
          <StyledNavLink to='/discover'>
            {pictures?.length > 0 && (
              <StyledChangeImageFunc pictures={pictures} />
            )}
            <h2>POPULAR RIGHT NOW</h2>
          </StyledNavLink>
        </Suspense>
      </StyledHomePageParts>
    </StyledHomePage>
  );
}
