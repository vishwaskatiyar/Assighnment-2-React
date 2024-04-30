function Widget() {
    return (
        <div className="container">
            <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-zinc-800 shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">Learn web development</h1>
                <p className="text-zinc-700 mb-4 text-black dark:text-zinc-300">
                    Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.
                </p>
                <p className="text-zinc-700 mb-4 text-black dark:text-zinc-300">
                    The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from <a href="https://developer.mozilla.org/" className="text-blue-500 hover:text-blue-700">the rest of MDN</a>, and other intermediate to advanced resources that assume a lot of previous knowledge.
                </p>
                <p className="text-zinc-700 text-black dark:text-zinc-300">
                    If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.
                </p>
            </div>
        </div>
    );
}

const root = document.getElementById('root');
const renderRoot = ReactDOM.createRoot(root);

renderRoot.render(
    <Widget />
);
