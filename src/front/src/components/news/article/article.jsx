import './article.scss';
import defaulArticleImg from '../../../img/article.png';

function Article(props) {
    return (
        <div className="article">
            <img src={props?.img ?? defaulArticleImg} />
            <div className="content">Новости новости новости новости новости новости новости новости новости новости новости новости новости</div>
            <div className="date">01.01.2021</div>
        </div>
    );
}

export default Article;
