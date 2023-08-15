import { Hero } from "@/components/Hero/Hero";
import Image from "next/image";

export default function Band({ data }) {
    return (
        <>
            <Hero title="Program" />
            <h1>{data.name}</h1>
            <ul>
                {data.members.map((memeber) => (<li key={data.name}>{memeber}</li>))}
            </ul>
            <Image
                src={data.logo.startsWith("http://") ? data.logo : `/logo/${data.logo}`}
                alt={data.logoCredits}
                width={300} // Adjust width as needed
                height={300} // Adjust height as needed
            />
        </>
    );
}

// Function to fetch data from the API
export async function getStaticPaths() {
    const res = await fetch('https://blush-entertaining-raver.glitch.me/bands/')

    const data = await res.json();
    console.log(data);
    const pages = data.map((band) => ({ params: { slug: band.slug } }));
    return {
        paths: pages,
        fallback: false, // can also be true or 'blocking'
    };
}

export async function getStaticProps(context) {
    const slug = context.params.slug;
    const url = 'https://blush-entertaining-raver.glitch.me/bands/' + slug;
    const res = await fetch(url);
    // If no data - no page (404)
    if (res.status != 200) {
        return {
            notFound: true,
        };
    }
    const data = await res.json();
    // Pass data to the page via props
    return {
        props: {
            data
        },
    };
}
