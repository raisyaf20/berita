import NewsList from "@/Components/Homepage/NewsList";
import Pagination from "@/Components/Homepage/Pagination";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Homepage({ title, news, auth }) {
    return (
        <>
            <Head title="Home Berita" />
            <div className="container mx-auto p-4">
                <Navbar user={auth} />
                <h1 className="text-4xl font-bold mt-3 dark:text-white">
                    {title}
                </h1>
                <div className="flex flex-wrap justify-center gap-8 mt-9">
                    <NewsList item={news.data} />
                </div>
                <div>
                    <Pagination meta={news.meta} />
                </div>
            </div>
        </>
    );
}
