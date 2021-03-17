import './news.scss';
import Article from './article/article';

function News(props) {
    return (
        <div className="news">
            <div className="header">Новости</div>
            {
                props?.admin &&
                <div className="add-news">
                    <div className="img"></div>
                    <div className="header">Добавить новость</div>
                </div>
            }
            <Article />
        </div>
    );
}

export default News;
