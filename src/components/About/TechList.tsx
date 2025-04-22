import { TechCategoryList } from "../../types/tech";
import CategorySection from "./CategorySection";



type TechListProps = {
    techList: TechCategoryList;
};

export default function TechList({ techList }: TechListProps) {
    return (
        <section className="about-tech">
            <h2 className="about-tech__title">Tech I've Used</h2>
            <div className="about-tech__list">
                <ul className="category__name-col">
                    {
                        techList.map(category => {
                            return (
                                <li key={category.name} className="category__name-row">
                                    {category.name}
                                </li>
                            );
                        })
                    }
                </ul>
                <ul className="category__list-col">
                    {
                        techList.map(category => {
                            return (
                                <li key={category.name} className="category__list-row">
                                    <CategorySection category={category} />
                                </li>
                            );
                        })
                    }
                </ul>

            </div>
        </section>
    );
}