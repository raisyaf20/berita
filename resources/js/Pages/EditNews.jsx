import { Head, router } from "@inertiajs/react";
import React, { useState } from "react";

const EditNews = (props) => {
    const currentData = props[1];
    const [title, setTitle] = useState(currentData.title);
    const [description, setDesc] = useState(currentData.description);
    const [category, setCat] = useState(currentData.category);
    console.log(title, description, category);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: currentData.id,
            title,
            description,
            category,
        };
        router.post("/news/update", data);
        setTitle("");
        setDesc("");
        setCat("");
    };
    return (
        <div>
            <Head title="Edit Berita" />
            <div className="container mx-auto p-6">
                <h3 className="text-4xl font-bold text-center">Edit</h3>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form className="flex flex-col flex-wrap gap-6 items-center">
                        <input
                            type="text"
                            placeholder="Judul"
                            className="border border-slate-300 text-slate-800 rounded-md shadow-sm w-full max-w-xs"
                            onChange={(e) => setTitle(e.target.value)}
                            defaultValue={currentData.title}
                        />
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            className="border border-slate-300 text-slate-800 rounded-md shadow-sm w-full max-w-xs"
                            onChange={(e) => setDesc(e.target.value)}
                            defaultValue={currentData.description}
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            className="border border-slate-300 text-slate-800 rounded-md shadow-sm w-full max-w-xs"
                            onChange={(e) => setCat(e.target.value)}
                            defaultValue={currentData.category}
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
            </div>
        </div>
    );
};

export default EditNews;
