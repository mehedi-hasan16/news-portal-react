import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {

    const categoryNews = useLoaderData()
    return (
        <div>
            {
            categoryNews.map(n=><NewsCard key={n._id} news={n}></NewsCard>)
            }
        </div>
    );
};

export default Category;