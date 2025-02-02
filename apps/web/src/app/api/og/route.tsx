import { ImageResponse } from "next/og";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

export async function GET() {
  const title = "UNATIVE.DEV";
  const description = "UNIVERSAL UI LIBRARY (EXPO, NEXTJS)";

  return new ImageResponse(
    (
      <div
        tw="bg-white w-full h-full font-bold flex items-center justify-center flex-col"
        style={{
          backgroundColor: "white",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          tw=""
          style={{
            fontSize: 100,
            fontFamily: "font-title",
          }}
        >
          {title}
        </div>

        <div
          tw="mt-4"
          style={{
            fontSize: 50,
            fontFamily: "font-description",
          }}
        >
          {description}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "font-title",
          data: await loadGoogleFont("Ubuntu:wght@700", title),
          style: "normal",
        },
        {
          name: "font-description",
          data: await loadGoogleFont("Ubuntu:wght@300", description),
          style: "normal",
        },
      ],
    },
  );
}
