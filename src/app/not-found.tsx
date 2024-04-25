import Link from "next/link";

export default function NotFound(){
    return(
        <div>
            Page Not NotFound
            <p> Sorry!! the Page you are looking for is not exists</p>
            <Link href="/"> Return Home</Link>
        </div>
    )
}