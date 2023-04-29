import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {

    const categoryNews = useLoaderData()
    return (
        <div>
            {
                categoryNews.length !== 0 
                ? categoryNews.map(n => <NewsCard key={n._id} news={n}></NewsCard>) 
                : <span className="text-danger fs-1">There category has no any NEWS</span> 
            }

        </div>
    );
};

export default Category;