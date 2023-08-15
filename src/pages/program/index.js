import { Hero } from "@/components/Hero/Hero";
import Filterprogram from "@/components/FilterProgram/Filterprogram";
import { ProgramProvider } from "@/contexts/viewModeContext";


export default function Program({ data, bands }) {
    return (
        <>

            <Hero title="Program" />
            <ProgramProvider>
                <Filterprogram data={data} bands={bands} />
            </ProgramProvider>



        </>
    );
}


// Function to fetch data from the API
export async function getServerSideProps() {
    const url1 = 'https://blush-entertaining-raver.glitch.me/schedule/';
    const url2 = 'https://blush-entertaining-raver.glitch.me/bands/';

    const res1 = await fetch(url1);
    const res2 = await fetch(url2);
    // If no data - no page (404)
    if (res1.status != 200 && res2.status != 200) {
        return {
            notFound: true,
        };
    }
    const data = await res1.json();
    const bands = await res2.json();

    // Pass data to the page via props
    return {
        props: {
            data,
            bands
        },
    };
}

