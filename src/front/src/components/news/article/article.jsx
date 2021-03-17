import './article.scss';
import defaulArticleImg from '../../../img/article.png';
import { useState } from 'react';

function Article(props) {
    let [isOpen, setIsOpen] = useState(false);
    const articleClassName = isOpen ? "article open" : "article";

    return (
        <div className={articleClassName} onClick={ () => { setIsOpen(!isOpen) } }>
            <img src={props?.img ?? defaulArticleImg} />
            <div className="content">Новости1 новости2 новости3 новости4 новости5 новости6 новости7 новости8 новости9 новости0 новости новости новости новости новости новости новости новости новости новости новости новости новости новости новости</div>
            <div className="date">01.01.2021</div>
        </div>
    );
}

export default Article;
