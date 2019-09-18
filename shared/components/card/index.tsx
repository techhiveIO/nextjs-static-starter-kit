import React, {FunctionComponent, Fragment} from 'react';
import './styles.css';
import Link from 'next/link';

type Props = {
    info: { id: string, title: string; description: string; heroImage: string; publishedAt: Date; slug: string }
}
const getNavigationLink = (slug) => `/post/${slug}`;
const getHref = (slug) => ({
    pathname: '/post',
    query: {post: slug},
});
const Card: FunctionComponent<Props> = ({info}) => {

    const cardBGStyles = {
        backgroundImage: `url(${info.heroImage})`,
        background: `linear-gradient(45deg, rgba(18, 40, 76, 0.56), rgba(39, 173, 213, 0.56), rgba(79, 192, 176, 0.56)), url(${info.heroImage}) no-repeat`,
    };

    return (
        <Fragment>
            <div className="card">
                <div className="card__header" style={cardBGStyles}/>
                <div className="card__body">
                    <h3 className="card__title">{info.title}</h3>
                    <p className="card__text">{info.description}</p>
                </div>

                <div className="card__footer">
                    <Link href={getHref(info.slug)} as={getNavigationLink(info.slug)}>
                        <a className="card__action">Explore</a>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default Card;