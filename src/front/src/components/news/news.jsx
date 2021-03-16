import './news.scss';
import Article from './article/article';

function News() {
    return (
        <div className="news">
            <div className="header">Новости</div>
            <Article />
        </div>
    );
}

export default News;
