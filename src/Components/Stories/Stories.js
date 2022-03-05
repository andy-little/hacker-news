import React from "react";

import { useGlobalContext } from "../../context";

const Stories = () => {
    const { loading, hits, hideStory } = useGlobalContext();

    if (loading) {
        return <div className="loading"></div>;
    }

    return (
        <section className="stories">
            {hits.map(
                ({
                    author,
                    created_at,
                    num_comments,
                    objectID: id,
                    title,
                    url,
                    points,
                }) => {
                    if (title && url) {
                        return (
                            <article key={id} className="story">
                                <p className="url">{url}</p>
                                <a href={url}>
                                    <h4 className="title">{title}</h4>
                                </a>
                                <p className="info">{created_at}</p>
                                <p className="info">
                                    Author: <span>{author} |</span>
                                    {num_comments} comments | {points} points
                                </p>
                                <a
                                    className="read-link"
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    read more
                                </a>
                                <button
                                    className="remove-btn"
                                    onClick={() => hideStory(id)}
                                >
                                    hide
                                </button>
                            </article>
                        );
                    } else {
                        return null;
                    }
                }
            )}
        </section>
    );
};

export default Stories;
