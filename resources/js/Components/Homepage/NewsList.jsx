import React from "react";
const isNews = (news) => {
    return news.map((e, i) => (
        <div
            key={i}
            className="card w-full px-4 lg:max-w-sm bg-base-100 shadow-xl"
        >
            <figure>
                <img src="https://placeimg.com/400/255/shoes" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {e.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>

                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{e.category}</div>
                </div>
            </div>
        </div>
    ));
};

const noNews = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <h2 className="card-title">News Days</h2>
                <p>NO NEWS</p>
            </div>
        </div>
    );
};

const NewsList = ({ item }) => {
    return !item ? noNews() : isNews(item);
};

export default NewsList;
