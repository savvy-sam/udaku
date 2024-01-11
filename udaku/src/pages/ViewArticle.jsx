import Layout from "../components/Layout";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { client } from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { SampleImageComponent } from "../components/SampleImageComponent";
import dayjs from "dayjs";

const ViewArticle = () => {
  const { id } = useParams();

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  const singleQuery = `*[_type=="post" && slug.current =="${id}"]{
    title,
    slug,
    body,
    summary,
    publishedAt,
    _updatedAt,
    _rev,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    "name": author->name,
    "authorImage": author->image,
  }`;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => client.fetch(singleQuery),
  });

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>error...</div>;

  if (!isLoading && data.length < 1) {
    return (
      <div>
        <p> Page Not Found</p>
      </div>
    );
  }
  return (
    <Layout>
      <>
        <Box>
          <article>
            <header>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    padding: "20px",
                    fontFamily: "Vollkorn",
                    fontSize: {
                      sm: "12px",
                      md: "14px",
                      lg: "24px",
                    },
                  }}
                >
                  {data[0]?.title}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mixBlendMode: "darken",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: { xs: "100%", md: "80%" },
                    objectFit: "cover",
                    maxHeight: { xs: 400, lg: 400 },
                    maxWidth: { xs: 300, lg: 700 },
                  }}
                  alt={data[0]?.title}
                  src={data[0]?.mainImage.asset.url}
                />
              </Box>
              <Box
                sx={{
                  paddingY: 1,
                  paddingX: "10px",
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <img
                  style={{ height: 30, width: 30, borderRadius: "9999px" }}
                  src={urlFor(data[0].authorImage).url()}
                  alt={data[0]?.title}
                />
                <Typography
                  variant="body"
                  sx={{
                    fontSize: "1.154rem",
                    fontWeight: 500,
                    fontFamily: "cursive",
                  }}
                >
                  {data[0]?.name}
                </Typography>
              </Box>
              {data[0] && (
                <Box>
                  <Typography
                    variant="body"
                    sx={{
                      fontSize: "1.0rem",
                      fontWeight: 450,
                      fontFamily: "system-ui",
                      paddingY: "7px",
                      paddingLeft: "20px",
                      fontStyle: "italic",
                    }}
                  >
                    UPDATED:{" "}
                    {data[0]?._updatedAt > data[0]?.publishedAt
                      ? dayjs(data[0]?._updatedAt).format("dddd, MMMM D, YYYY")
                      : dayjs(data[0]?.publishedAt).format(
                          "dddd, MMMM D, YYYY"
                        )}
                  </Typography>
                </Box>
              )}
            </header>
            <Box
              sx={{
                padding: "10px",
              }}
            >
              <PortableText
                value={data[0]?.body}
                components={{
                  types: {
                    image: SampleImageComponent,
                  },
                }}
              />
            </Box>
          </article>
        </Box>
      </>
    </Layout>
  );
};

export default ViewArticle;
