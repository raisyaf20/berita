import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
export default function Dashboard({ auth, flash, myNews }) {
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [category, setCat] = useState("");
    const [notif, setNotif] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title,
            description,
            category,
        };
        router.post("/news", data);
        setTitle("");
        setDesc("");
        setCat("");
        setNotif(true);
    };

    setTimeout(function () {
        setNotif(false);
    }, 5000);
    useEffect(() => {
        if (!myNews) {
            router.get("/news");
        }
        return;
    }, []);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 ">
                {notif && (
                    <div className="transition-all duration-300 mx-auto w-80 alert alert-success mb-14">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>{flash.message}</span>
                    </div>
                )}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form
                        action=""
                        className="flex flex-col flex-wrap gap-6 items-center"
                    >
                        <input
                            type="text"
                            placeholder="Judul"
                            className="border border-slate-300 text-slate-800 rounded-md shadow-sm w-full max-w-xs"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            className="border border-slate-300 text-slate-800 rounded-md shadow-sm w-full max-w-xs"
                            onChange={(e) => setDesc(e.target.value)}
                            value={description}
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            className="border border-slate-300 text-slate-800 rounded-md shadow-sm w-full max-w-xs"
                            onChange={(e) => setCat(e.target.value)}
                            value={category}
                        />
                        <button
                            type="submit"
                            className="btn btn-success"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="container mx-auto p-4 mt-12">
                    <div className="flex flex-wrap items-center justify-center gap-12">
                        {myNews && myNews.length ? (
                            myNews.map((e, i) => (
                                <div
                                    key={i}
                                    className="card bg-slate-100 w-full px-4 lg:max-w-sm  shadow-xl"
                                >
                                    <div className="card-body">
                                        <h2 className="card-title text-slate-900">
                                            {e.title}
                                            <div className="badge badge-secondary">
                                                {e.author}
                                            </div>
                                        </h2>
                                        <p>{e.description}</p>
                                        <div className="card-actions justify-between">
                                            <div className="flex gap-3">
                                                <Link
                                                    href={route("edit.news")}
                                                    method="get"
                                                    data={{ id: e.id }}
                                                    className="py-2 px-5 text-slate-900 rounded-full bg-sky-400"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route("delete.news")}
                                                    method="post"
                                                    data={{ id: e.id }}
                                                    className="py-2 px-5 text-slate-900 rounded-full bg-red-400"
                                                >
                                                    Delete
                                                </Link>
                                            </div>
                                            <div className="badge badge-outline">
                                                {e.category}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h3 className="text-4xl">Tidak Ada Berita</h3>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
