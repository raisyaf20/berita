import { Link } from "@inertiajs/react";
import React from "react";

const Pagination = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;
    return (
        <div className="grid place-items-center h-10 mt-9">
            <div className="join">
                {prev && (
                    <Link href={prev} className="join-item btn">
                        «
                    </Link>
                )}
                <button className="join-item btn text-pink-400">
                    Page {current}
                </button>
                {next && (
                    <Link href={next} className="join-item btn">
                        »
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Pagination;
